import Image from "next/image"
import { useEffect, useState } from "react"

const fallbackImage = '/images/placeholder.webp'

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
      {...props}
    />
  )
}