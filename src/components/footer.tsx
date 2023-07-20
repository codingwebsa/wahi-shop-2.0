import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-16 flex justify-center px-4 text-gray-800">
      <div className="container px-6 py-6">
        <hr className="my-7 h-px border-none bg-gray-200" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link href="/">
            <Image
              className="h-7 w-auto"
              src="/images/logo.png"
              width={30}
              height={30}
              alt=""
            />
          </Link>

          <div className="mt-4 flex md:m-0">
            <div className="-mx-4">
              <Link
                href="/"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-emerald-700 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-emerald-700 hover:underline"
              >
                books
              </Link>
              <Link
                href="/"
                className="px-4 text-base text-gray-600 transition-colors duration-300 hover:text-emerald-700 hover:underline"
              >
                facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
