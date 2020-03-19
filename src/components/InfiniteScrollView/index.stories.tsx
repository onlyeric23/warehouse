import React, { useState, FC } from "react";
import InfiniteScrollView from ".";

import "./stories.scss";

export default { title: "InfiniteScrollView" };

const Item: FC = () => (
  <div className="item">
    <div className="img"></div>
  </div>
);

export const Example = () => {
  const [data, setData] = useState(Array(10).fill(0));

  return (
    <InfiniteScrollView
      height={310}
      onLoad={() => {
        setData([...data, ...data]);
      }}
    >
      <div className="items">
        {data.map((_, index) => {
          return <Item key={index} />;
        })}
      </div>
    </InfiniteScrollView>
  );
};
