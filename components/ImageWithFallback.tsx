import Image from "next/image"
import { useEffect, useState } from "react"

const fallbackImage = '/images/plc.webp'

export const ImageWithFallback = ({
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      width={props.width || 640}
    height={props.height || 640}
      {...props}
    />
  )
}