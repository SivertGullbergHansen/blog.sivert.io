import { ArticleContentVariant } from "config/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const Components: any = {};

function Custom({tag, children, ...props}: {tag: string, children: any, props: any}) {
    const C = motion[tag]
    return <C variants={ArticleContentVariant} {...props}>{ children }</C>
}

Components.a = (props) => {
  return <Custom tag='a' {...props}>{props?.children}</Custom>;
};

Components.Link = (props) => {
  return (
    <motion.div variants={ArticleContentVariant}>
          <Link {...props}>{props.children}</Link>
    </motion.div>
  );
};

Components.p = (props) => {
  return <Custom tag='p' {...props}>{props?.children}</Custom>;
};

export { Components };