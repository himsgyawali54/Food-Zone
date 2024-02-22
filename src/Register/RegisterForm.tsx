import { useForm } from "react-hook-form";
import TextInput from "../TextInput";

const RegisterForm = () => {
  const { register } = useForm();
  return (
    <>
      <div className="grid justify-center bg-slate-200 h-screen items-center">
        <div className="bg-white h-fit p-5">
          <h3 className="font-medium text-xl pb-2">User Registration Form</h3>
          <form>
            <div className="grid grid-cols-2 gap-x-8">
              <TextInput
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />

              <TextInput
                type="text"
                placeholder="Last Name"
                {...register("firstName")}
              />
              <TextInput
                type="number"
                placeholder="Username"
                {...register("firstName")}
              />
              <TextInput
                type="email"
                placeholder="Email Address"
                {...register("firstName")}
              />
            </div>
            <div className="flex items-center gap-5 py-2 ml-1">
              <div>
                <input
                  type="checkbox"
                  id="male"
                  className="cursor-pointer mr-2 "
                  {...register("gender", { value: "male" })}
                />
                <label htmlFor="male" className="text-gray-600">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="female"
                  className="cursor-pointer mr-2"
                  {...register("gender", { value: "female" })}
                />
                <label htmlFor="female" className="text-gray-600">
                  Female
                </label>
              </div>
            </div>
            <div className="mt-3 flex flex-col w-11/12">
              <TextInput
                type="text"
                placeholder="Phone Number"
                {...register("firstName")}
              />
              <TextInput
                type="text"
                placeholder="Address"
                {...register("firstName")}
              />
              <TextInput
                id="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              <div className="my-2 ml-1">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="mr-2"
                />
                <label htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#427BFF] text-white py-2 px-4 rounded-md mt-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
