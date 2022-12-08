export const IconNotebookBase = ({
  width = "91",
  height = "6",
  color = "#0066FF",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 91 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M86.6135 0.947656H4.37632C3.24408 0.947648 2.15797 1.39631 1.35586 2.19543C0.553747 2.99455 0.101027 4.07896 0.0968018 5.21119H90.941C90.9389 4.64649 90.8251 4.08779 90.6061 3.56728C90.3871 3.04676 90.0672 2.5747 89.665 2.17837C89.2627 1.78205 88.786 1.46926 88.2623 1.25803C87.7386 1.04679 87.1782 0.941331 86.6135 0.947656Z"
        fill={color}
      />
    </svg>
  );
};
