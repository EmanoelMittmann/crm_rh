export const IconBarOne = ({
  width = "31",
  height = "12",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.637695 11.3046H29.1892L30.818 0.046875L1.02095 1.38821L0.637695 11.3046Z"
        fill={color}
      />
    </svg>
  );
};
