import { useAtomValue } from "jotai";
import { usernameAtom, passwordAtom } from "../store/main.store";

const Form = ({ children }) => {
  const username = useAtomValue(usernameAtom);
  const password = useAtomValue(passwordAtom);

  const handleSubmit = () => {
    // call API and submit username and password.
    console.log("params", username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-black p-6 rounded-lg"
    >
      {children}
    </form>
  );
};

export default Form;
