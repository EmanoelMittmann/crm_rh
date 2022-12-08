export const IconPocket = ({
  width = "23",
  height = "32",
  color = "#15161A",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.3"
        d="M11.4841 1.27559C16.9772 5.89046 20.8735 15.4875 22.662 24.797L11.2605 31.6635C7.66761 27.2881 3.62762 19.3518 0.417969 11.4634C2.90904 3.63892 6.62969 -2.81232 11.4841 1.27559Z"
        fill={color}
      />
    </svg>
  );
};
