import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FormCard } from "../components/FormCard";

import { toast } from "react-toastify";
import { motion } from 'motion/react'

import { useAuthProviderContext } from "../store/AuthProvider";

export const SignIn = () => {
  const {
    username,
    setUsername
  } = useAuthProviderContext();

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()

    if (username === "") return toast.error("Enter username to continue")

    localStorage.setItem("username", JSON.stringify(username))
    return navigate("/")
  }

  return (
    <motion.form exit={{ opacity: 0 }} onSubmit={handleSignIn} className="h-screen flex justify-center items-center">
      <FormCard title="Welcome to CodeLeap network!">
        <Input
          label="Please enter your username"
          id="username"
          type="text"
          placeholder="John doe"
          className="mt-6 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button
          disabled={username === ""}
          onClick={handleSignIn}
          variant="contained"
          bg="bg-light-blue"
          color="text-white"
        >
          ENTER
        </Button>
      </FormCard>
    </motion.form>
  )
}