import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import useResize from "../hooks/useResize";

const Layout = () => {
  const {
    componentAWidth,
    componentBWidth,
    componentCHeight,
    componentAHeight,
    componentBHeight,
    onComponentAResize,
    onComponentBResize,
    onComponentCResize,
    onComponentCResizeEnd,
  } = useResize();

  return (
    <div className="layout-container">
      <div className="layout-container-inner">
        <ComponentA
          width={componentAWidth}
          onResize={onComponentAResize}
          height={componentAHeight}
        />
        <ComponentB
          width={componentBWidth}
          onResize={onComponentBResize}
          height={componentBHeight}
        />
      </div>
      <ComponentC
        width={1440}
        height={componentCHeight}
        onResize={onComponentCResize}
        onResizeEnd={onComponentCResizeEnd}
      />
    </div>
  );
};

export default Layout;
