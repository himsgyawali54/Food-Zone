import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Forminputs } from "../feature/UserSlice";
import { setUser, setLoading, setError } from "../feature/UserSlice";
import { useNavigate } from "react-router-dom";
import { RegisterFormInputs } from "../feature/RegisterSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../Hook";

const LoginForm = () => {
  const [toogleVisibility, setToogleVisibility] = useState(false);
  const [toogleCPVisibility, setToogleCPVisibility] = useState(false);

  //isLoading: boolean that indicates whether the mutation is in progress.
  //createUser(can be any name): calling this function will initiate the process of creating a new user(i.e initiate the mutation here createUser mutation).

  const dispatch = useAppDispatch();
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

      const storedUserData = localStorage.getItem("userData");

      if (storedUserData) {
        const registeredUsers: RegisterFormInputs[] =
          JSON.parse(storedUserData);

        // Find the user with matching username and password
        const matchedUser = registeredUsers.find(
          (user) => user.email === data.email && user.password === data.password
        );

        if (matchedUser) {
          dispatch(setUser([data]));

          setToogleVisibility(false);
          setToogleCPVisibility(false);

          toast.success("LoggedIn successfully", {
            hideProgressBar: true,
            autoClose: 1000,
          });
          setTimeout(() => {
            navigate("/mainpage");
          }, 1000);
        } else {
          toast.error("Inavlid Username and password", { autoClose: 2000 });
          setTimeout(() => {
            reset();
          }, 2000);
        }
      } else {
        // No registered users in local storage
        toast.error("No registered users found", { autoClose: 2000 });
      }
    } catch (error) {
      dispatch(setError("Something Went Wromng"));
    }
  };

  const passwordVisibility = () => {
    setToogleVisibility(!toogleVisibility);
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
              <div>
                <div className="mb-4 flex flex-col">
                  <h3 className="text-3xl  font-semibold">Login</h3>
                </div>
                <div className="border-b mb-6 border-slate-100 w-5"></div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    {...register("email", { required: true })}
                    className="border rounded w-10/12 py-2 px-3"
                  />
                  {errors.email && <span>This Field Is required</span>}
                </div>

                <div className="mb-4 flex flex-col relative">
                  <label htmlFor="password">Password</label>

                  <input
                    id="password"
                    {...register("password", { required: true })}
                    className="border rounded w-10/12 py-2 px-3 "
                    type={toogleVisibility ? "text" : "password"}
                  />

                  {toogleVisibility ? (
                    <FaRegEye
                      className="absolute top-12 right-16 md:right-32 lg:right-24 text-xl cursor-pointer"
                      onClick={passwordVisibility}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute top-12 right-16 md:right-32 lg:right-24 text-xl cursor-pointer"
                      onClick={passwordVisibility}
                    />
                  )}
                  {errors.password && <span>This Field Is required</span>}
                </div>

                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded-md mt-2"
                >
                  Submit
                </button>
                <div className="pt-6">
                  Don't have an account?
                  <span
                    className="text-blue-900 font-semibold cursor-pointer  ps-2 decoration-solid"
                    onClick={handleRegister}
                  >
                    Register
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
