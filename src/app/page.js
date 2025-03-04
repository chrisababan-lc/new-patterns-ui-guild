"use client";

import { useState } from "react";

import Header from "./components/header";
import Username from "./components/username";
import Password from "./components/password";
import SubmitButton from "./components/submit-button";
import Form from "./components/form";

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
      <Form onSubmit={handleSubmit}>
        <Header />
        <hr />
        <Username value={username} onChange={handleUsernameChange} />
        <Password value={password} onChange={handlePasswordChange} />
        <SubmitButton />
      </Form>
    </main>
  );
}
