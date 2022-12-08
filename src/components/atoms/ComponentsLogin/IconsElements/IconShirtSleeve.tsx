export const IconShirtSleeve = ({
  width = "36",
  height = "52",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.1873 0.921968C30.7164 -2.71883 38.0938 6.49494 34.9002 22.4793C32.7252 32.6912 29.0328 42.5197 23.9458 51.6376L0.647949 40.5875C2.86756 24.9225 7.38661 4.6426 19.1873 0.921968Z"
        fill={color}
      />
    </svg>
  );
};
