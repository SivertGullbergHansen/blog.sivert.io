import { ArticleContentVariant } from "config/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const Components: any = {};

const componentsToAdd = [
  "a",
  "p",
  "h1",
  "h2",
  "h3",
  "pre",
  "code",
  "table",
  "ul",
  "li",
  "ol",
];

const customComponentsToAdd = {
  Link: Link,
};

function Custom({
  tag,
  children,
  ...props
}: {
  tag: any;
  children: any;
  props: any;
}) {
  const C = motion(tag);
  return (
    <C variants={ArticleContentVariant} {...props}>
      {children}
    </C>
  );
}

componentsToAdd.forEach((tag) => {
  Components[tag] = (props) => {
    return (
      <Custom tag={tag} {...props}>
        {props?.children}
      </Custom>
    );
  };
});

Object.keys(customComponentsToAdd).forEach((name) => {
  const Tag = customComponentsToAdd[name];
  Components[name] = (props) => {
    return (
      <motion.div variants={ArticleContentVariant}>
        <Tag {...props}>{props.children}</Tag>
      </motion.div>
    );
  };
});

export { Components };
