export const IconMat = ({
  width = "620",
  height = "37",
  color = "#F2F5F8",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="620"
      height="37"
      viewBox="0 0 620 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M310.195 36.9185C481.188 36.9185 619.806 28.8255 619.806 18.8423C619.806 8.85908 481.188 0.766113 310.195 0.766113C139.201 0.766113 0.583374 8.85908 0.583374 18.8423C0.583374 28.8255 139.201 36.9185 310.195 36.9185Z"
        fill={color}
      />
    </svg>
  );
};
