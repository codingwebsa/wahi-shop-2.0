export default function Billboard() {
  return (
    <div className="container overflow-hidden rounded-xl pt-3 sm:pt-5 lg:pt-6">
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-[url('/images/billboard.png')] bg-cover hue-rotate-[245deg] lg:aspect-[3/1] xl:aspect-[3.8/1]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            Explore The Special Collection!
          </div>
        </div>
      </div>
    </div>
  )
}
