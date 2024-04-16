import React, { useRef } from "react";
import TextInput from "../TextInput";

const OtpForm = () => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputRefsE1 = inputRefs[index].current;
    const maxLength = inputRefsE1?.maxLength;
    const currentLength = inputRefsE1?.value.length;

    if (event.key === "Backspace") {
      if (currentLength != maxLength) {
        const prevIndex = index - 1;
        const prevInputE1 = inputRefs[prevIndex]?.current;

        if (prevInputE1 != null) {
          prevInputE1.focus();
        }
      } else {
        if (currentLength === maxLength) {
          const nextIndex = index + 1;
          const nextInputE1 = inputRefs[nextIndex]?.current;
          if (nextInputE1 != null) {
            nextInputE1.focus();
          }
        }
      }
    }
  };
  return (
    <form>
      <div className="mt-5 flex w-full justify-evenly gap-5">
        {inputRefs.map((inputRefs, index) => (
          <TextInput
            extraClass="h-16 w-16 rounded-[10px] border border-[#777777] p-3 text-[#474747] text-center text-xl font-semibold outline-none"
            maxLength={1}
            onKeyUp={(event) => {
              handleKeyUp(event, index);
            }}
            autoComplete="off"
            required
          />
        ))}
      </div>
    </form>
  );
};

export default OtpForm;
