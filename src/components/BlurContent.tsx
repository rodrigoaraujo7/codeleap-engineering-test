import { ReactNode } from "react"

import { motion } from "motion/react"

type BlurContentProps = {
  children: ReactNode
}

export const BlurContent = ({ ...props }: BlurContentProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 z-10 flex justify-center items-center bg-gray-700-opacity"
  >
    {props.children}
  </motion.div>
)