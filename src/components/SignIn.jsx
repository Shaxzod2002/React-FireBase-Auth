import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4 border">
      <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
      <p className="py-2">
        Don't have an account yet?{" "}
        <Link to={"/signup"} className="underline">
          Sign Up
        </Link>
      </p>
      <form onClick={handleSubmit}>
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="py-2 font-medium">
            Email Adress
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border p-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="password" className="py-2 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border p-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
