import React from "react";
import TextInput from "../TextInput";

const OtpForm = () => {
  return (
    <form>
      <div className="mt-5 flex w-full justify-evenly gap-5">
        <TextInput
          extraClass="h-16 w-16 rounded-[10px] border border-[#777777] p-3 text-[#474747] text-center text-xl font-semibold outline-none"
          autoComplete="off"
          required
        />
      </div>
    </form>
  );
};

export default OtpForm;
