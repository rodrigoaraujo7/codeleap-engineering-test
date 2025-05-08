import { useEffect, useState } from "react"

import { Main } from "../layout/Main"

import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"
import { TextArea } from "../components/Textarea"

import { useAuthProviderContext } from "../store/AuthProvider"

import axios from "axios"

import { TPost } from "../types/Post"

export const Home = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [inputTitleValue, setInputTitleValue] = useState<string>("");
  const [inputContentValue, setInputContentValue] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const {
    username
  } = useAuthProviderContext();


  const api = "https://dev.codeleap.co.uk/careers/";

  const handleNewPost = () => {
    if (isFetching) return

    setIsFetching(true)

    const newPost: TPost = {
      username,
      title: inputTitleValue,
      content: inputContentValue,
      created_datetime: new Date().toISOString(),
      author_ip: "",
    };

    axios.post(api, newPost)
      .then((response) => {
        console.log(response)
        setPosts(prev => [response.data, ...prev])
        setInputContentValue("")
        setInputTitleValue("")
      })
      .catch((error) => {
        console.log(" 🔴 POST ERROR:" + error)
      })
      .finally(() => {
        console.log("Axios Post");
        setIsFetching(false)
      })
  }

  useEffect(() => {
    axios.get(api)
      .then((response) => {
        setPosts(response.data.results)
      })
      .catch((error) => {
        console.log(" 🔴 GET ERROR:" + error)
      })
      .finally(() => {
        console.log("Axios Get");
      })
  }, [username])

  return (
    <Main>
      <div className="p-6 rounded-2xl border-1 border-gray-600 flex flex-col gap-6">
        <h1 className="text-(length:--title-size) font-bold text-black">
          What's on your mind?
        </h1>

        <Input
          label="Title"
          id="title"
          type="text"
          placeholder="Hello world"
          value={inputTitleValue}
          onChange={(e) => setInputTitleValue(e.target.value)}
        />

        <TextArea
          label="Content"
          id="content"
          placeholder="Content here"
          value={inputContentValue}
          onChange={(e) => setInputContentValue(e.target.value)}
        />

        <Button
          variant="contained"
          bg="bg-light-blue"
          disabled={(inputTitleValue === "" || inputContentValue === "")}
          onClick={handleNewPost}
        >
          {isFetching ? "Loading ..." : "Create"}
        </Button>
      </div>

      {posts.map((post, index) => (
        <Card title={post.title} controls key={index}>
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-lg font-bold text-gray-700">
              @{post.username}
            </h1>

            <span className="text-lg font-normal text-gray-700">
              25 minutes agos
            </span>
          </div>

          <p className="text-lg font-normal text-black mt-4">
            {post.content}
          </p>
        </Card>
      ))}
    </Main>
  )
}