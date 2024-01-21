import { useForm } from "react-hook-form";
type Inputs = {
  username: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register } = useForm<Inputs>();

  return (
    <div className="flex bg-slate-100 items-center h-screen">
      <div className=" w-2/3   flex mx-auto bg-white shadow-md rounded-lg overflow-hidden py-10 px-5 gap-10">
        <div className="w-1/2">
          <img src="img/login.png" alt="" />
        </div>
        <div className="w-1/2">
          <form>
            <div className="mb-4 flex flex-col">
              <h3 className="text-3xl pb-5 font-semibold">Login</h3>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="username">UserName</label>

              <input
                id="username"
                {...register("username", { required: true })}
                className="border rounded w-10/12 py-2 px-3"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="border rounded w-10/12 py-2 px-3"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email">Password</label>
              <input
                {...register("password", { required: true })}
                className="border rounded w-10/12 py-2 px-3"
              />
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
