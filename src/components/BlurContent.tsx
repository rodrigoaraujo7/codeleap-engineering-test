import { ReactNode } from "react"

type BlurContentProps = {
  children: ReactNode
}

export const BlurContent = ({ ...props }: BlurContentProps) => (
  <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-700-opacity">
    {props.children}
  </div>
)