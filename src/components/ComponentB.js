import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { getAPICount } from "../api/apiProvider";

const ComponentB = ({ width, onResize, height }) => {
  return (
    <div className="media-container">
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["s", "w", "e", "n"]}
        className="custom-resizable-box"
        maxConstraints={[1180, 500]}
        minConstraints={[300, 200]}
        onResize={onResize}
      >
        <div>
          <button
            onClick={() => {
              getAPICount();
            }}
          >
            Get API Count
          </button>
        </div>
      </ResizableBox>
    </div>
  );
};

export default ComponentB;
