import React from "react";

const Panel = (props, myClass) => {
  return <div className="{$myClass}">{props.children}</div>;
};

export default Panel;
