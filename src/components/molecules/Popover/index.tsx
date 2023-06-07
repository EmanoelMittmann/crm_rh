import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'

import { IconThreePoints } from 'components/atoms'

import { Overlay, ContainerModal, Options } from './style'
import type { PopoverProps } from './types'

const Modal = forwardRef<
  PopoverProps['Imperative'],
  PopoverProps['Data']
>(({ options }, ref) => {
  const [open, setOpen] = useState(false)

  function onOpen() {
    setOpen(true)
  }
  function onClose() {
    setOpen(false)
  }

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose
  }))

  if (!open) return null

  return (
    <ContainerModal>
      <div className='options'>
        {options.map(({ label, callback }) => (
          <Options onClick={callback} key={label}>
            {label}
          </Options>
        ))}
      </div>
    </ContainerModal>
  )
})

export const Popover = (props: PopoverProps['Data']) => {
  const modalRef = useRef<PopoverProps['Imperative']>(null)

  return (
    <Overlay onMouseLeave={() => modalRef.current?.onClose()}>
      <div
        className='children'
        onClick={() => modalRef.current?.onOpen()}
      >
        <IconThreePoints />
      </div>
      <Modal ref={modalRef} {...props} />
    </Overlay>
  )
}
