import { ReactNode } from "react"

type MainProps = {
  children: ReactNode
}

export const Main = ({ ...props }: MainProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-(--custom-grid-cols)">
      <div className=" bg-white col-start-1 col-end-2 md:col-start-2 md:col-end-3">
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