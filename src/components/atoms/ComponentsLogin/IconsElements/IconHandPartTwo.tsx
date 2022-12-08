export const IconHandPartTwo = ({
  width = "16",
  height = "19",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.0238037 13.7214L3.69651 0.595398L15.5291 8.40394C15.5291 8.40394 9.14175 19.7734 5.13368 18.8473L0.0238037 13.7214Z"
        fill={color}
      />
    </svg>
  );
};
