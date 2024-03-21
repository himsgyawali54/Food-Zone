import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../TextInput";
import { registrationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterFormInputs, setRegisterUser } from "../feature/RegisterSlice";
import { useCreateUserMutation } from "../Api/UserApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
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
      console.log(response);
      const storedUserData = localStorage.getItem("userData");

      if (storedUserData) {
        try {
          let existingData = JSON.parse(storedUserData);
          // If existingData is not an array, convert it to an array
          if (!Array.isArray(existingData)) {
            existingData = [existingData];
          }
          const updatedData = [...existingData, response];
          localStorage.setItem("userData", JSON.stringify(updatedData));
        } catch (error) {
          console.error(
            "Error parsing or updating user data in local storage:",
            error
          );
        }
      } else {
        // If no data exists in local storage, initialize it with an array containing the current user's data
        localStorage.setItem("userData", JSON.stringify([response]));
      }

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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src="img/signup-img.jpg" alt="" className="h-full" />
        </div>
        <div className="bg-white  py-3 px-4 md:px-7 lg:px-20 shadow-lg">
          <h3 className="font-medium text-3xl pb-2">User Registration Form</h3>
          <form onSubmit={handleSubmit(onsubmit)}>
            {isLoading ? (
              "Creating User.."
            ) : (
              <>
                <div className="grid grid-cols-2 gap-x-8 mt-2">
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
                      {...register("gender")}
                      value="male"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
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
                      {...register("gender")}
                      value="female"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
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
