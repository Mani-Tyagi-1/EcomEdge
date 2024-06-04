import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/features/store";
import PrivateRoute from "./components/PrivateRoute";

// Auth
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

<<<<<<< HEAD
import AdminRoute from './pages/Admin/AdminRoute.jsx';
import UserList from './pages/Admin/UserList.jsx';
=======
import Profile from "./pages/User/Profile";

import AdminRoute from "./pages/Admin/AdminRoute";
import UserList from "./pages/Admin/UserList";
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14

import CategoryList from "./pages/Admin/CategoryList";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
<<<<<<< HEAD
    <Route path='/' element={<App />} >
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Private Routes */}
      <Route path ='' element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
      </Route>

      {/* Admin Routes */}
      <Route path='/admin' element={<AdminRoute />}>
        <Route path='/admin/userlist' element={<UserList />}/>
      </Route>


=======
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
      </Route>
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
