import {
  GoCardlessDropinOptions,
  useGoCardlessDropin,
} from "@gocardless/react-dropin";
import React from "react";

const GoCardlessDropinButon = ({
  options,
  title,
}: {
  options: GoCardlessDropinOptions;
  title: string;
}) => {
  const { open } = useGoCardlessDropin({ ...options });

  return (
    <button
      type="button"
      onClick={() => open()}
      className="text-white  inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4"
    >
      {title}
    </button>
  );
};

export default GoCardlessDropinButon;
