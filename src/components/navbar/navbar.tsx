import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag, HiMenuAlt3 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="border-stone-200 border-b">
      <nav className="container flex gap-3 sm:gap-6 lg:gap-0 lg:justify-between py-5 items-center px-3 sm:px-6">
        {/* logo */}
        <Link href="/" className="font-bold text-2xl text-emerald-950">
          Wahi Shop.
        </Link>
        {/* links */}
        <div className="lg:flex gap-6 hidden">
          <span>
            <Link
              href="/"
              className="text-stone-700 hover:text-green-900 duration-300 text-lg font-medium"
            >
              Categories
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-stone-700 hover:text-green-900 duration-300 text-lg font-medium"
            >
              Deals
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-stone-700 hover:text-green-900 duration-300 text-lg font-medium"
            >
              What&apos;s New
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-stone-700 hover:text-green-900 duration-300 text-lg font-medium"
            >
              Favorites
            </Link>
          </span>
        </div>
        {/* search bar */}
        <div className="flex-1 lg:flex-none">
          <div className="relative h-fit w-full">
            <input
              type="text"
              className="border border-emerald-800 outline-none py-2 px-4 rounded-full w-full lg:w-[300px] pr-10"
              placeholder="Search Books..."
            />
            <button
              aria-label="search"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-2 cursor-pointer flex items-center rounded-r-full"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
        {/* extra links with icons */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex gap-1 items-center">
              <AiOutlineUser size={20} />
              <p className="font-medium text-lg">Accounts</p>
            </Link>
            <Link href="/" className="flex gap-1 items-center">
              <HiOutlineShoppingBag size={20} />
              <p className="font-medium text-lg">Cart</p>
            </Link>
          </div>
        </div>
        {/* mobile menu */}
        <div className="mx-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="menu">
                <HiMenuAlt3 size={30} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Category</DropdownMenuItem>
              <DropdownMenuItem>Deals</DropdownMenuItem>
              <DropdownMenuItem>What&apos;s new</DropdownMenuItem>
              <DropdownMenuItem>Favorites</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
