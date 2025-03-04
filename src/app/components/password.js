import { useAtom } from "jotai";
import { passwordAtom } from "../store/main.store";

const Password = () => {
  const [password, setPassword] = useAtom(passwordAtom);

  return (
    <div>
      <label className="block mt-4">Password</label>
      <input
        type="password"
        className="border-2 border-black p-1 rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Password;
