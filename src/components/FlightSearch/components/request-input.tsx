import { cn } from "@nkeji-web/lib/utils";

interface RequestProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired?: boolean;
  containerClass?: string;
}

const RequestsInput: React.FC<RequestProps> = ({
  label,
  isRequired,
  containerClass,
  type,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col space-y-1 w-[180px]", containerClass)}>
      <label htmlFor={label}>
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={label}
        placeholder={props.placeholder}
        className="border border-[#D0D5DD] rounded-lg bg-white p-3"
        {...props}
      />
    </div>
  );
};

export default RequestsInput;
