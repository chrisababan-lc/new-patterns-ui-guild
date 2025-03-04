const Password = ({ password, onChange }) => {
  return (
    <div>
      <label className="block mt-4">Password</label>
      <input
        type="password"
        className="border-2 border-black p-1 rounded-lg"
        value={password}
        onChange={onChange}
      />
    </div>
  );
};

export default Password;
