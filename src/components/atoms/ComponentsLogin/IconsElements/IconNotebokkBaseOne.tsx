export const IconNotebookBaseOne = ({
  width = "39",
  height = "6",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        d="M33.8297 0.947693H4.43183C3.30236 0.9519 2.22036 1.40241 1.4217 2.20107C0.623038 2.99973 0.172481 4.08175 0.168274 5.21123H38.1092C38.105 4.07899 37.6522 2.99458 36.8501 2.19547C36.048 1.39635 34.9619 0.947685 33.8297 0.947693Z"
        fill={color}
      />
    </svg>
  );
};

