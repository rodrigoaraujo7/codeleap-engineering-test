import { ReactNode } from "react"

interface CustomProps {
  children: ReactNode
}

type ButtonProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={`font-bold bg-light-blue text-white text-base w-fit px-8 py-1.5 rounded-lg self-end cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </button>
)