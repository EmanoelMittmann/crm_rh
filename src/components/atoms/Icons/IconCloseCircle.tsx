import React from 'react'

export const IconCloseCircle = ({
  width = '24',
  height = '24',
  color = '#737D86 ',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-testid='multi-select-remove-item'
      {...props}
    >
      <path d="M14.3375 7.62516C13.9469 7.23454 13.3142 7.23454 12.9234 7.62516L11 9.58766L9.00421 7.62516C8.61358 7.23454 7.98087 7.23454 7.59004 7.62516C7.19921 8.01579 7.19942 8.6485 7.59004 9.03933L9.54962 10.9989L7.62504 12.9585C7.23442 13.3491 7.23442 13.9818 7.62504 14.3727C8.01558 14.7632 8.64837 14.7635 9.03921 14.3727L11 12.4127L12.9596 14.3722C13.3502 14.7628 13.983 14.7631 14.3738 14.3722C14.7644 13.9816 14.7644 13.3489 14.3738 12.9581L12.4142 10.9985L14.3738 9.03891C14.7625 8.65016 14.7625 8.01683 14.3375 7.62516ZM11 0.333496C5.10837 0.333496 0.333374 5.1085 0.333374 11.0002C0.333374 16.8918 5.10837 21.6668 11 21.6668C16.8917 21.6668 21.6667 16.8918 21.6667 11.0002C21.6667 5.1085 16.8917 0.333496 11 0.333496ZM11 19.6668C6.22087 19.6668 2.33337 15.7789 2.33337 11.0002C2.33337 6.22141 6.22087 2.3335 11 2.3335C15.7792 2.3335 19.6667 6.22141 19.6667 11.0002C19.6667 15.7789 15.7792 19.6668 11 19.6668Z" 
      fill={color} />
    </svg>
  )
}



