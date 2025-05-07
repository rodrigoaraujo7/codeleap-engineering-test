import { createContext, ReactNode, useContext, useState } from "react"

type AuthProviderProps = {
  children: ReactNode;
}

interface AuthContextProps {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
}

const AuthProviderContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string>('');

  return (
    <AuthProviderContext.Provider value={{
      username,
      setUsername
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