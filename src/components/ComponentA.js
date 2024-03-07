import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { postData } from "../api/apiProvider";

const ComponentA = ({ width, onResize, height }) => {
  const addData = () => {
    const payload = {
      name: "testing data",
      description: "testing description",
    };
    postData(payload);
  };
  return (
    <div className="media-container">
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["s", "w", "e", "n"]}
        className="custom-resizable-box"
        minConstraints={[80, 100]}
        maxConstraints={[1236, 600]}
        onResize={onResize}
      >
        <div>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              addData();
            }}
          >
            Add +
          </button>
        </div>
      </ResizableBox>
    </div>
  );
};

export default ComponentA;
