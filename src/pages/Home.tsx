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

        <Button
          variant="contained"
          bg="bg-light-blue"
          disabled={(inputTitleValue === "" || inputContentValue === "")}
        >
          Create
        </Button>
      </div>

      <Card title="My First Post at CodeLeap Network!" controls>
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-lg font-bold text-gray-700">
            @user
          </h1>

          <span className="text-lg font-normal text-gray-700">
            25 minutes agos
          </span>
        </div>

        <p className="text-lg font-normal text-black mt-4">
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          <br /><br />
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </Card>
    </Main>
  )
}