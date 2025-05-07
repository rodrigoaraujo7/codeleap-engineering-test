interface CustomProps {
  label: string,
}

type InputProps = CustomProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => (
  <label
    htmlFor={props.id}
    className={`w-full flex flex-col gap-2 text-base font-normal ${props.className}`}
  >
    {label}
    <input
      {...props}
      className="px-3 py-1 border border-gray-700 rounded-lg outline-none placeholder-gray-200"
    />
  </label>
)