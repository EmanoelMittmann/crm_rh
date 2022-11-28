import React from "react";

export const IconProfissional = ({width='18px', height='16px',color='black',...props}:React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 9.5H5.5C2.46241 9.5 0 11.9624 0 15C0 15.5522 0.447688 16 1 16H13C13.5523 16 14 15.5522 14 15C14 11.9624 11.5376 9.5 8.5 9.5ZM1.53106 14.5C1.77797 12.5295 3.46375 11 5.5 11H8.5C10.5363 11 12.222 12.5295 12.4689 14.5H1.53106ZM7 8C9.20916 8 11 6.20909 11 4C11 1.79084 9.20916 0 7 0C4.79084 0 3 1.79084 3 4C3 6.20909 4.79084 8 7 8ZM7 1.5C8.37847 1.5 9.5 2.62147 9.5 4C9.5 5.37847 8.37847 6.5 7 6.5C5.62153 6.5 4.5 5.37847 4.5 4C4.5 2.62147 5.62153 1.5 7 1.5Z"
        fill="#3B454F"
      />
    </svg>
  );
};
