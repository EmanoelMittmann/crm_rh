export const IconShirtSleeveOne = ({
  width = "43",
  height = "51",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.3625 9.00192C35.9435 20.052 42.3309 35.5095 42.3309 35.5095L17.1647 50.6635C9.89906 41.817 0.844999 18.3754 0.461758 10.471C-0.0971357 -1.68094 15.983 -2.89453 26.3625 9.00192Z"
        fill={color}
      />
    </svg>
  );
};
