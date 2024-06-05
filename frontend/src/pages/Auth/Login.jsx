import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
    
    const submitHandler = async (e) => { 
        e.preventDefault();
        
        try {
            const res = await login({ email, password }).unwrap();
            console.log(res)
            dispatch(setCredentials({ ...res }));

        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    }

  return (
    <div>
      <section className="pl-[10rem] flex ">
        <div className="mr-[4rem] mt-[5rem] ">
          <h1 className="text-2xl font-semibold mb-4 ">Sign In</h1>

          <form onSubmit={submitHandler} className="container w-[40rem]">
            <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-[2rem]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className=" flex gap-4">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 foucs:ring-pink-500 focus:ring-opacity-50"
              >
                {isLoading ? (
                  <Rings color="white" height={7} width={20} />
                ) : (
                  "Sign In"
                )}
              </button>

              <div className="mt-1">
                <p className="text-white">
                  New Customer ?{" "}
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                    className="text-pink-500 hover:underline"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <img
          src="https://cdn.imgchest.com/files/k739cnw8mp7.png"
          alt=""
          className="h-[44rem] w-[48%] xl:block md:hidden sm:hidden rounded-lg"
        />
      </section>
    </div>
  );
};

export default Login;
