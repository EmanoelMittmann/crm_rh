import React from 'react'

export const IconThreePoints = ({
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='4'
      height='16'
      viewBox='0 0 4 16'
      fill='none'
      cursor='pointer'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4 2C4 0.894063 3.10563 0 2 0C0.894375 0 0 0.894063 0 2C0 3.10594 0.894375 4 2 4C3.10563 4 4 3.10594 4 2ZM4 8C4 6.89406 3.10563 6 2 6C0.894375 6 0 6.89375 0 8C0 9.10625 0.894375 10 2 10C3.10563 10 4 9.10625 4 8ZM4 14C4 12.8941 3.10563 12 2 12C0.894375 12 0 12.8941 0 14C0 15.1059 0.894375 16 2 16C3.10563 16 4 15.1062 4 14Z'
        fill='#ACB4BA'
      />
    </svg>
  )
}
