export const TextField = (props) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="text-[16px] font-semibold">{props.label}</label>
      <input
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onInput={(event) => props.onInput(event.target.value)}
        value={props.value}
      />
    </div>
  );
};
