import { forwardRef, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  disableFocusStyles?: boolean;
  extraClass?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      disableFocusStyles,
      extraClass,

      ...props
    },
    ref
  ) => {
    return (
      <label className={twMerge("text-mediumText")}>
        {label}

        <input
          {...props}
          ref={ref}
          placeholder={placeholder}
          type={type}
          className={twMerge(
            "mt-3 w-full block rounded-lg border border-input px-3 py-2 placeholder:text-smallText focus:outline-0",
            error != null ? "border-red-600" : "border-input",
            !disableFocusStyles && "focus:border-primary focus:shadow-input ",
            extraClass
          )}
        />

        {error != null && (
          <span className="mt-1.5 block text-sm text-red-600">{error}</span>
        )}
      </label>
    );
  }
);

export default TextInput;
