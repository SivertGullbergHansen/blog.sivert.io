import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import { IoLogoGithub } from "react-icons/io5";
import { transition } from "config/animations";

export function Header({
  headerPadding,
  width,
}: {
  headerPadding: string;
  width: string;
}) {
  const router = useRouter();
  const [allTags, setallTags] = useState<string[]>([]);
  const [showTags, setshowTags] = useState(false);
  useEffect(() => {
    const t = [];
    // Loop through each post and extract its tags
    allPosts.forEach((post) => {
      if (post.tags && post.published && Array.isArray(post.tags)) {
        // Add each tag to the allTags array
        post.tags.forEach((tag) => !t.includes(tag) && t.push(tag));
      }
    });
    t.sort();
    setallTags(t);
  }, []);

  useEffect(() => {
    setshowTags(false);
  }, [router]);

  return (
    <motion.header
      className={`z-50 flex place-items-center justify-center fixed top-4 left-2 sm:left-[17px] xl:left-0 right-2 md:right-0`}
    >
      <motion.div
        style={{ transition: "padding ease .25s, width ease .25s" }}
        className={`flex flex-row ${width} justify-between items-center ${headerPadding} rounded-lg shadow bg-base-100 relative`}
      >
        <motion.div
          className={`absolute left-0 right-0 -bottom-12 bg-base-100 rounded-lg shadow p-1 flex items-center justify-end gap-1 ${
            showTags
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-4"
          }`}
          style={{ transition: "opacity ease .1s, transform ease .1s" }}
        >
          {allTags.map((tag) => (
            <Link
              key={tag}
              scroll={false}
              className="capitalize btn btn-ghost btn-sm"
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </motion.div>
        <Link
          scroll={false}
          href="/"
          className="btn btn-ghost normal-case font-bold"
        >
          Sivert Gullberg Hansen
        </Link>
        <nav className="flex gap-2">
          <button
            className="btn btn-ghost normal-case"
            onClick={() => setshowTags(!showTags)}
          >
            Tags
          </button>
          <Link
            target="_blank"
            href="https://github.com/SivertGullbergHansen"
            className="flex gap-1 btn btn-ghost"
          >
            <IoLogoGithub className="h-4 w-4" />
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
