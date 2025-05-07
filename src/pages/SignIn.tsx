import { useState } from "react"

import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (inputValue === "") return

    return navigate("/")
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-xl h-fit p-6 rounded-2xl border border-gray-200 bg-white flex flex-col">
        <h1 className="text-(length:--title-size) font-bold">Welcome to CodeLeap network!</h1>

        <Input
          label="Please enter your username"
          id="username"
          type="text"
          placeholder="John doe"
          className="mt-6 mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button
          className={inputValue === "" ? 'grayscale-75' : ''}
          onClick={handleSignIn}
        >
          ENTER
        </Button>
      </div>
    </main>
  )
}