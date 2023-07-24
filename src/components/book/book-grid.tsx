import { BookDataType } from "~/types"

import { cn } from "~/lib/utils"

import BookCard from "./book-card"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string
  data?: BookDataType[]
}

export default function BookGrid({ title, data, className, ...props }: Props) {
  return (
    <div className={cn("pt-6 sm:pt-7 lg:pt-8", className)} {...props}>
      <div className="container">
        <div>
          <h3 className="text-center text-lg font-bold sm:text-xl md:text-left md:text-2xl">
            {title}
          </h3>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-px pb-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {data?.map((data, i) => (
              <BookCard data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
