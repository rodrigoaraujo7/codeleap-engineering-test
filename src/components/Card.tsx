import { ReactNode } from "react"

import * as icon from "../assets/icons"

type CardProps = {
  children: ReactNode;
  title: string;
  controls?: boolean;
}

export const Card = ({ ...props }: CardProps) => (
  <div className="w-full">
    <div className="p-6 rounded-t-2xl bg-light-blue flex justify-between g-4">
      <h1 className="font-bold text-(length:--title-size) text-white truncate">
        {props.title}
      </h1>

      {props.controls && (
        <div className="flex items-center gap-6">
          <span className="cursor-pointer">
            <icon.TrashCan />
          </span>

          <span className="cursor-pointer">
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