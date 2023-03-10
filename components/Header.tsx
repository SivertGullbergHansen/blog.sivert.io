import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion"

export function Header({headerPadding}: {headerPadding: number}) {
  
  return (
    <motion.header style={{transition: 'all ease .25s'}} className={`bg-base-300 z-50 flex flex-row p-${headerPadding} ${headerPadding === 0 && 'xl:bg-opacity-0'} bg-opacity-100 place-items-center justify-center xl:justify-start fixed top-0 left-0 right-0`}>
      <Link scroll={false} href="/" className="btn btn-ghost normal-case font-bold">
        Sivert Gullberg Hansen
      </Link>
      <nav className="flex flex-row gap-4 fixed top-0 right-0 xl:relative">
        <Link href="https://sivert.io" className="flex gap-1 btn btn-ghost">
          <IoDocumentText className="w-4 h-4" />
          <span className="xl:block hidden">Portfolio</span>
        </Link>
      </nav>
    </motion.header>
  );
}
