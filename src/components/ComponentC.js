import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { updateData } from "../api/apiProvider";

const ComponentC = ({ width, height, onResize, onResizeEnd }) => {
  const updateNewData = () => {
    const payload = {
      name: "updating testing name",
      desccription: "testing updating description",
      id: "65e9d9290583c182caa16722",
    };
    updateData(payload);
    alert("Data updated successfully !");
  };
  return (
    <div className="media-container">
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["s", "w", "e", "n"]}
        className="custom-resizable-box"
        onResize={onResize}
        onResizeStop={onResizeEnd}
        minConstraints={[200, 100]}
        maxConstraints={[1440, 200]}
      >
        <div>
          <button onClick={updateNewData}>Update !</button>
        </div>
      </ResizableBox>
    </div>
  );
};

export default ComponentC;
