import React, { useState } from "react";
import Input from ".";
import { FaLock } from "react-icons/fa";
import NumericInput from "./NumericInput";

import "./stories.scss";

export default { title: "Input" };

export const Labeled = () => {
  return (
    <div className="stories">
      <h3>Input</h3>
      <Input />

      <h3>Input with icon</h3>
      <Input icon={FaLock} />

      <h3>Input placeholder</h3>
      <Input placeholder="Password" />

      <h3>Input with suffix</h3>
      <Input suffix={() => <a href="">Forgot</a>} />

      <h3>Input with icon, placeholder, and suffix</h3>
      <Input
        icon={FaLock}
        placeholder="Password"
        suffix={() => <a href="">Forgot</a>}
      />
    </div>
  );
};

export const Numeric = () => {
  const [value, setValue] = useState("");
  return (
    <div className="stories">
      <h3>Controllable input</h3>
      <NumericInput value={value} onChange={e => setValue(e.target.value)} />
      <h3>Uncontrollable input</h3>
      <NumericInput />
      <h3>Custom input</h3>
      <NumericInput component={Input} />
    </div>
  );
};
