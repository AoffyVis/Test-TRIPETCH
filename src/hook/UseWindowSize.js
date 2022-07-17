import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([
      window.innerHeight,
      window.innerWidth,
    ]);
    useEffect(() => {
      const handleResize = () => {
        setWindowSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return windowSize;
}

export default useWindowSize;