export const IconPartLegTwo = ({
  width = "17",
  height = "33",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.74512 32.9176L16.5078 27.9834L11.3181 0.198425L0.57135 5.14864L5.74512 32.9176Z"
        fill={color}
      />
    </svg>
  );
};
