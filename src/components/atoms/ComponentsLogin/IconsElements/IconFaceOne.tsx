export const IconfaceOne = ({
  width = "17",
  height = "24",
  color = "#2C2E33",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.296 21.0848C18.1224 14.6974 16.3499 5.45169 11.5594 2.01849C10.512 1.23639 9.26637 0.763478 7.96382 0.653391C6.66127 0.543304 5.35394 0.800436 4.19011 1.39565C3.02629 1.99086 2.05256 2.90031 1.37938 4.02085C0.706204 5.14138 0.360518 6.42815 0.38154 7.73517C0.126046 15.5916 12.0704 28.3504 15.296 21.0848Z"
        fill={color}
      />
    </svg>
  );
};
