import { ArticleContentVariant } from "config/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { TagNameMap } from "config/TagsMdx";
import { ImageWithFallback } from "./ImageWithFallback";

const Components: any = {};

const customComponentsToAdd = {
  // Link: Link,
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

// TagNameMap.forEach((tag) => {
//   Components[tag] = (props) => {
//     return (
//       <Custom tag={tag} {...props}>
//         {props?.children}
//       </Custom>
//     );
//   };
// });

Object.keys(customComponentsToAdd).forEach((name) => {
  const Tag = customComponentsToAdd[name];
  Components[name] = (props) => {
    return (
      // <motion.div variants={ArticleContentVariant}>
      <Tag {...props}>{props.children}</Tag>
      // </motion.div>
    );
  };
});

Components["img"] = (props) => {
  return (
    <ImageWithFallback
      imageName={props.src}
      alt={props.alt || "An illustration"}
      className='rounded-0 lg:rounded-xl'
    />
  );
};

Components["KBD"] = (props) => {
  return (
    <kbd className="kbd kbd-sm" {...props}>
      {props.children}
    </kbd>
  );
};

Components["Link"] = (props) => {
  return (
    <Link target={props.href !== undefined && props.href[0] !== '/' ? "_blank" : '_self'} {...props}>
      {props.children}
    </Link>
  );
};

Components["a"] = Components["Link"];

export { Components };
