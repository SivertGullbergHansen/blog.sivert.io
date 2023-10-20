import Image from "next/image";

export const ImageWithFallback = ({ alt, imageName, ...props }) => {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={`/images/placeholders/${imageName.split(".")[0]}.webp`}
      src={`/images/${imageName}`}
      width={props.width ?? 1200}
      height={props.height ?? 1200}
      {...props}
      className={`${props.className}`}
    />
  );
};
