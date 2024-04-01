"use client";
import React, { useState, useRef, useEffect } from "react";

type FloatingLabelInputProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  icon?: React.ReactNode;
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  defaultValue,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const shouldLabelFloat = isFocused || value.length > 0;

  return (
    <div className="relative border-gray-200 transition-colors">
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // placeholder={isFocused ? placeholder : ""}
        className="w-full pt-4 pb-1 px-2 text-gray-700 bg-transparent focus:outline-none focus:ring-0"
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`absolute left-2 top-0 px-1 transition-all ease-in-out duration-300 transform ${
          shouldLabelFloat
            ? "-translate-y-6 text-xs text-purple-500"
            : "text-gray-500"
        }`}
      >
        {label}
      </label>
      {icon && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default FloatingLabelInput;
