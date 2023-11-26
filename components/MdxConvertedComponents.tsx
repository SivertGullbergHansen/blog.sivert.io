import Link from "next/link";
import { ImageWithFallback } from "./ImageWithFallback";
import { CustomEmoji } from "./CustomEmoji";

const Components: any = {};

const customComponentsToAdd = {
  Emoji: CustomEmoji,
};

Object.keys(customComponentsToAdd).forEach((name) => {
  const Tag = customComponentsToAdd[name];

  Components[name] = (props) => {
    return props.children ? (
      <Tag {...props}>{props.children}</Tag>
    ) : (
      <Tag {...props} />
    );
  };
});

Components["img"] = (props) => (
  <ImageWithFallback
    imageName={props.src}
    alt={props.alt || "An illustration"}
    className="rounded-0 lg:rounded-xl"
  />
);

Components["KBD"] = (props) => (
  <kbd className="kbd kbd-sm" {...props}>
    {props.children}
  </kbd>
);

Components["Link"] = (props) => (
  <Link
    target={
      props.href !== undefined && props.href[0] !== "/" ? "_blank" : "_self"
    }
    {...props}
  >
    {props.children}
  </Link>
);

Components["a"] = Components["Link"];

export { Components };
