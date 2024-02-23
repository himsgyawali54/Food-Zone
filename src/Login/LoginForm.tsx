import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Forminputs } from "../feature/UserSlice";
import { useCreateUserMutation } from "../Api/UserApi";
import { useDispatch } from "react-redux";
import { setUser, setLoading, setError } from "../feature/UserSlice";
import { useNavigate } from "react-router-dom";
import { setRegisterUser } from "../feature/RegisterSlice";
const LoginForm = () => {
  const [toogleVisibility, setToogleVisibility] = useState(false);
  const [toogleCPVisibility, setToogleCPVisibility] = useState(false);

  //isLoading: boolean that indicates whether the mutation is in progress.
  //createUser(can be any name): calling this function will initiate the process of creating a new user(i.e initiate the mutation here createUser mutation).
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Forminputs>();

  const onSubmit = async (data: Forminputs) => {
    try {
      dispatch(setLoading(true));

      dispatch(setRegisterUser(data));
      console.log(data);
      reset();
      setToogleVisibility(false);
      setToogleCPVisibility(false);
      navigate("/mainpage");
    } catch (error) {
      dispatch(setError("Something Went Wromng"));
      console.error("Error creating user:", error);
    }
  };

  const passwordVisibility = () => {
    setToogleVisibility(!toogleVisibility);
  };
  const cpasswordVisibility = () => {
    setToogleCPVisibility(!toogleCPVisibility);
  };
  const handleRegister = () => navigate("/register");
  return (
    <>
      <div className="flex bg-slate-100 items-center h-screen">
        <div className=" w-2/3   lg:flex mx-auto bg-white shadow-md rounded-lg overflow-hidden py-10 px-5 gap-9">
          <div className="w-full hidden lg:block lg:w-1/2">
            <img src="img/login.png" alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              {isLoading ? (
                "Creating User.."
              ) : (
                <div>
                  <div className="mb-4 flex flex-col">
                    <h3 className="text-3xl pb-5 font-semibold">Login</h3>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="username">UserName</label>

                    <input
                      id="username"
                      {...register("username", { required: true })}
                      className="border rounded w-10/12 py-2 px-3"
                    />
                    {errors.username && <span>This Field Is required</span>}
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="border rounded w-10/12 py-2 px-3"
                    />
                    {errors.email && errors.email.type === "pattern" && (
                      <span>Email format is invalid</span>
                    )}
                    {errors.email && errors.email.type !== "pattern" && (
                      <span>This Field Is required</span>
                    )}
                  </div>
                  <div className="mb-3 flex flex-col relative">
                    <label htmlFor="password">Password</label>

                    <input
                      id="password"
                      {...register("password", { required: true })}
                      className="border rounded w-10/12 py-2 px-3 "
                      type={toogleVisibility ? "text" : "password"}
                    />

                    {toogleVisibility ? (
                      <FaRegEye
                        className="absolute top-12 right-20 md:right-32 lg:right-24 text-xl cursor-pointer"
                        onClick={passwordVisibility}
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="absolute top-12 right-20 md:right-32 lg:right-24 text-xl cursor-pointer"
                        onClick={passwordVisibility}
                      />
                    )}
                    {errors.password && <span>This Field Is required</span>}
                  </div>
                  <div className="mb-3 flex flex-col relative">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                      id="confirmpassword"
                      {...register("confirmpassword", {
                        required: true,
                        validate: (val: string) => {
                          if (watch("password") != val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                      className="border rounded w-10/12 py-2 px-3"
                      type={toogleCPVisibility ? "text" : "password"}
                    />
                    {toogleCPVisibility ? (
                      <FaRegEye
                        className="absolute top-12 right-20 md:right-32 lg:right-24 text-xl cursor-pointer"
                        onClick={cpasswordVisibility}
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="absolute top-12 right-20 md:right-32 lg:right-24 text-xl cursor-pointer"
                        onClick={cpasswordVisibility}
                      />
                    )}
                    {errors.confirmpassword && (
                      <span>The passwords do not match</span>
                    )}
                  </div>
                  <div className="flex gap-4 items-center">
                    <button
                      type="submit"
                      className="bg-blue-900 text-white py-2 px-4 rounded-md mt-2"
                    >
                      Submit
                    </button>
                    <div>
                      Don't have an account?
                      <span
                        className="text-blue-900 font-semibold cursor-pointer  ps-2 decoration-solid"
                        onClick={handleRegister}
                      >
                        Register
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
