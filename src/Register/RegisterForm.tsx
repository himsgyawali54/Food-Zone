import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../component/forms/TextInput";
import { registrationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAppDispatch } from "../Hook";
import { RegisterFormInputs, setRegisterUser } from "../feature/RegisterSlice";
import { useRegisterMutation } from "../feature/authApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordInput from "../component/forms/PasswordInput";

const RegisterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [createUser, { isLoading }] = useRegisterMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registrationSchema),
  });

  const onsubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const response = await createUser(data).unwrap(); //unwrap:Give me the result of this Promise, not the Promise itself."
      dispatch(setRegisterUser(response));

      setTimeout(() => {
        navigate("/");
      }, 1500);
      toast.success("Successfully registered!", {
        autoClose: 1500,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }

    reset();
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img src="img/register.jpg" alt="" className="h-full fixed  w-1/2" />
        </div>
        <div className="bg-white py-3 px-4 md:px-7 lg:px-20 overflow-y-auto">
          <h3 className="font-medium text-3xl pb-2 lg:pl-14">
            User Registration Form
          </h3>
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="border px-10 py-5 mt-5 rounded-lg"
          >
            {isLoading ? (
              "Creating User.."
            ) : (
              <>
                <div className="grid grid-cols-2 gap-x-8 mt-2">
                  <TextInput
                    type="text"
                    placeholder="first name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                  />

                  <TextInput
                    type="text"
                    placeholder="last name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                  />
                </div>

                <div className="mt-2 flex flex-col gap-5">
                  <TextInput
                    type="email"
                    placeholder="example@email.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <PasswordInput
                    extraClass="mb-3"
                    id="password"
                    placeholder="password"
                    error={errors.password?.message}
                    {...register("password")}
                  />
                  <PasswordInput
                    placeholder="confirm password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                  />

                  <div className=" ml-1">
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
                    className="bg-[#427BFF] text-white py-2 px-4 rounded-md mt-3 cursor-pointer"
                    disabled={!isChecked}
                  >
                    Register
                  </button>
                  <p className="pt-3 text-center">
                    Already have an account?
                    <Link
                      to="/"
                      className="text-blue-900 font-semibold cursor-pointer  ps-2 decoration-solid"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
