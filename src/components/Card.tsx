import { ReactNode, useState } from "react"

import { BlurContent } from "./BlurContent";
import { FormCard } from "./FormCard";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./Textarea";

import axios from "axios";
import { toast } from "react-toastify"
import { AnimatePresence } from "motion/react";

import { usePostProviderContext } from "../store/PostProvider";

import * as icon from "../assets/icons"

import { TPost } from "../types/Post";

type CardProps = {
  children: ReactNode;
  title: string;
  controls?: boolean;
  post: TPost;
}

type ModalProps = {
  closeModal: () => void;
  post: TPost;
}

export interface TModals {
  delete: boolean,
  edit: boolean,
}

export interface PropsModal {
  property: keyof TModals;
}

export const Card = ({ ...props }: CardProps) => {
  const [modals, setModals] = useState<TModals>({
    delete: false, edit: false
  })

  const openModal = ({ property }: PropsModal) => {
    setModals(modal => ({
      ...modal,
      [property]: true
    }))
  }

  const closeModal = () => {
    setModals({
      edit: false,
      delete: false
    })
  }

  return (
    <>
      <div className="w-full">
        <div className="p-6 rounded-t-2xl bg-light-blue flex justify-between g-4">
          <h1 className="font-bold text-(length:--title-size) text-white truncate">
            {props.title}
          </h1>

          {props.controls && (
            <div className="flex items-center gap-6">
              <span className="cursor-pointer" onClick={() => openModal({ property: "delete" })}>
                <icon.TrashCan />
              </span>

              <span className="cursor-pointer" onClick={() => openModal({ property: "edit" })}>
                <icon.Edit />
              </span>
            </div>
          )}
        </div>

        <div className="p-6 rounded-b-2xl border-1 border-t-0 border-gray-600">
          {props.children}
        </div>
      </div>

      <AnimatePresence>
        {modals.delete && (
          <DeleteModal
            closeModal={closeModal}
            post={props.post}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modals.edit && (
          <EditModal
            closeModal={closeModal}
            post={props.post}
          />
        )}
      </AnimatePresence>
    </>
  )
}

const DeleteModal = ({ ...props }: ModalProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const {
    setPosts, api
  } = usePostProviderContext()

  const deletePost = async () => {
    setIsDeleting(true)

    try {
      await axios.delete(`${api}${props.post.id}/`);
      setPosts((prev) => prev.filter(post => post.id !== props.post.id))

      props.closeModal();
      toast.success("Post deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Error deleting post");
    }

    setIsDeleting(false)
  }

  return (
    <BlurContent>
      <FormCard title="Are you sure you want to delete this item?">
        <div className="flex items-center justify-end gap-4 w-full mt-10">
          <Button
            variant="outlined"
            bg="gray-600"
            onClick={props.closeModal}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            bg="bg-light-red"
            onClick={deletePost}
            isFetching={isDeleting}
          >
            Delete
          </Button>
        </div>
      </FormCard>
    </BlurContent>
  )
}

export const EditModal = ({ ...props }: ModalProps) => {
  const [inputTitleValue, setInputTitleValue] = useState<string>(props.post.title);
  const [inputContentValue, setInputContentValue] = useState<string>(props.post.content);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const {
    setPosts, api
  } = usePostProviderContext()

  const editPost = async () => {
    if (inputTitleValue === "" || inputContentValue === "") return toast.error("Fill in the fields to edit the post");

    setIsEditing(true)

    const updatedPostData: TPost = {
      ...props.post,
      title: inputTitleValue,
      content: inputContentValue
    }

    try {
      const response = await axios.patch(`${api}${props.post.id}/`, updatedPostData);

      setPosts((prev) =>
        prev.map((post) =>
          post.id === props.post.id ? { ...post, ...response.data } : post
        )
      );

      props.closeModal();
      toast.success("Post edited successfully")
    } catch (error) {
      console.log("Edit error: " + error)
      toast.error("Error editing post")
    }

    setIsEditing(false)
  }

  return (
    <BlurContent>
      <FormCard title="Edit item">
        <div className="flex flex-col gap-6">
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

          <div className="flex items-center justify-end gap-4 w-full">
            <Button
              variant="outlined"
              bg="black"
              onClick={props.closeModal}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              bg="bg-light-green"
              disabled={(inputTitleValue === "" || inputContentValue === "")}
              onClick={editPost}
              isFetching={isEditing}
            >
              Save
            </Button>
          </div>
        </div>
      </FormCard>
    </BlurContent>
  )
}