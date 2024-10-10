import Url from './url'

export default function Footer() {
  const year = new Date().getFullYear()

  const url = (text: string, url: string) => {
    return (
      <a href={url} className="cursor-pointer border-b border-b-transparent transition-colors hover:border-b-white">
        {text}
      </a>
    )
  }

  return (
    <footer className="mt-10 w-full bg-[#141414] p-6 text-[0.95rem] tracking-normal text-white xl:text-[0.87rem] lg:text-[0.87rem] xs:text-[0.75rem]">
      <div className="mx-auto max-w-[42rem] text-center">
        <div className="flex flex-row flex-nowrap justify-center opacity-75">
          {url('Polityka cookies', '')}
          <span className="mx-2">|</span>
          {url('Polityka prywatności', '')}
          <span className="mx-2">|</span>
          {url('Zamów stronę', '')}
        </div>
        <hr className="mx-auto mb-3.5 mt-3 w-28 opacity-65" />
        <span className="font-semibold tracking-wide opacity-75">
          &copy; {year} AXEL Electronics 1 / {url('KMSK', '')}
        </span>
      </div>
    </footer>
  )
}
