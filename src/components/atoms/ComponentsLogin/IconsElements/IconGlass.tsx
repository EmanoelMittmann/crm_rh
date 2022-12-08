export const IconGlass = ({
  width = "50px",
  height = "111px",
  color = "#F2F5F8",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49.0971 101.647L49.0971 8.67881C49.0971 3.90768 45.2293 0.039917 40.4582 0.039917L9.30387 0.039917C4.53274 0.039917 0.664967 3.90768 0.664967 8.67881L0.664967 101.647C0.664967 106.418 4.53274 110.286 9.30387 110.286H40.4582C45.2293 110.286 49.0971 106.418 49.0971 101.647Z"
        fill={color}
      />
    </svg>
  );
};
