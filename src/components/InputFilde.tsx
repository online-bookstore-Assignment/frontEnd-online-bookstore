interface InputFildeProps {
  title: string;
  name: string;
  value?: string | number;
  pattern?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFail: boolean;
}

const InputFilde = ({
  title,
  name,
  value,
  onChange,
  pattern,
  isFail,
}: InputFildeProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg">{title}</h3>
      <input
        className="outline-none border px-2 py-1 rounded-xl"
        name={name}
        value={value}
        onChange={onChange}
        readOnly={isFail}
        pattern={pattern}
        required
      />
    </div>
  );
};

export default InputFilde;
