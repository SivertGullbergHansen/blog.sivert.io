import { useEffect, useState } from "react";

// we need a function that accepts the script src and couple of other parameters

const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref } = params;

  const [status, setStatus] = useState(url ? "loading" : "idle");

  // run the useEffect when the url of the script changes
  useEffect(() => {
    if (!url) {
      setStatus("idle");
      return;
    }
    // assuming there are no existing script and creating a new script

    let script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-category-id", "DIC_kwDOJFDxMc4CUxCa");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-repo-id", "R_kgDOJFDxMQ");
    script.setAttribute("data-repo", "SivertGullbergHansen/blog.sivert.io");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-mapping", "pathname");

    // Add script to document body
    ref.current.appendChild(script);

    // store status of the script

    const setAttributeStatus = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    script.addEventListener("load", setAttributeStatus);
    script.addEventListener("error", setAttributeStatus);

    return () => {
      // useEffect clean up
      if (script) {
        script.removeEventListener("load", setAttributeStatus);
        script.removeEventListener("error", setAttributeStatus);
      }
    };
  }, [url]);
  return status;
};

export default useScript;
