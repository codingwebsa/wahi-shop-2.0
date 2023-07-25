import Link from "next/link"

import { siteConfig } from "~/config/site"

export default function MainNav() {
  return (
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
  )
}
