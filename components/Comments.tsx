import React, { useRef } from "react";

import useScript from "./useScript";

const Comments = ({...props}) => {
  const comment = useRef(null);

  useScript({
    url: "https://giscus.app/client.js",
    ref: comment
  });

  return (
    <div className={`w-full ${props.className}`}>
      {
        <div ref={comment}></div>
      }
    </div>
  );
};

export {Comments};