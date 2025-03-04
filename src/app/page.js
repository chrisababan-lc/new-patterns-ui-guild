"use client";

import { useState } from "react";

import Header from "./components/header";
import Username from "./components/username";
import Password from "./components/password";
import SubmitButton from "./components/submit-button";
import Form from "./components/form";
import { LoginContextProvider } from "./provider";

export default function Home() {
  return (
    <LoginContextProvider>
      <main className="flex items-center justify-center h-screen ">
        <Form>
          <Header />
          <hr />
          <Username />
          <Password />
          <SubmitButton />
        </Form>
      </main>
    </LoginContextProvider>
  );
}
