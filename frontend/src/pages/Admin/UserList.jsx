<<<<<<< HEAD
import { useEffect,useState } from "react";
import { FaTrash,FaEdit, FaCheck,FaTimes  } from "react-icons/fa";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import Message from "../../components/Message";

import { useGetUserDetailsQuery , useDeleteUserMutation , useUpdateUserMutation, useGetUsersQuery } from "../../redux/api/usersApiSlice";

const UserList = () => {
    const { data: users, refetch, isLoading, error } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    const [updateUser] = useUpdateUserMutation();

    const [editableUserId, setEditableUserId] = useState(null);
    const [editableUserName, setEditableUserName] = useState(null);
    const [editableUserEmail, setEditableUserEmail] = useState(null);

    useEffect(() => {
        refetch();
    }, [refetch]);


    const deleteHandler = async (id) => {
        if(window.confirm('Are you sure you want to delete this user?')){
            try {
                await deleteUser(id);
                refetch();
                toast.success('User deleted successfully');
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    }

    const updateHandler = async (id) => {
        try {
            await updateUser({ userId: id, username: editableUserName, email: editableUserEmail });
            setEditableUserId(null)
            refetch();
        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    }

    const toggleEdit = (id, name, email) => {
        setEditableUserId(id);
        setEditableUserName(name);
        setEditableUserEmail(email);
    }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-[4rem] text-center">Users</h1>
=======
import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";

const UserList = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  const [editableUserId, setEditableUserId] = useState(null);
  const [editableUserName, setEditableUserName] = useState("");
  const [editableUserEmail, setEditableUserEmail] = useState("");

  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const toggleEdit = (id, username, email) => {
    setEditableUserId(id);
    setEditableUserName(username);
    setEditableUserEmail(email);
  };

  const updateHandler = async (id) => {
    try {
      await updateUser({
        userId: id,
        username: editableUserName,
        email: editableUserEmail,
      });
      setEditableUserId(null);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
<<<<<<< HEAD
          {error?.data?.Message || error.message}
        </Message>
      ) : (
        <div className="flex flex-col md:flex-row">
=======
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="flex flex-col md:flex-row">
          {/* <AdminMenu /> */}
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
          <table className="w-full md:w-4/5 mx-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
<<<<<<< HEAD
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Admin</th>
              </tr>
            </thead>

=======
                <th className="px-4 py-2 text-left">NAME</th>
                <th className="px-4 py-2 text-left">EMAIL</th>
                <th className="px-4 py-2 text-left">ADMIN</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-2">{user._id}</td>
                  <td className="px-4 py-2">
                    {editableUserId === user._id ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={editableUserName}
                          onChange={(e) => setEditableUserName(e.target.value)}
                          className="w-full p-2 border rounded-lg"
                        />
<<<<<<< HEAD

=======
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                        <button
                          onClick={() => updateHandler(user._id)}
                          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                          <FaCheck />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        {user.username}{" "}
                        <button
                          onClick={() =>
                            toggleEdit(user._id, user.username, user.email)
                          }
                        >
                          <FaEdit className="ml-[1rem]" />
                        </button>
                      </div>
                    )}
                  </td>
<<<<<<< HEAD

=======
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                  <td className="px-4 py-2">
                    {editableUserId === user._id ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={editableUserEmail}
                          onChange={(e) => setEditableUserEmail(e.target.value)}
                          className="w-full p-2 border rounded-lg"
                        />
                        <button
<<<<<<< HEAD
                          onChange={() => updateHandler(user._id)}
=======
                          onClick={() => updateHandler(user._id)}
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                          <FaCheck />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center">
<<<<<<< HEAD
                        <p>{user.email}</p>
                        <button
                          onClick={() =>
                            toggleEdit(user._id, user.username, user.email)
=======
                        <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                        <button
                          onClick={() =>
                            toggleEdit(user._id, user.name, user.email)
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                          }
                        >
                          <FaEdit className="ml-[1rem]" />
                        </button>
                      </div>
                    )}
                  </td>
<<<<<<< HEAD

=======
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                  <td className="px-4 py-2">
                    {user.isAdmin ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
<<<<<<< HEAD

                  <td className="px-4 py-2">
                    {!user.isAdmin && (
                      <div className="flex items-center">
                        <button
                          onClick={() => deleteHandler(user._id)}
                          className="bg-red-500 hover:bg-red-700 font-bold text-white py-2 px-4 rounded-lg"
=======
                  <td className="px-4 py-2">
                    {!user.isAdmin && (
                      <div className="flex">
                        <button
                          onClick={() => deleteHandler(user._id)}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}

export default UserList;
=======
};

export default UserList;
>>>>>>> 8e0080092a3e0b6d650a6401d1b3b1b66c328e14
