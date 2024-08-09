import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nkeji-web/components/ui/accordion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import RequestsInput from "./request-input";
import PassengerDetailCard from "./passenger-detail-card";
import { FlightSearchPayload, Passenger } from "@nkeji-web/lib/global-types";
import PassengerForm from "./passenger-form";
import { RootState } from "@nkeji-web/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updatePassengerDetails } from "@nkeji-web/redux/features/flightSelectReducer";

interface PassengerDetailsProps {
  showDetails?: boolean;
  setCurrentTab?: any;
  index?: number;
  flightSearchPayload: FlightSearchPayload;
}

const PassengerDetails: React.FC<PassengerDetailsProps> = ({
  showDetails,
  setCurrentTab,
  index,
  flightSearchPayload,
}) => {
  const { noOfAdults, noOfInfants, noOfKids } = flightSearchPayload;
  const passengerCount = noOfAdults + noOfInfants + noOfKids;
  const initialPassengers: Passenger[] = Array.from(
    { length: passengerCount },
    (_, index) => ({
      id: `Passenger ${index + 1}`,
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      email: "",
      gender: undefined,
      phoneNumber: "",
    })
  );
  const [passengers, setPassengers] = useState<Passenger[]>(initialPassengers);
  const [showPassengerForm, setShowPassengerForm] = useState<boolean>(false);
  const [selectedPassengerIndex, setSelectedPassengerIndex] = useState<
    number | null
  >(null);
  const uploadedPassengers = useSelector(
    (state: RootState) => state.flightSelect.passengerDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (uploadedPassengers && uploadedPassengers.length) {
      const { firstName, lastName, dob } = uploadedPassengers[0];
      if (firstName.length > 2 && lastName.length > 2 && dob.length > 2) {
        setPassengers(uploadedPassengers);
      }
    }
  }, []);

  const handleEditPassenger = (index: number) => {
    if (index === selectedPassengerIndex && showPassengerForm) {
      setShowPassengerForm(false);
      setSelectedPassengerIndex(null);
      return;
    }
    setShowPassengerForm(true);
    setSelectedPassengerIndex(index);
  };

  const handleChangePassenger = (field: keyof Passenger, value: string) => {
    if (selectedPassengerIndex !== null) {
      const newPassengers = [...passengers];
      newPassengers[selectedPassengerIndex] = {
        ...newPassengers[selectedPassengerIndex],
        [field]: value,
      };
      setPassengers(newPassengers);
      dispatch(updatePassengerDetails(newPassengers));
    }
  };
  return (
    <div>
      {showDetails ? (
        <div className="bg-white w-full py-4 px-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg inter-bold">Traveler(s) details</h3>
              <p className="text-sm ">
                We&apos;ll send your flight confirmation to the information
                provide.
              </p>
            </div>
            <div
              onClick={() => index && setCurrentTab(index - 1)}
              className="cursor-pointer flex space-x-2 items-center w-[fit-content]"
            >
              <Image
                height={15}
                width={15}
                src="/assets/edit.svg"
                alt=""
                className="cursor-pointer"
              />
              <p className="text-sm text-[#7F56D9] inter-semibold underline">
                Edit details
              </p>
            </div>
          </div>

          <div className="flex space-x-5 mt-5 mb-3">
            {passengers.map((detail, index) => {
              return (
                <div className="" key={index}>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`rounded-full  h-[32px] w-[32px] flex justify-center items-center
              ${
                detail.gender?.toLowerCase().includes("female")
                  ? "bg-[#7F56D9]"
                  : "bg-[#D7CBF3]"
              }
              `}
                    >
                      <Image
                        height={15}
                        width={15}
                        src={
                          detail.gender?.toLowerCase().includes("female")
                            ? "/assets/contact.svg"
                            : "/assets/contact-purple.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-base inter-semibold">
                        Passenger {index}
                      </p>
                      <p className="text-[#A3A7AB] text-base inter-medium">
                        {detail.title} . {detail.lastName} . {detail.dob}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white w-full py-4 px-5 ">
          <div className="flex justify-between  items-center ">
            <div className="w-[70%] ">
              <h3 className="text-lg inter-bold">Who&apos;s flying?</h3>
              <p className="text-sm ">
                <b>Note:</b> &quot;First Name&quot; and &quot;Last Name&quot;
                must match your travel document exactly.
              </p>
            </div>
            <span className="flex items-center justify-end space-x-1 lg:space-x-2 w-[25%] ">
              <Image
                height={15}
                width={15}
                src="/assets/passenger.svg"
                alt=""
                color="#8A3FFC"
              />
              <p className="md:block hidden text-[14px] xl:text-[16px] ">
                {passengerCount} Passengers
              </p>
              <p className="md:hidden block">{passengerCount}</p>
            </span>
          </div>

          <div className="w-full flex flex-wrap  gap-5  justify-start mt-5 mb-3">
            {passengers.map((passenger, index) => (
              <div key={passenger.id} className="w-full md:w-auto ">
                <PassengerDetailCard
                  index={index}
                  title={passengers[index].title}
                  firstName={passengers[index].firstName}
                  lastName={passengers[index].lastName}
                  onEdit={() => handleEditPassenger(index)}
                  isSelected={index === selectedPassengerIndex}
                />
              </div>
            ))}
          </div>
          {selectedPassengerIndex !== null && showPassengerForm && (
            <PassengerForm
              passenger={passengers[selectedPassengerIndex]}
              onChange={handleChangePassenger}
            />
          )}

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Meal, frequent flyers, special assistance and additional
                requests?
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap w-[80%] gap-4">
                  <RequestsInput label="Meal preference" placeholder="None" />
                  <RequestsInput
                    label="Special assistance"
                    placeholder="None"
                  />
                  <RequestsInput
                    label="Addition requests"
                    placeholder="Request to book cycle"
                  />
                  <RequestsInput
                    label="Frequent flyer program"
                    placeholder="None"
                  />
                  <RequestsInput
                    label="Frequent flyer number"
                    placeholder="frequent flyer number"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default PassengerDetails;
