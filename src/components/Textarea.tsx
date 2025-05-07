interface CustomProps {
  label: string,
}

type TextAreaProps = CustomProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ label, ...props }: TextAreaProps) => (
  <label
    htmlFor={props.id}
    className={`w-full flex flex-col gap-2 text-base font-normal ${props.className}`}
  >
    {label}
    <textarea
      {...props}
      rows={3}
      className="px-3 py-1 border border-gray-700 rounded-lg outline-none placeholder-gray-200 resize-none"
    />
  </label>
)