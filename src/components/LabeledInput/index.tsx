import React, {
  FunctionComponent,
  ComponentType,
  SVGAttributes,
  ReactNode,
  useState
} from "react";
import classNames from "classnames";

import "./styles.scss";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ComponentType<React.HTMLAttributes<SVGAttributes<SVGElement>>>;
  error?: string;
  suffix?: () => ReactNode;
  onClickSuffix?: () => void;
}

const Input: FunctionComponent<InputProps> = ({
  value,
  error,
  icon: Icon,
  placeholder,
  suffix,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const focusFactory = (
    focus: boolean,
    cb?: (event: React.FocusEvent<HTMLInputElement>) => void
  ) => (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(focus);
    if (cb) {
      cb(event);
    }
  };
  const elevated = value || focused;
  return (
    <div
      className={classNames("input", {
        focused,
        error,
        elevated,
        "has-icon": Boolean(Icon)
      })}
    >
      {Icon && <Icon className="icon" />}
      <input
        value={value}
        onFocus={focusFactory(true, onFocus)}
        onBlur={focusFactory(false, onBlur)}
        {...rest}
      />
      {(placeholder || error) && (
        <div className="placeholder">
          {placeholder}
          {elevated && error ? ` - ${error}` : ""}
        </div>
      )}
      {suffix && (
        <div className="suffix-container">
          <div className="seperator" />
          {suffix()}
        </div>
      )}
    </div>
  );
};

export default Input;
