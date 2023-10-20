import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion";

export function Header({ headerPadding }: { headerPadding: number }) {
  return (
    <motion.header
      style={{ transition: "all ease .25s" }}
      className={`z-50 flex place-items-center justify-center fixed top-4 left-0 right-0`}
    >
      <motion.div
        style={{ transition: "all ease .25s" }}
        className={`flex flex-row w-full max-w-[1200px] justify-start p-${headerPadding} rounded-lg shadow bg-base-100`}
      >
        <Link
          scroll={false}
          href="/"
          className="btn btn-ghost normal-case font-bold"
        >
          Sivert Gullberg Hansen
        </Link>
        <nav className="flex gap-2">
          <Link href="https://sivert.io" className="flex gap-1 btn btn-ghost">
            <IoDocumentText className="w-4 h-4" />
            <span>Portfolio</span>
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
