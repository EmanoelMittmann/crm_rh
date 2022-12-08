export const IconEye = ({
  width = "3",
  height = "5",
  color = "#2C2E33",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 3 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.623187 2.64156C0.766902 3.58369 1.38966 4.23839 2.01243 4.23839C2.6352 4.23839 3.01844 3.34415 2.87472 2.40201C2.73101 1.45988 2.10825 0.805176 1.48548 0.805176C0.862714 0.805176 0.479471 1.69942 0.623187 2.64156Z"
        fill={color}
      />
    </svg>
  );
};
