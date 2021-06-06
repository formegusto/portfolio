import React, { useEffect, useRef } from "react";
import ThxComponent from "../components/ThxComponent";
import { throttle } from "lodash";

function ThxContainer() {
  const imgBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(() => {
        if (window.pageYOffset >= 4770) {
          if (imgBlockRef.current) imgBlockRef.current.classList.add("big");
        } else {
          if (imgBlockRef.current) imgBlockRef.current.classList.remove("big");
        }
      }, 300)
    );
  });

  return <ThxComponent imgBlockRef={imgBlockRef} />;
}

export default ThxContainer;
