import React, { FC } from "react";
import useDetectScrollNearBottom from "../../hooks/useDetectScrollNearBottom";
import classNames from "classnames";

import "./styles.scss";

interface InfiniteScrollProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height: number | string;
  onLoad?: () => void;
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({
  height,
  style,
  className,
  onLoad,
  children
}) => {
  const { ref, handleScroll } = useDetectScrollNearBottom(
    {
      callback: onLoad
    },
    []
  );

  return (
    <div
      className={classNames(className, "infinite-scroll-view")}
      style={{ ...style, height }}
      onScroll={handleScroll}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;
