import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const MyInput = (props: Props) => {
  return (
    <label className=" flex flex-col font-[700]  ">
      {props.title && (
        <p>
          {props.title}{" "}
          {props.required && (
            <span className="text-[#B33D3D] font-[700] ">*</span>
          )}
        </p>
      )}
      <input {...props} />
    </label>
  );
};

export default MyInput;
