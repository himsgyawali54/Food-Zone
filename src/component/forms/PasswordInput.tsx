import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { classNames } from "../../utils";
type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  extraClass?: string;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, label, error, extraClass, ...rest }, ref) => {
    const [toogleVisibility, setToogleVisibility] = useState(false);
    const togglePassword = () => {
      setToogleVisibility(!toogleVisibility);
    };

    return (
      <>
        {/* <label className="text-mediumText">{label}</label> */}
        <div className=" flex relative">
          <input
            id={id}
            ref={ref}
            className={twMerge(
              classNames(
                " w-full rounded-lg border border-input px-3.5 py-2.5 text-gray-600 outline-none placeholder:text-lg focus:border-primary focus:shadow-input focus:outline-none",
                error != null ? "border-red-600" : "border-input"
              ),
              extraClass
            )}
            type={toogleVisibility ? "text" : "password"}
            {...rest}
          />
          {toogleVisibility ? (
            <FaRegEye
              className="absolute top-3 right-16 md:right-32 lg:right-10 text-lg cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <FaRegEyeSlash
              className="absolute top-3 right-16 md:right-32 lg:right-10 text-lg cursor-pointer"
              onClick={togglePassword}
            />
          )}
        </div>
        {error != null && <span className="text-sm text-red-600">{error}</span>}
      </>
    );
  }
);

export default PasswordInput;
