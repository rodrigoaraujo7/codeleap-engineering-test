import { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

import { useAuthProviderContext } from "./store/AuthProvider";
import { PostProvider } from "./store/PostProvider";

export const AppRouter = () => {
  const { username } = useAuthProviderContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (username === "") navigate("/sign-in")
    // eslint-disable-next-line
  }, [username])

  return (
    <Routes>
      <Route index element={
        <PostProvider>
          <Home />
        </PostProvider>
      } />

      <Route path="sign-in" element={<SignIn />} />

      <Route path="*" element={<h1>page not found</h1>} />
    </Routes>
  )
}