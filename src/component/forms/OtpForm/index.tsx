import React, { useRef } from "react";
import TextInput from "../TextInput";

const OtpForm = () => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  return (
    <form>
      <div className="mt-5 flex w-full justify-evenly gap-5">
        {inputRefs.map((inputRefs, index) => (
          <TextInput
            extraClass="h-16 w-16 rounded-[10px] border border-[#777777] p-3 text-[#474747] text-center text-xl font-semibold outline-none"
            maxLength={1}
            autoComplete="off"
            required
          />
        ))}
      </div>
    </form>
  );
};

export default OtpForm;
