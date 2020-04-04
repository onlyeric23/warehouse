import React, {
  FC,
  useCallback,
  useMemo,
  useState,
  ComponentClass,
  StatelessComponent
} from "react";

interface NumericInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  precision?: number;
  component?: ComponentClass<any> | StatelessComponent<any>;
}

const DEFAULT_PROPS = {
  precision: 2
};

const NumericInput: FC<NumericInputProps> = props => {
  const { precision, component: Comp, value, onChange, ...rest } = {
    ...DEFAULT_PROPS,
    ...props
  };

  const defaultValue = useMemo(() => {
    let result = "0.";
    for (let i = 0; i < precision; i += 1) {
      result += "0";
    }
    return result;
  }, [precision]);

  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      if (!raw) {
        e.target.value = defaultValue;
        if (onChange) {
          onChange(e);
        } else {
          setInternalValue(e.target.value);
        }
        return;
      }
      if (raw.length > 11) {
        return;
      }
      const noDot = parseInt(raw.replace(".", ""), 10);
      e.target.value = (noDot / Math.pow(10, precision)).toFixed(precision);
      if (onChange) {
        onChange(e);
      } else {
        setInternalValue(e.target.value);
      }
    },
    [precision]
  );

  return Comp ? (
    <Comp
      {...rest}
      value={value ? value : value == null ? internalValue : defaultValue}
      onChange={handleChange}
    />
  ) : (
    <input
      {...rest}
      value={value ? value : value == null ? internalValue : defaultValue}
      onChange={handleChange}
    />
  );
};

export default NumericInput;
