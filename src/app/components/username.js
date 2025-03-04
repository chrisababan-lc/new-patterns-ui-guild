import { useAtom } from "jotai";
import { usernameAtom } from "../store/main.store";

const Username = () => {
  const [username, setUsername] = useAtom(usernameAtom);

  return (
    <div>
      <label className="block mt-4">Username</label>
      <input
        type="text"
        className="border-2 border-black p-1 rounded-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Username;
