import { Input } from "~/ui/input"

export default function SearchNav() {
  return (
    <div className="ml-auto">
      <Input
        type="search"
        placeholder="Search..."
        className="border border-zinc-300 md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
