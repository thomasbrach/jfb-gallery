import React, { useEffect } from "react";

export const useMountedRef = () => {
  const isMounted = React.useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
