export const IconFontCover = ({
  width = "97",
  height = "62",
  color = "#15161A",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="97"
      height="62"
      viewBox="0 0 97 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        d="M93.1444 61.3309H10.8433C9.66346 61.3135 8.52947 60.8712 7.64949 60.0851C6.7695 59.299 6.20257 58.2218 6.0528 57.0514L0.559689 5.21797C0.488163 4.67913 0.534032 4.13117 0.694189 3.61173C0.854346 3.09229 1.125 2.61364 1.48754 2.20862C1.85008 1.80361 2.29595 1.48182 2.79455 1.26532C3.29315 1.04883 3.83269 0.94278 4.37613 0.954416H86.6772C87.8556 0.967923 88.9895 1.40686 89.8698 2.19035C90.7501 2.97384 91.3176 4.04909 91.4677 5.21797L96.9609 57.0514C97.0321 57.591 96.9862 58.1396 96.8261 58.6598C96.6661 59.18 96.3957 59.6596 96.0335 60.0658C95.6712 60.472 95.2256 60.7953 94.727 61.0137C94.2284 61.232 93.6886 61.3402 93.1444 61.3309V61.3309Z"
        fill={color}
      />
    </svg>
  );
};
