import { useState } from "react"
import { useNavigate } from "react-router";

export const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-xl h-fit p-6 rounded-2xl border border-gray-200 bg-white flex flex-col">
        <h1 className="text-2xl font-bold">Welcome to CodeLeap network!</h1>

        <label className="w-full flex flex-col gap-2 mt-6 mb-4 text-base font-normal">
          Please enter your username
          <input
            type="text"
            placeholder="John doe"
            className="px-3 py-1 border border-gray-700 rounded-lg outline-none placeholder-gray-200"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>

        <button
          className={`uppercase font-bold bg-light-blue text-white text-base w-fit px-8 py-1.5 rounded-lg self-end ${inputValue === "" ? "grayscale-75 cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => navigate("/")}
        >
          Enter
        </button>
      </div>
    </main>
  )
}