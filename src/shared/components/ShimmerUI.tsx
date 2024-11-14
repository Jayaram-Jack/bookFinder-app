import React from "react";

interface ShimmerProps {
  count?: number;
  boxStyle?: string;
  gridColsNumber?: number; // Please mention it for small devices
}

const ShimmerUI: React.FC<ShimmerProps> = ({
  count = 8,
  boxStyle = "h-72",
  gridColsNumber,
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-${
        gridColsNumber || 2
      } lg:grid-cols-${gridColsNumber || 3} xl:grid-cols-${
        gridColsNumber || 4
      } gap-6`}
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={count + "" + index}
          aria-hidden="true"
          className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${boxStyle}`}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
