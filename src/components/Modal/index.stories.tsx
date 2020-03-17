import React, { useState } from "react";
import Modal from ".";

export default { title: "Modal" };

export const Example = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <button onClick={() => setOpened(true)}>Open</button>
      {opened && (
        <Modal onClose={() => setOpened(false)}>
          I am a Modal
        </Modal>
      )}
    </div>
  );
};
