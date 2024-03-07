import { useState } from "react";

const useResize = (
  initialAWidth = 200,
  initialBWidth = 1180,
  initialCHeight = 200,
  initialAHeight = 400,
  initialBHeight = 400
) => {
  const [componentAWidth, setComponentAWidth] = useState(initialAWidth);
  const [componentBWidth, setComponentBWidth] = useState(initialBWidth);
  const [componentCHeight, setComponentCHeight] = useState(initialCHeight);
  const [componentAHeight, setComponentAHeight] = useState(initialAHeight);
  const [componentBHeight, setComponentBHeight] = useState(initialBHeight);

  const onComponentAResize = (event, { size }) => {
    const newComponentAHeight = Math.max(0, size.height); // Ensure non-negative height
    const newComponentBHeight = Math.max(
      0,
      componentBHeight - (componentAHeight - newComponentAHeight)
    ); // Adjust height of A

    setComponentBHeight(newComponentBHeight);
    setComponentAHeight(newComponentAHeight);

    // Adjust height of C
    const newComponentCHeight =
      componentCHeight + (componentAHeight - newComponentAHeight);
    setComponentCHeight(newComponentCHeight);

    // Adjust width of A based on the change in width of B
    const newComponentAWidth = Math.max(0, size.width); // Ensure non-negative width
    const newComponentBWidth = initialBWidth - newComponentAWidth; // Adjust width of A

    setComponentBWidth(newComponentBWidth);
    setComponentAWidth(newComponentAWidth);
  };

  const onComponentBResize = (event, { size }) => {
    const newComponentBHeight = Math.max(0, size.height); // Ensure non-negative height
    const newComponentAHeight = Math.max(
      0,
      componentAHeight - (componentBHeight - newComponentBHeight)
    ); // Adjust height of A

    setComponentAHeight(newComponentAHeight);
    setComponentBHeight(newComponentBHeight);

    // Adjust height of C
    const newComponentCHeight =
      componentCHeight + (componentBHeight - newComponentBHeight);
    setComponentCHeight(newComponentCHeight);

    // Adjust width of A based on the change in width of B
    const newComponentBWidth = Math.max(0, size.width); // Ensure non-negative width
    const newComponentAWidth = initialAWidth - newComponentBWidth; // Adjust width of A

    setComponentAWidth(newComponentAWidth);
    setComponentBWidth(newComponentBWidth);
  };

  const onComponentCResize = (event, { size }) => {
    const newComponentCHeight = Math.max(0, size.height); // Ensure non-negative height
    const heightDifference = componentCHeight - newComponentCHeight;

    // Calculate the new heights for Components A and B
    const newComponentAHeight = Math.max(
      0,
      componentAHeight - heightDifference
    );
    const newComponentBHeight = Math.max(
      0,
      componentBHeight - heightDifference
    );

    // Update the heights of Components A and B
    setComponentAHeight(newComponentAHeight);
    setComponentBHeight(newComponentBHeight);
  };

  const onComponentCResizeEnd = (event, { size }) => {
    const newComponentCHeight = Math.max(0, size.height); // Ensure non-negative height
    setComponentCHeight(newComponentCHeight);
  };

  return {
    componentAWidth,
    componentBWidth,
    componentCHeight,
    componentAHeight,
    componentBHeight,
    onComponentAResize,
    onComponentBResize,
    onComponentCResize,
    onComponentCResizeEnd,
  };
};

export default useResize;
