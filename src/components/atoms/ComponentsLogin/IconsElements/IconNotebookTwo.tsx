export const IconNotebookTwo = ({
  width = "8",
  height = "2",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.40479 0.365479H0.745972V1.96232H7.40479V0.365479Z"
        fill={color}
      />
    </svg>
  );
};
