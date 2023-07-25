import Image from "next/image"
import Link from "next/link"
import { SearchIcon } from "~/icons"

import { CartSheet } from "./cart/cart-sheet"
import MainNav from "./main-nav"
import SearchNav from "./search-nav"
import { UserNav } from "./user-nav"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-700/10 bg-white shadow-sm">
      <nav className="container flex items-center gap-3 py-3 sm:gap-6 lg:gap-0">
        {/* // TODO: Add a mobile menu */}
        <Link href="/">
          <Image src="/images/logo.png" width={30} height={30} alt="logo" />
        </Link>
        <MainNav />
        {/* // TODO: change the search style */}
        <SearchNav />
        <CartSheet />
        <UserNav />
      </nav>
    </header>
  )
}
