import { useLoginContext } from "../provider";

const Form = ({ children }) => {
  const { handleSubmit } = useLoginContext();

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
