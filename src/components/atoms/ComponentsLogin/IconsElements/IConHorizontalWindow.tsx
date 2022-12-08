export const IconHorizontalWindow = ({
  width = "332",
  height = "15",
  color = "#7f8488",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 332 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.368744 14.5387L331.553 14.5387V0.646199L0.368744 0.646199V14.5387Z"
        fill={color}
      />
    </svg>
  );
};
