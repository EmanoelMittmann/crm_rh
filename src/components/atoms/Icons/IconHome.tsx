import { SVGProps } from "react";


export const IconHome = ({
  width = "18px",
  height = "18px",
  color = "black",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 7.74975C18 7.53719 17.9101 7.32609 17.7353 7.17747L9.48534 0.17725C9.34522 0.0590938 9.17259 0 9 0C8.82741 0 8.65478 0.0590938 8.51466 0.17725L0.264719 7.17747C0.0899062 7.32609 0 7.53719 0 7.74975C0 8.2525 0.432063 8.49975 0.750625 8.49975C0.921844 8.49975 1.09403 8.44141 1.23541 8.32203L2.00006 7.67316V14.75C2.00006 15.4394 2.56059 16 3.25003 16H6.25003C6.93947 16 7.5 15.4394 7.5 14.75V10.9998H10.5V14.75C10.5 15.4394 11.0605 16 11.75 16H14.75C15.4394 16 15.9999 15.4394 15.9999 14.75V7.67316L16.7646 8.32203C16.9057 8.44119 17.0781 8.49978 17.2495 8.49978C17.567 8.49978 18 8.24884 18 7.74975ZM14.5 14.5H12V10.7498C12 10.0604 11.4394 9.49981 10.75 9.49981H7.25C6.56056 9.49981 6.00003 10.0604 6.00003 10.7498V14.5H3.50003V6.49972C3.50003 6.46962 3.48638 6.44397 3.48288 6.41481L9 1.73297L14.5 6.40028V14.5Z"
        fill={color}
      />
    </svg>
  );
};
