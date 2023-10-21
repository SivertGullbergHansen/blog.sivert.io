import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageWithFallback = ({ alt, imageName, ...props }) => {
  const [blurDataURL, setBlurDataURL] = useState('empty');

  useEffect(() => {
    // Fetch the content of the .txt file and set it as the blurDataURL
    fetch(`/images/placeholders/${imageName.split(".")[0]}.txt`)
      .then((response) => response.text())
      .then((data) => setBlurDataURL(data))
      .catch((error) => console.error('Error fetching blurDataURL:', error));
  }, [imageName]);

  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
      src={`/images/${imageName}`}
      width={props.width ?? 1200}
      height={props.height ?? 1200}
      {...props}
      className={`${props.className}`}
    />
  );
};
