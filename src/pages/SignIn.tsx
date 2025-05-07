import { useState } from "react"

import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FormCard } from "../components/FormCard";

export const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (inputValue === "") return

    return navigate("/")
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <FormCard title="Welcome to CodeLeap network!">
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
          disabled={inputValue === ""}
          onClick={handleSignIn}
          variant="contained"
          bg="bg-light-blue"
          color="text-white"
        >
          ENTER
        </Button>
      </FormCard>
    </main>
  )
}