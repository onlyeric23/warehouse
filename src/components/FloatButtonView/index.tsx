import classNames from "classnames";
import React, { FunctionComponent, useState, useRef, ReactNode } from "react";
import useScrollable from "../../hooks/useScrollable";

import "./styles.scss";

export interface FloatButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height: number | string;
  button: ReactNode;
  hiddenDelay?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  dependencies?: any[];
}

const FloatButtonView: FunctionComponent<FloatButtonProps> = ({
  className,
  style,
  height,
  button,
  hiddenDelay = 5000,
  onClick,
  dependencies = [],
  children,
  ...rest
}) => {
  const [showing, setShowing] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const scrollable = useScrollable(ref, dependencies);

  let timeoutRef = useRef<number | undefined>();
  const handleScroll = () => {
    setShowing(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setShowing(false);
    }, hiddenDelay);
  };

  return (
    <div
      className={classNames("float-button-view", className)}
      style={{ ...style, height }}
      {...rest}
    >
      <div
        className="float-button-view-container"
        onScroll={handleScroll}
        ref={ref}
      >
        {children}
      </div>
      <div
        className={classNames("float-button", {
          show: !scrollable || (scrollable && showing)
        })}
        onClick={onClick}
      >
        {button}
      </div>
    </div>
  );
};

export default FloatButtonView;
