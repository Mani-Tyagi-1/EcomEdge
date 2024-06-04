import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { useProfileMutation } from "../../redux/api/usersApiSlice";

const Profile = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUserName(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

    const dispatch = useDispatch();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password do not match");
        }
        else {
            try {

                const res = await updateProfile({ _id: userInfo._id, username, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                toast.success("Profile updated successfully");
                
            } catch (error) {
                console.log(error.message);
                toast.error(error?.data?.message || error.message);
            }
        }
    }

  return (
    <div className="container mx-auto p-4 mt-[5rem] ">
      <div className="flex justify-center align-center md:flex md:space-x-4">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler}> 
            <div className="mb-4">
              <label
                htmlFor="name"
                className=" block font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input p-4 border rounded w-full"
                placeholder="Enter Name "
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className=" block font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input p-4 border rounded w-full"
                placeholder="Enter Email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className=" block font-medium text-white mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input p-4 border rounded w-full"
                placeholder="Enter Password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className=" block font-medium text-white mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input p-4 border rounded w-full"
                placeholder="Enter Confirm Password "
                value={confirmPassword}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              >
                Update
              </button>

              <Link
                to="/user-orders"
                className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              >
                My orders
              </Link>
            </div>
          </form>
              </div>
              {loadingUpdateProfile && <Loader />}
      </div>
    </div>
  );
};

export default Profile;
