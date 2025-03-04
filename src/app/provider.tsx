import { useState, useContext, createContext } from "react";

const LoginContext = createContext({
  username: "",
  password: "",
  setUsername: null,
  setPassword: null,
  handleSubmit: null,
});

export const LoginContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // call API and submit username and password.
    console.log("params", username, password);
  };

  return (
    <LoginContext.Provider
      value={{ username, password, setUsername, setPassword, handleSubmit }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
