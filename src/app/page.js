"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // call API and submit username and password.
    console.log("params", username, password);
  };

  return (
    <main className="flex items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black p-6 rounded-lg"
      >
        <h1 className="text-xl font-bold">Please log in</h1>
        <hr />
        <div>
          <label className="block mt-4">Username</label>
          <input
            type="text"
            className="border-2 border-black p-1 rounded-lg"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label className="block mt-4">Password</label>
          <input
            type="password"
            className="border-2 border-black p-1 rounded-lg"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
          >
            Log in
          </button>
        </div>
      </form>
    </main>
  );
}
