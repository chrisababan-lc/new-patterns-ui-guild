const Username = ({ value, onChange }) => {
  return (
    <div>
      <label className="block mt-4">Username</label>
      <input
        type="text"
        className="border-2 border-black p-1 rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Username;
