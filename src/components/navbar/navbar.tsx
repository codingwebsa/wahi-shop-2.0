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
    <header className="border-b border-stone-200">
      <nav className="container flex items-center gap-3 px-3 py-5 sm:gap-6 lg:gap-0 lg:justify-between sm:px-6">
        {/* logo */}
        <Link href="/" className="text-2xl font-bold text-emerald-950">
          Wahi Shop.
        </Link>
        {/* links */}
        <div className="hidden gap-6 lg:flex">
          <span>
            <Link
              href="/"
              className="text-lg font-medium duration-300 text-stone-700 hover:text-green-900"
            >
              Categories
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-lg font-medium duration-300 text-stone-700 hover:text-green-900"
            >
              Deals
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-lg font-medium duration-300 text-stone-700 hover:text-green-900"
            >
              What&apos;s New
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="text-lg font-medium duration-300 text-stone-700 hover:text-green-900"
            >
              Favorites
            </Link>
          </span>
        </div>
        {/* search bar */}
        <div className="flex-1 lg:flex-none">
          <div className="relative w-full h-fit">
            <input
              type="text"
              className="border border-emerald-800 outline-none py-2 px-4 rounded-full w-full lg:w-[300px] pr-10"
              placeholder="Search Books..."
            />
            <button
              aria-label="search"
              className="absolute flex items-center px-2 -translate-y-1/2 rounded-r-full cursor-pointer right-1 top-1/2"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
        {/* extra links with icons */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1">
              <AiOutlineUser size={20} />
              <p className="text-lg font-medium">Accounts</p>
            </Link>
            <Link href="/" className="flex items-center gap-1">
              <HiOutlineShoppingBag size={20} />
              <p className="text-lg font-medium">Cart</p>
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
