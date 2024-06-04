import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirm] = useState(''); 
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const {search} = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) { 
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  
  const submitHandler = async (e) => { 
    e.preventDefault();

    if (password !== confirmPassword) { 
      toast.error("Passwords do not match");
    }
    else {
      try {

        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User Registered Successfully");
        
      } catch (error) {
        console.log(error);
        toast.error(error?.data?.message || error.message);
      }
    }
  }

  return (
    <section className="pl-[10rem] flex ">
      <div className="mr-[4rem] mt-[5rem] ">
        <h1 className=" text-2xl font-semibold mb-4 ">Register</h1>

        <form onSubmit={submitHandler} className="container w-[40rem]  ">
          <div className="my-[2rem]">
            <label
              htmlFor="name"
              className=" block text-sm font-medium text-white "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter Name "
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="email"
              className=" block text-sm font-medium text-white "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="password"
              className=" block text-sm font-medium text-white "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="confirmPassword"
              className=" block text-sm font-medium text-white "
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Confirm Password "
              value={confirmPassword}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 foucs:ring-pink-500 focus:ring-opacity-50"
            >
              {isLoading ? (
                <Rings color="white" height={7} width={20} />
              ) : (
                "Register"
              )}
            </button>

            <div className="mt-1">
              <p className="text-white">
                Already have an account ?{" "}
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  className="text-pink-500 hover:underline"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <img
        src="https://cdn.imgchest.com/files/pyq9c5m8mo4.png"
        alt=""
        className="h-[44rem] w-[48%] xl:block md:hidden sm:hidden rounded-lg"
      />
    </section>
  );
};

export default Register;
