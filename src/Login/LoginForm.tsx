import { useForm } from "react-hook-form";
type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex bg-slate-100 items-center h-screen">
      <div className=" w-2/3   lg:flex mx-auto bg-white shadow-md rounded-lg overflow-hidden py-10 px-5 gap-9">
        <div className="w-full hidden lg:block lg:w-1/2">
          <img src="img/login.png" alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            <div className="mb-3 flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password", { required: true })}
                className="border rounded w-10/12 py-2 px-3"
              />
              {errors.password && <span>This Field Is required</span>}
            </div>
            <div className="mb-3 flex flex-col">
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
              />
              {errors.confirmpassword && (
                <span>The passwords do not match</span>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-4 rounded-md mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
