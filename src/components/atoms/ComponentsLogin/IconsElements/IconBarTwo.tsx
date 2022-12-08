export const IconBarTwo = ({
  width = "29",
  height = "23",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.44554 22.2966L28.3942 10.3842L26.7175 0.835083L0.0343018 10.5918L2.44554 22.2966Z"
        fill={color}
      />
    </svg>
  );
};
