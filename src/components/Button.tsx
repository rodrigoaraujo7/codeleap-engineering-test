import { ReactNode } from "react"

interface CustomProps {
  children: ReactNode,
  disabled?: boolean
}

type ButtonProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, disabled, className, ...props }: ButtonProps) => (
  <button
    className={`font-bold bg-light-blue text-white text-base w-fit px-8 py-1.5 rounded-lg self-end cursor-pointer ${className} ${disabled && 'grayscale-75'}`}
    {...props}
  >
    {children}
  </button>
)