export const IconEar = ({
  width = "12",
  height = "12",
  color = "#7F3E3B",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.03384 7.25455C3.60802 9.30128 5.88268 10.6945 8.4212 11.1668C11.6149 11.7417 12.6688 8.75559 11.2316 5.84934C9.92223 3.23053 6.68065 -0.218664 3.66263 0.515882C0.6446 1.25043 0.101668 4.71557 2.03384 7.25455Z"
        fill={color}
      />
    </svg>
  );
};
