import { RefObject, useState, useCallback, useEffect } from "react";

/**
 * Check refereneced DOM object is scrollable.
 * @param ref Referenced DOM object
 * @param deps Re-checking the ref when dependencies changed
 */
const useScrollable = (ref: RefObject<HTMLElement>, deps: any[]) => {
  const [scrollable, setScrollable] = useState<boolean>(false);
  const checkScrollable = useCallback(() => {
    let result = false;
    if (ref.current) {
      if (ref.current.scrollHeight > ref.current.clientHeight) {
        result = true;
      } else {
        result = false;
      }
    }
    setScrollable(result);
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", checkScrollable);
    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, [checkScrollable]);

  useEffect(() => {
    checkScrollable();
  }, [...deps, checkScrollable]);

  return scrollable;
};

export default useScrollable;
