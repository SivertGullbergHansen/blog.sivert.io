import { ArticleContentVariant } from "config/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { TagNameMap } from "config/TagsMdx";

const Components: any = {};

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

TagNameMap.forEach((tag) => {
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
