import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register } = useForm();
  return (
    <>
      <div className="grid justify-center bg-slate-200 h-screen items-center">
        <div className="bg-white h-fit p-5">
          <h3 className="font-medium text-xl">New User Registration Form</h3>
          <form>
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
