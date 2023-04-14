export const IconBottomVerticalArrow = ({
  width = '12',
  height = '8',
  color = '#5A646E',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.1794 0H1.80535C0.204652 0 -0.607149 1.94389 0.533202 3.07523L4.73489 7.28068C5.43442 7.98509 6.57966 7.98509 7.28369 7.28068L11.4891 3.07523C12.5826 1.94502 11.8166 0 10.1794 0ZM5.974 6.00778L1.80084 1.80233H10.1794L5.974 6.00778Z'
        fill={color}
      />
    </svg>
  )
}
