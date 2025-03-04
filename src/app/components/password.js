import { useLoginContext } from "../provider";

const Password = () => {
  const { password, setPassword } = useLoginContext();

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
