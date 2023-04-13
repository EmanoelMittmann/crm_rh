import React from 'react'

const IconLoginBottomBlue = ({
  width = '393',
  height = '225',
  color = 'black',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 393 225'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M255.67 26.5589C234.063 20.7494 217.13 -3.14771 195.123 0.959892C178.844 4.03297 169.416 21.1803 155.119 29.6239C125.952 46.854 83.2434 24.5376 56.9932 46.0064C34.2116 64.5748 41.6246 100.638 32.2714 128.399C24.1056 152.754 2.12835 172.201 0.406251 197.698C-1.27357 222.481 16.821 244.203 36.8273 258.805C56.8337 273.407 80.0802 284.016 97.0221 302.023C113.36 319.338 122.422 342.011 135.542 361.959C148.657 381.777 168.652 400.134 192.462 399.85C230.317 399.545 251.98 355.705 286.364 339.723C305.63 330.788 327.845 331.269 348.46 326.108C369.074 320.947 390.556 306.306 391.311 285.05C392.084 262.303 368.959 245.282 365.402 222.746C361.186 195.702 384.681 177.174 390.306 152.323C396.158 126.428 392.226 98.1436 378.433 75.3057C366.49 55.7068 347.573 40.7446 326.155 32.7279C302.052 23.7012 279.103 32.8247 255.67 26.5589Z'
        fill='#0D2551'
      />
    </svg>
  )
}

export default IconLoginBottomBlue
