import Image from "next/image";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

const ProtectionDialog = ({isBaggage = false}) => {
    const cancellationRefundLists = [
        'Illness including COVID-19',
        'Sickness, Accident and Injury',
        'Pre-existing Medical Conditions',
        'Flight disruption',
        'Mechanical Breakdown',
        'Death of immediate family',
        'Home emergency',
        'Adverse weather',
        'Theft of documents',
        'Public transport failure',
        'And many more...'
    ]

    const baggageRefundLists = [
        'Get £2000 compensation if your baggage is not found within 4 days (96 hours).',
        'Get real time update by SMS & email on your baggage tracking.',
        "We don't need to know your baggage contents.",
        'Applied for all checked baggage, including last minute gate checks.',
       
    ]

    const refundLists = isBaggage ? baggageRefundLists : cancellationRefundLists

  return (
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>
            <h3 className="text-center text-sm px-10">
              Are you sure you don&apos;t want {isBaggage ? 'lost baggage': 'cancellation'} protection?
            </h3>
          </DialogTitle>
          <DialogDescription>
            <div className="text-center flex flex-col items-center">
              <p className="mt-2 text-center text-xs ">
                With {isBaggage ? 'baggage' :'cancellation'} protection, this booking can be fully refunded
                for any of the below reasons
              </p>
              {
                isBaggage ? null :
                <>
                <p className="text-[#4B525A] text-sm mt-3">
                    Full refund of  
                </p>
                <p className="inter-semibold text-[#7F56D9] text-lg">
                £5,541.95
                </p>
                </>
              }

                <ul className="flex flex-col space-y-4 mt-8">
                    {refundLists.map(refund=>{
                        return (
                            <li key={refund} className="flex space-x-3 items-center">
                                <Image width={14} height={12} src="/assets/check-colored.svg" alt="" />
                                <p className="text-left inter-semibold text-[#1B1E21]">{refund}</p>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex flex-col space-y-2 mt-8">
                <button className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full px-8 py-4">Protect my {isBaggage ? 'baggages' : 'booking'}</button>
                    <button className="text-[#1B1E21] inter-semibold text-sm  bg-white border border-[#7F56D9] rounded-full px-8 py-4">I don&apos;t need protection</button>
                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
  );
};

export default ProtectionDialog;
