import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import axios from "axios";

import { TPost } from "../types/Post";

type PostProviderProps = {
  children: ReactNode
}

interface PostContextProps {
  posts: TPost[],
  setPosts: React.Dispatch<React.SetStateAction<TPost[]>>,
  isFetching: boolean,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  api: string,
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const api = "https://dev.codeleap.co.uk/careers/";

  useEffect(() => {
    setIsFetching(true)

    axios.get(api)
      .then((response) => {
        setPosts(response.data.results)
      })
      .catch((error) => {
        console.log(" 🔴 GET ERROR:" + error)
      })
      .finally(() => {
        console.log("Axios Get");
        setIsFetching(false)
      })
  }, [])

  return (
    <PostContext.Provider value={{
      posts,
      setPosts,
      isFetching,
      setIsFetching,
      api
    }}>
      {children}
    </PostContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePostProviderContext = () => {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error("usePostProviderContext must be used within a PostProvider");
  }

  return context;
}