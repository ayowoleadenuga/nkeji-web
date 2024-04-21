"use client"

import { Checkbox } from "./checkbox"

interface CheckboxProps {
    label:string;
    helperText?:string;
    showHelperText?:boolean;
}

export const CheckboxWithText:React.FC<CheckboxProps> = ({label, helperText, showHelperText=false}) =>{
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm text-[#1B1E21] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {
            showHelperText && 
        <p className="text-sm text-muted-foreground">
         {helperText}
        </p>
        }
      </div>
    </div>
  )
}
