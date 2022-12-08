export const IconSmallWindow = ({
  width = "135px",
  height = "250px",
  color = "#F2F5F8",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 135 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.965378 249.796L134.781 249.796L134.781 0.545395L0.965378 0.545395L0.965378 249.796Z"
        fill={color}
      />
    </svg>
  );
};
