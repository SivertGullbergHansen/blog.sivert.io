import Image from "next/image"
import { useEffect, useState } from "react"

const fallbackImage = '/images/plc_dark.webp'

export const ImageWithFallback = ({
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [src])
  console.log(props);
  

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      width={props.width || 1200}
      height={props.height || 1200}
      {...props}
      className={`rounded-xl ${props.className}`}
    />
  )
}