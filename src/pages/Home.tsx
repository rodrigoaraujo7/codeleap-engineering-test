import { useState } from "react"

import { Main } from "../layout/Main"

import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"
import { TextArea } from "../components/Textarea"

export const Home = () => {
  const [inputTitleValue, setInputTitleValue] = useState<string>("");
  const [inputContentValue, setInputContentValue] = useState<string>("");

  return (
    <Main>
      <div className="p-6 rounded-2xl border-1 border-gray-600 flex flex-col gap-6">
        <h1 className="text-(length:--title-size) font-bold text-black">
          What’s on your mind?
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

        <Button className={(inputTitleValue === "" || inputContentValue === "") ? 'grayscale-75' : ''}>
          Create
        </Button>
      </div>

      <Card title="My First Post at CodeLeap Network!" controls>
        <h1>teste</h1>
      </Card>
    </Main>
  )
}