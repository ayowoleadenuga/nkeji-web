"use client";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { cn } from "@nkeji-web/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { CalendarIcon } from "lucide-react";

type FloatingLabelInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  icon?: React.ReactNode;
  locationList?: any;
  isDatePicker?: boolean;
  className?: string;
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  defaultValue,
  icon,
  locationList,
  isDatePicker = false,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<{ state: string; city: string }>();
  const [text, setText] = useState<string>("");
  const [date, setDate] = React.useState<any>();

  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (inputRef.current && defaultValue) {
  //     setValue(defaultValue);
  //   }
  // }, [defaultValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleBlur = () => setIsFocused(false);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setValue(e.target.value);

  const shouldLabelFloat = isFocused || value;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            " w-full pl-3 md:w-[200px] lg:w-[240px] justify-start text-left font-normal relative  transition-colors  h-full",
            className
            // !isDatePicker && "text-muted-foreground"
          )}
          onBlur={() => setIsFocused(false)}
        >
          {isDatePicker && (
            <div className="w-full pt-10 pb-1 px-2 text-gray-700 text-sm">
              {date && format(date, "PPP")}
            </div>
          )}
          {value && (
            <div
              ref={inputRef}
              className="w-full pt-8 pb-1  px-2 text-gray-700"
            >
              <p className="text-[#33383E] text-sm inter-bold">{value.state}</p>
              <p className="text-[#A3A7AB] text-xs">{value.city}</p>
            </div>
          )}
          <label
            htmlFor={"date"}
            className={`absolute cursor-pointer left-4 md:left-2 top-1/2  px-0 transition-all ease-in-out duration-300 transform flex  items-center ${
              shouldLabelFloat
                ? "-translate-y-8 text-xs text-purple-500"
                : "text-gray-500 -translate-y-1/2"
            }`}
          >
            {icon && <CalendarIcon className="mr-2 h-4 w-4" color="#8A3FFC" />}
            <span className="inter-medium" onClick={() => setIsFocused(true)}>
              {label}
            </span>
          </label>
          {!isDatePicker && shouldLabelFloat && !value && (
            <input
              type="text"
              className="mt-8 p-2 w-full outline-none"
              value={text}
              onBlur={() => setIsFocused(false)}
              onChange={handleChange}
              autoFocus
            />
          )}
        </div>
      </PopoverTrigger>

      {isDatePicker ? (
        <PopoverContent className="w-auto text-center mt-5 " align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      ) : (
        <>
          {/* {text && text.length > 1 && shouldLabelFloat ? ( */}
          <PopoverContent className="w-auto text-center mt-5 " align="start">
            <div>
              <div className="text-center flex flex-col space-y-5">
                {locationList?.map((option: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between w-full cursor-pointer"
                      onClick={() => {
                        setValue((val) => ({
                          ...val,
                          state: option.state,
                          city: option.city,
                        }));
                      }}
                    >
                      <div className="text-left">
                        <p className="text-[#33383E] text-sm inter-bold">
                          {option.state}
                        </p>
                        <p className="text-[#A3A7AB] text-xs">{option.city}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
          {/* ) : (
            ""
          )} */}
        </>
      )}
    </Popover>
  );
};

export default FloatingLabelInput;
