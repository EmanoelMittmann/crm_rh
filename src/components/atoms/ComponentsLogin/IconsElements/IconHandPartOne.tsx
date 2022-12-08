export const IconHandPartOne = ({
  width = "14",
  height = "18",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.511169 10.6255L4.66295 0.533508L13.4136 9.84308C13.4136 9.84308 9.182 19.7435 4.26374 17.1247L0.511169 10.6255Z"
        fill={color}
      />
    </svg>
  );
};
