import ResendCode from "../../component/Resend";
import OtpForm from "../../component/forms/OtpForm";
import EmailVerifyHeader from "../../molecules/EmailVerifyHeader";

const EmailVerification = () => {
  return (
    <div className="flex flex-col justify-center  items-center h-screen">
      <EmailVerifyHeader />
      <OtpForm />
      <ResendCode />
    </div>
  );
};

export default EmailVerification;
