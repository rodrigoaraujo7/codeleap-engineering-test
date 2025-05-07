import { ReactNode } from "react"

import * as icon from "../assets/icons"

import { PropsModal } from "../pages/Home";

type CardProps = {
  children: ReactNode;
  title: string;
  controls?: boolean;
  openModal: ({ property }: PropsModal) => void
}

export const Card = ({ ...props }: CardProps) => (
  <div className="w-full">
    <div className="p-6 rounded-t-2xl bg-light-blue flex justify-between g-4">
      <h1 className="font-bold text-(length:--title-size) text-white truncate">
        {props.title}
      </h1>

      {props.controls && (
        <div className="flex items-center gap-6">
          <span className="cursor-pointer" onClick={() => props.openModal({ property: "delete" })}>
            <icon.TrashCan />
          </span>

          <span className="cursor-pointer" onClick={() => props.openModal({ property: "edit" })}>
            <icon.Edit />
          </span>
        </div>
      )}
    </div>

    <div className="p-6 rounded-b-2xl border-1 border-t-0 border-gray-600">
      {props.children}
    </div>
  </div>
)