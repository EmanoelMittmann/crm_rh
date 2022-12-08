export const IconPartLegOne = ({
  width = "18",
  height = "28",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.0449829 27.9916H11.8935L17.3068 0.589844H5.47423L0.0449829 27.9916Z"
        fill={color}
      />
    </svg>
  );
};
