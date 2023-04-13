import type { ReactNode } from 'react'

interface Props {
  show: boolean
  children: ReactNode
}

export const HideBox = ({ show, children }: Props) => {
  return (
    <div style={{ display: 'flex', flex: 0.1 }}>
      {show && children}
    </div>
  )
}
