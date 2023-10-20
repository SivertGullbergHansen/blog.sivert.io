import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { motion } from "framer-motion";

export function Header({
  headerPadding,
  maxWidth,
}: {
  headerPadding: string;
  maxWidth: string;
}) {
  return (
    <motion.header
      style={{ transition: "all ease .25s" }}
      className={`z-50 flex place-items-center justify-center fixed top-4 left-2 sm:left-[17px] lg:left-0 right-2 md:right-0`}
    >
      <motion.div
        style={{ transition: "all ease .25s" }}
        className={`flex flex-row ${maxWidth} justify-start ${headerPadding} rounded-lg shadow bg-base-100`}
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
