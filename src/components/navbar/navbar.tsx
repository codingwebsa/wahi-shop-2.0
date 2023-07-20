import Image from "next/image"
import Link from "next/link"
import { SearchIcon, ShoppingBag } from "~/icons"

import { siteConfig } from "~/config/site"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-700/10 bg-white shadow-sm">
      <nav className="container flex items-center gap-3 py-3 sm:gap-6 lg:gap-0">
        {/* mobile menu */}
        {/* // TODO: Add a mobile menu */}
        {/* logo */}
        <Link href="/">
          <Image src="/images/logo.png" width={30} height={30} alt="logo" />
        </Link>
        {/* links */}
        <div className="ml-6 hidden gap-6 lg:flex">
          {siteConfig.mainNav.map((navItem, i) => (
            <span key={i.toString()}>
              <Link
                href={navItem.href}
                className="text-base font-medium text-stone-600 duration-300 hover:text-stone-900"
              >
                {navItem.title}
              </Link>
            </span>
          ))}
        </div>
        {/* // TODO: change the search style */}
        {/* search bar */}
        <div className="ml-auto lg:flex-none">
          <div className="relative hidden h-fit w-full lg:block">
            <input
              type="text"
              className="w-full rounded-full border border-stone-500 px-4 py-2 pr-10 outline-none placeholder:text-sm placeholder:text-stone-700 lg:w-[300px]"
              placeholder="Search Books..."
            />
            <button
              aria-label="search"
              className="absolute right-1 top-1/2 flex -translate-y-1/2 cursor-pointer items-center rounded-r-full px-2"
            >
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
        {/* extra links with icons */}
        <div className="ml-6">
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/"
              className="flex items-center rounded-full p-2 duration-300 hover:bg-stone-200 lg:hidden"
            >
              <SearchIcon
                size={27}
                className="h-auto w-6 rounded-full"
                strokeWidth={1.2}
              />
            </Link>
            {/* cart */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white duration-300 hover:opacity-80"
            >
              <ShoppingBag size={23} className="rounded-full" />
              <p>0</p>
            </Link>
            {/* user image */}
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/images/user.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full p-1 duration-200 hover:bg-slate-200"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
