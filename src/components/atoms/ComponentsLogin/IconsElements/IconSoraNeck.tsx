export const IconSoraNeck = ({
  width = "11",
  height = "13",
  color = "#15161A",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        d="M10.8308 8.17493C10.5401 9.48058 10.3321 10.8033 10.208 12.1351C6.55126 11.4005 1.66494 7.50427 1.15395 3.76767C0.974296 2.5306 0.931452 1.27751 1.0262 0.0310669L10.8308 8.17493Z"
        fill={color}
      />
    </svg>
  );
};
