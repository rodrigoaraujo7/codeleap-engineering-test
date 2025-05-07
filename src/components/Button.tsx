import { ReactNode } from "react"

interface CustomProps {
  children: ReactNode,
  variant: 'contained' | 'outlined',
  bg: string,
  color?: string,
  disabled?: boolean,
}

type ButtonProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant, disabled, className, ...props }: ButtonProps) => (
  <button
    className={`font-bold text-base w-fit px-8 py-1.5 rounded-lg self-end cursor-pointer ${variant === "contained" && `${props.bg} text-white`} ${variant === "outlined" && `border-1 border-${props.bg} text-${props.color}`} ${disabled && 'grayscale-75'} ${className}`}
    {...props}
  >
    {children}
  </button>
)