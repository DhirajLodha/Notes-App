import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import api from "../../../api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter a name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    // const payload = {
    //   user: { username:name, email, password }
    // };

    // try {
    //   // Make POST request using the API instance
    //   const response = await api.post("/signup", payload);

    //   // Handle successful signup (you might get a token or a message from the backend)
    //   setSuccessMessage("Account created successfully! You can now log in.");

    //   setName("");
    //   setEmail("");
    //   setPassword("");
    // } catch (err) {
    //   // Handle errors from the backend
    //   if (err.response && err.response.data) {
    //     setError(err.response.data.error || "Something went wrong.");
    //   } else {
    //     setError("Network error. Please try again.");
    //   }
    // }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-xs pb-1">{successMessage}</p>
            )}

            <button type="submit" className="btn-primary">
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
