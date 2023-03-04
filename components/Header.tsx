import Link from 'next/link'
import {IoDocumentText} from 'react-icons/io5'

export function Header() {
  return (
    <header className="bg-base-100 flex flex-row p-4 place-items-center justify-between">
    <Link href="/" className="btn btn-ghost normal-case font-bold">
      Sivert Gullberg Hansen
    </Link>
      <nav className='flex flex-row gap-4'>
        <Link href="https://sivert.io" className='flex gap-1 btn btn-ghost'>
          <IoDocumentText className='w-4 h-4'/>
          Portfolio
        </Link>
      </nav>
    </header>
  )
}
