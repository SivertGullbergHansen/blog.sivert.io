import React, { useContext } from "react";
import Giscus from '@giscus/react'
import { ThemeContext } from "./ThemeWrapper";

const Comments = () => {
  const theme = useContext(ThemeContext);

  return (<Giscus
    id="comments"
    repo="SivertGullbergHansen/blog.sivert.io"
    repoId="R_kgDOJFDxMQ"
    category="Announcements"
    categoryId="DIC_kwDOJFDxMc4CUxCa"
    mapping="pathname"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme={theme === 'sivert_dark' ? 'noborder_dark' : 'noborder_light'}
    lang="en"
    loading="lazy"
  />
  );
};

export { Comments };
