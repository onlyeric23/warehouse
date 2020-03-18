import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./styles.scss";

const Button: FunctionComponent<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = ({ className, ...rest }) => {
  return <button className={classNames(className, "button")} {...rest} />;
};

export default Button;
