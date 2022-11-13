import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Acount = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Acount</h1>
      <p>User Email: {user && user.email}</p>

      <button
        className="border px-6 py-2 my-4 duration-300 hover:bg-red-600 hover:text-white"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Acount;
