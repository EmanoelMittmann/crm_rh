import React from "react";

const IconSeta = ({
  width = "11",
  height = "17",
  color = "black",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.3899 0.869008L9.6754 7.44051C9.9399 7.71672 10.0716 8.07276 10.0716 8.42822C10.0716 8.78369 9.9399 9.13972 9.6754 9.41594L3.3899 15.9874C2.84418 16.5572 1.94018 16.5773 1.3699 16.0321C0.798505 15.4863 0.780648 14.5823 1.32526 14.012L6.66658 8.42822L1.32526 2.84447C0.779506 2.27415 0.799613 1.37012 1.3699 0.824366C1.94018 0.27915 2.84418 0.299257 3.3899 0.869008Z"
        fill="white"
      />
    </svg>
  );
};

export default IconSeta;
