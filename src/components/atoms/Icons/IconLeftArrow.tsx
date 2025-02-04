import type { SVGProps } from 'react'

export const IconLeftArrow = (props: SVGProps<SVGPathElement>) => {
  return (
    <svg
      width='17'
      height='14'
      viewBox='0 0 17 14'
      fill='none'
      cursor='pointer'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.40901 13.621L1.12307 7.62083C0.953424 7.459 0.857421 7.23464 0.857421 7.00027C0.857421 6.76591 0.953424 6.54154 1.12307 6.37971L7.40901 0.379501C7.75163 0.0535965 8.29408 0.0658826 8.62109 0.408502C8.9481 0.7478 8.93585 1.29246 8.59209 1.62062L3.85378 6.1431L16.0002 6.1431C16.4735 6.1431 16.8574 6.52704 16.8574 7.00027C16.8574 7.4735 16.4735 7.85745 16.0002 7.85745L3.85378 7.85745L8.59205 12.3799C8.93582 12.7069 8.9481 13.2516 8.62109 13.592C8.29408 13.9347 7.75163 13.9469 7.40901 13.621Z'
        fill={props.fill || '#5A646E'}
        {...props}
      />
    </svg>
  )
}
