import { cn } from "@nkeji-web/lib/utils";

interface RequestProps {
    label: string;
    placeHolder: string;
    className?: any;
    isRequired?: boolean;
  }

const RequestsInput: React.FC<RequestProps> = ({
    label,
    placeHolder,
    className,
    isRequired
  }) => {
    return (
      <div className={cn("flex flex-col space-y-1 w-[180px]", className)}>
        <label htmlFor={label}>{label}
        {isRequired &&
        <span className="text-red-500">*</span>
  }
        
        </label>
        <input
          type="text"
          id={label}
          placeholder={placeHolder}
          className="border border-[#D0D5DD] rounded-lg bg-white p-3"
        />
      </div>
    );
  };

  export default RequestsInput;