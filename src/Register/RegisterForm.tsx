import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../TextInput";
import { registrationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { RegisterFormInputs } from "../feature/RegisterSlice";

const RegisterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registrationSchema),
  });

  const onsubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="grid justify-center bg-slate-200 h-screen items-center">
        <div className="bg-white h-fit p-5">
          <h3 className="font-medium text-xl pb-2">User Registration Form</h3>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid grid-cols-2 gap-x-8">
              <TextInput
                type="text"
                placeholder="First Name"
                error={errors.firstName?.message}
                {...register("firstName")}
              />

              <TextInput
                type="text"
                placeholder="Last Name"
                error={errors.lastName?.message}
                {...register("lastName")}
              />
              <TextInput
                type="text"
                placeholder="Username"
                error={errors.username?.message}
                {...register("username")}
              />
              <TextInput
                type="email"
                placeholder="Email Address"
                error={errors.email?.message}
                {...register("email")}
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
            <div className="mt-3 flex flex-col ">
              <TextInput
                type="number"
                placeholder="Phone Number"
                {...register("phonenumber")}
              />
              <TextInput
                type="text"
                placeholder="Address"
                error={errors.firstName?.message}
                {...register("address")}
              />
              <TextInput
                id="password"
                placeholder="Password"
                error={errors.password?.message}
                {...register("password")}
              />

              <div className="my-2 ml-1">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="mr-2"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#427BFF] text-white py-2 px-4 rounded-md mt-2"
                disabled={!isChecked}
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
