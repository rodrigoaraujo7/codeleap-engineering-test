import { ReactNode } from "react"

type MainProps = {
  children: ReactNode
}

export const Main = ({ ...props }: MainProps) => {
  return (
    <main className="flex justify-center">
      <div className="w-3xl h-dvh bg-white">
        <header className="w-full h-20 px-9 flex items-center bg-light-blue border-b-1 border-gray-600">
          <h1 className="font-bold text-2xl text-white">CodeLeap Network</h1>
        </header>

        <div className="flex flex-col gap-6 p-6 h-[calc(100dvh-80px)] overflow-auto">
          {props.children}
        </div>
      </div>
    </main>
  )
}