export const IconNeckOne = ({
  width = "29",
  height = "38",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.87226 0.106934L9.07401 6.07912L18.8786 14.223C18.588 15.5286 18.38 16.8513 18.2558 18.1832C17.7289 23.5006 19.1022 28.339 26.9267 30.1914C26.9267 30.1914 34.6234 37.3772 19.2299 37.6007C3.83638 37.8243 0.25946 30.3511 0.25946 30.3511C6.05599 24.5226 3.86831 8.72987 1.87226 0.106934Z"
        fill={color}
      />
    </svg>
  );
};
