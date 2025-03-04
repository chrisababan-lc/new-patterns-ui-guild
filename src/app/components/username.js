import { useLoginContext } from "../provider";

const Username = () => {
  const { username, setUsername } = useLoginContext();

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
