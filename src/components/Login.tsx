import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [userDetails, setUserDetails] = useState<User>({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation logic
    if (userDetails.username === "" || userDetails.password === "") {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    // Simulated login (replace this with actual authentication logic)
    if (
      userDetails.username === "player" &&
      userDetails.password === "password123"
    ) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Game Login</h1>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-1 block w-full p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={userDetails.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full p-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={userDetails.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <Link to={"/"}>
              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </Link>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Welcome, {userDetails.username}!
            </h2>
            <p className="mt-4">
              You are now logged in. Start playing your game!
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
