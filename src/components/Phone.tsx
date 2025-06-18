import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  // className?:string;
  dark?: boolean;
  imgSrc: string;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img
        src={
          dark
            ? "/assets/phone-template-dark-edges.png"
            : "/assets/phone-template-white-edges.png"
        }
        alt="phone Image"
        className="pointer-events-none z-50 select-none"
      />

      <div className=" absolute -z-10 inset-0">
        <img
          src={imgSrc}
          alt="overlaying phone image"
          className="object-cover min-w-full min-h-full "
        />
      </div>
    </div>
  );
};
export default Phone;
