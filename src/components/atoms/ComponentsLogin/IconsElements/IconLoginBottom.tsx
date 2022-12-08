import React from 'react'

const IconLoginBottom = ({
  width = "414",
  height = "284",
  color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 414 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M127.468 342.679C106.504 323.29 108.252 287.97 88.0343 267.802C64.354 244.179 14.1379 249.293 2.42926 217.943C-8.63082 188.33 23.2733 159.373 36.8761 130.826C48.187 107.089 55.8188 80.2982 76.0269 63.4895C95.448 47.3355 123.974 50.102 146.833 39.3668C169.336 28.7984 184.869 -1.93622 209.571 0.772242C235.257 3.58865 242.153 42.6733 266.076 52.4413C292.16 63.0916 325.617 42.6889 349.366 57.852C372.112 72.375 375.766 103.974 385.957 128.982C397.541 157.408 415.582 184.956 413.652 215.603C411.671 247.088 400.282 281.717 375.145 300.757C349.449 320.22 309.903 301.969 280.949 316.122C251.903 330.319 242.463 375.665 210.616 381.176C180.134 386.45 150.18 363.685 127.468 342.679Z"
        fill="#0066FF"
      />
    </svg>
  );
};

export default IconLoginBottom;