const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="border-2 border-black p-6 rounded-lg">
      {children}
    </form>
  );
};

export default Form;
