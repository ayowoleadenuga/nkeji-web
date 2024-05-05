import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  MouseEvent,
} from "react";
import { useDispatch } from "react-redux";
import { Airport } from "@nkeji-web/lib/global-types";
import useDebounce from "@nkeji-web/lib/useDebounce";
import { truncateSentence, cn } from "@nkeji-web/lib/utils";
import { useGetAirportsQuery } from "@nkeji-web/redux/features/apiSlice";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
  updateDeparture,
  updateDestination,
} from "@nkeji-web/redux/features/flightSearchReducer";

type AirportSearchComponentProps = {
  label: string;
  id: "departure" | "destination";
  className?: string;
};

const emptyAirport = { id: "", name: "", city: "", country: "" } as Airport;

const AirportSearchComponent: React.FC<AirportSearchComponentProps> = ({
  label,
  id,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<Airport | null>(null);
  const [text, setText] = useState<string>("");
  const debouncedText = useDebounce(text, 500);
  const { data } = useGetAirportsQuery(debouncedText, {
    skip: debouncedText.length <= 2,
  });
  const dispatch = useDispatch();
  const action = id === "departure" ? updateDeparture : updateDestination;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (text.length === 0 && !value) {
      setIsFocused(false);
    }
  }, [text, value]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSelectAirport = useCallback(
    (event: MouseEvent<HTMLLIElement>, option: Airport) => {
      event.preventDefault();
      setIsFocused(true);
      setValue(option);
      dispatch(action(option));
    },
    [dispatch, action]
  );

  const clearValue = useCallback(
    (event: MouseEvent<SVGSVGElement>) => {
      event.preventDefault();
      event.stopPropagation(); // Prevent onBlur event on the parent div
      setValue(null);
      dispatch(action(emptyAirport));
      setText("");
      setIsFocused(true);
    },
    [dispatch, action]
  );

  return (
    <>
      <div
        className={cn(
          "w-full pl-3 md:w-[200px] lg:w-[240px] justify-start text-left font-normal relative transition-colors h-full",
          className
        )}
        onClick={() => setIsFocused(true)}
      >
        <label
          htmlFor={id}
          className={`absolute cursor-pointer left-4 md:left-2 top-1/2 px-0 transition-all ease-in-out duration-300 transform flex items-center ${
            isFocused || value
              ? "-translate-y-8 text-xs text-purple-500"
              : "text-gray-500 -translate-y-1/2"
          }`}
        >
          <span className="inter-medium">{label}</span>
        </label>
        {isFocused && !value && (
          <input
            id={id}
            ref={inputRef}
            type="text"
            className="mt-8 p-2 w-full outline-none"
            value={text}
            onChange={handleChange}
            autoFocus={isFocused}
          />
        )}
        {value && (
          <div className="w-full flex">
            <div className="pt-8 pb-1  px-2 text-gray-700">
              <p className="text-[#33383E] text-sm inter-bold">{value.city}</p>
              <p className="text-[#A3A7AB] text-xs">
                {`${truncateSentence(value.name, 15)}${" "}(${value.id})`}
              </p>
            </div>

            <p className="ml-2 flex flex-col justify-center items-center">
              <CrossCircledIcon
                onClick={clearValue}
                className="cursor-pointer mt-6"
                stroke="#7F56D9"
              />
            </p>
          </div>
        )}
      </div>

      {isFocused && !value && debouncedText.length > 2 && (
        <ul className="w-full shadow-lg border-gray-600 bg-[#FDFDFD] rounded p-2 mt-2 max-h-80 overflow-y-scroll text-center flex flex-col space-y-5">
          {data?.data?.map((option: Airport) => (
            <li
              key={option.id}
              className="text-left p-2 hover:bg-[#eeedfb] cursor-pointer"
              onClick={(e) => handleSelectAirport(e, option)}
            >
              <p className="text-[#33383E] text-sm inter-bold">{option.name}</p>
              <p className="text-[#A3A7AB] text-xs">
                <span>{option.city}</span>,<span>{option.country}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AirportSearchComponent;
