import Image from "next/image"

export const ImageWithFallback = ({
  alt,
  src,
  ...props
}) => {
  console.log(`/_next/image?url=${encodeURIComponent(src)}&q=1&w=128`);
  
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={`/_next/image?url=${encodeURIComponent(src)}&q=1&w=128`}
      src={src}
      width={props.width || 1200}
      height={props.height || 1200}
      {...props}
      className={`rounded-xl ${props.className}`}
    />
  )
}