"use client"

import { cn } from "@nkeji-web/lib/utils";
import { Checkbox } from "./checkbox"

interface CheckboxProps {
    label:string;
    helperText?:string;
    showHelperText?:boolean;
    className?:string;
}

export const CheckboxWithText:React.FC<CheckboxProps> = ({label, helperText, showHelperText=false, className}) =>{
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className={cn("text-sm text-[#1B1E21] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
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
