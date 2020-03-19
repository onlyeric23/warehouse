import { useEffect, useCallback, useRef, MutableRefObject } from "react";

const useDetectScrollNearBottom: (
  options: {
    callback?: () => void;
    disabled?: boolean;
    offset?: number;
  },
  dependencies: any[]
) => {
  ref: MutableRefObject<any>;
  handleScroll: () => void;
} = ({ callback, disabled = false, offset = 60 }, dependencies) => {
  const ref = useRef<any>(null);
  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element || disabled) return;
    if (
      element.scrollHeight - element.clientHeight - element.scrollTop <=
      offset
    ) {
      callback && callback();
    }
  }, [disabled, callback, offset]);

  const checkReachBottom = useCallback(() => {
    const element = ref.current;
    if (!element || disabled) return;
    if (element.scrollHeight === element.clientHeight) {
      callback && callback();
    }
  }, [disabled, callback]);

  useEffect(() => {
    checkReachBottom();
  }, [...dependencies, checkReachBottom]);

  useEffect(() => {
    document.addEventListener("resize", checkReachBottom);
    return () => document.removeEventListener("resize", checkReachBottom);
  }, [checkReachBottom]);
  return { ref, handleScroll };
};

export default useDetectScrollNearBottom;