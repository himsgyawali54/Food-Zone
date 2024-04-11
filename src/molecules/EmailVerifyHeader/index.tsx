import React from "react";

const EmailVerifyHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-semibold">Verify Your Email</h2>
      <p className="mt-4 text-lg font-normal text-zinc-500">
        Enter the verification code sent to your email
      </p>
    </div>
  );
};

export default EmailVerifyHeader;
