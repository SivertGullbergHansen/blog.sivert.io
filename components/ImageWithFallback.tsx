import Image from "next/image";

export const ImageWithFallback = ({ alt, src}, props) => {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={`/images/placeholders/${src.split(".")[0]}.webp`}
      src={src}
      width={props.width ?? 1200}
      height={props.height ?? 1200}
      {...props}
      className={`rounded-xl ${props.className}`}
    />
  );
};
