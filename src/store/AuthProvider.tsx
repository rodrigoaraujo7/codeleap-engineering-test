import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import axios from "axios";

type AuthProviderProps = {
  children: ReactNode;
}

interface AuthContextProps {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  userIp: string
}

const AuthProviderContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string>(() => {
    const saved = localStorage.getItem("username");
    try {
      return saved ? JSON.parse(saved) : "";
    } catch {
      return "";
    }
  });
  const [userIp, setUserIp] = useState<string>("");

  useEffect(() => {
    const getUserIP = async () => {
      try {
        const {
          data
        } = await axios.get("https://api.ipify.org?format=json");

        setUserIp(data.ip)
      } catch (error) {
        console.error("Erro ao obter IP:", error);
        return "";
      }
    };

    getUserIP()
  }, [])

  return (
    <AuthProviderContext.Provider value={{
      username,
      setUsername,
      userIp
    }}>
      {children}
    </AuthProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthProviderContext = () => {
  const context = useContext(AuthProviderContext);

  if (!context) {
    throw new Error("useAuthProviderContext must be used within a AuthProvider");
  }

  return context
}