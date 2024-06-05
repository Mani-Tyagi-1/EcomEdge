<<<<<<< HEAD
import { Navigate,Outlet } from "react-router"
import { useSelector } from "react-redux"


const AdminRoute = () => {
    const { userInfo } = useSelector((state) => state.auth)

  return (
    userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace/>
  )
}

export default AdminRoute
=======
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default AdminRoute;
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
