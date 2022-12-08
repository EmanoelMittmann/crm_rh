export const IconVerticalWindow = ({
  width = "6.8",
  height = "624",
  color = "#7f8488",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.51416 215.143L5.51416 0.0167847L0.643795 0.0167847L0.643795 215.143H5.51416Z"
        fill={color}
      />
    </svg>
  );
};