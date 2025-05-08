import React, { useState } from "react"

import { Main } from "../layout/Main"

import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"
import { TextArea } from "../components/Textarea"
import { Spinner } from "../components/Spinner"
import { SkeletonCard } from "../components/skeletons/Card"
import { SkeletonMainForm } from "../components/skeletons/MainForm"

import { useAuthProviderContext } from "../store/AuthProvider"
import { usePostProviderContext } from "../store/PostProvider"

import axios from "axios"
import { v4 } from "uuid"
import { toast } from "react-toastify"
import { formatDistanceToNow } from "date-fns";

import { TPost } from "../types/Post"

export const Home = () => {
  const [inputTitleValue, setInputTitleValue] = useState<string>("");
  const [inputContentValue, setInputContentValue] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const {
    userIp, username
  } = useAuthProviderContext();

  const {
    posts, setPosts, isFetching, api
  } = usePostProviderContext();

  const handleNewPost = () => {
    if (isPosting) return toast.error("A request is already in progress")

    if (inputTitleValue === "" || inputContentValue === "") return toast.error("Fill in the fields to create a post")

    setIsPosting(true)

    const newPost: TPost = {
      id: v4(),
      username,
      title: inputTitleValue,
      content: inputContentValue,
      created_datetime: new Date().toISOString(),
      author_ip: userIp,
    };

    axios.post(api, newPost)
      .then((response) => {
        setPosts(prev => [response.data, ...prev])
        setInputContentValue("")
        setInputTitleValue("")
        toast.success("Post created successfully")
      })
      .catch((error) => {
        console.log(" 🔴 POST ERROR:" + error)
        toast.error("Error creating post")
      })
      .finally(() => {
        setIsPosting(false)
      })
  }

  return (
    <Main>
      {isFetching ? (
        <SkeletonMainForm />
      ) : (
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
            {isPosting ? <Spinner color="text-white" /> : "Create"}
          </Button>
        </div>
      )}

      {isFetching ? (
        <SkeletonCard />
      ) : (
        <React.Fragment>
          {posts.map((post) => (
            <Card
              title={post.title}
              post={post}
              controls={post.username === username}
              key={post.id}
            >
              <div className="flex flex-col gap-4 md:justify-between md:items-center md:flex-row">
                <h1 className="text-lg font-bold text-gray-700 truncate max-md:w-full md:w-3/4">
                  @{post.username}
                </h1>

                {post.created_datetime ? (
                  <span className="text-lg font-normal text-gray-700">
                    {formatDistanceToNow(new Date(post.created_datetime), {
                      addSuffix: true,
                    })}
                  </span>
                ) : (
                  <span className="text-lg font-normal text-gray-700">Unknown date</span>
                )}
              </div>

              <p className="text-lg font-normal text-black mt-4">
                {post.content}
              </p>
            </Card>
          ))}
        </React.Fragment>
      )}
    </Main>
  )
}