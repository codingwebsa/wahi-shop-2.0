import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="border-stone-200 border-b">
      <nav className="container flex justify-between py-5 items-center">
        {/* logo */}
        <Link href="/" className="font-bold text-2xl text-emerald-950">
          Wahi Shop.
        </Link>
        {/* links */}
        <div className="flex gap-4">
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
        <div>
          <div className="relative h-fit">
            <input
              type="text"
              className="border border-emerald-800 outline-none py-2 px-4 rounded-full w-[300px] pr-10"
              placeholder="Search Books..."
            />
            <button
              aria-label="search"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-2 cursor-pointer flex items-center rounded-r-full"
            >
              <FiSearch size={18} />
            </button>
          </div>
        </div>
        {/* extra links with icons */}
        <div>
          <div className="flex items-center gap-3">
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
      </nav>
    </header>
  );
}
