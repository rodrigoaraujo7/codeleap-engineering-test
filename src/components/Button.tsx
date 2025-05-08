import { ReactNode, useEffect, useRef } from "react"

import { Spinner } from "./Spinner";

import { AnimatePresence, motion } from 'motion/react'

interface CustomProps {
  children: ReactNode,
  variant: 'contained' | 'outlined',
  bg: string,
  color?: string,
  disabled?: boolean,
  isFetching?: boolean,
}

type ButtonProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant, disabled, className, ...props }: ButtonProps) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <button
      className={`font-bold text-base min-w-32 w-fit px-8 py-1.5 rounded-lg self-end cursor-pointer transition-all ${variant === "contained" && `${props.bg} text-white`} ${variant === "outlined" && `border-1 border-${props.bg} text-${props.color}`} ${disabled && 'grayscale-100'} ${className}`}
      {...props}
    >
      <AnimatePresence mode="wait">
        {props.isFetching ? (
          <motion.span
            key="spinner"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="block"
          >
            <Spinner color="text-white" />
          </motion.span>
        ) : (
          <motion.span
            key="create"
            initial={hasMounted.current ? { y: 30, opacity: 0 } : false}
            animate={hasMounted.current ? { y: 0, opacity: 1 } : false}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="block"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}