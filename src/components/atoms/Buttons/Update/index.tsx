import { ButtonHTMLAttributes } from 'react'

import { Button, ButtonProps } from '@stardust-ds/react'
import { theme } from 'styles'

import { ContainerButton } from '../style'

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  onSave?: () => void
  onCancel?: () => void
  saveButtonName?: string
  cancelButtonName?: string
  bottom?: string
}

const Update = ({
  onSave,
  onCancel,
  saveButtonName = 'Save',
  cancelButtonName = 'Cancel',
  bottom,
  ...props
}: Props) => {
  return (
    <ContainerButton bottom={bottom}>
      <Button
        type='submit'
        typographyProps={{ fontWeight: 'bold', type: 'p2' }}
        bgColor={theme.brand.color.primary.lighter}
        bWidth={10}
        bStyle='solid'
        style={{
          borderRadius: 25,
          color: 'black'
        }}
        onClick={onCancel}
        {...props}
      >
        {cancelButtonName}
      </Button>
      <Button
        typographyProps={{ fontWeight: 'bold', type: 'p2' }}
        bgColor={theme.brand.color.status.neutral1}
        bWidth={8}
        bStyle='solid'
        style={{
          borderRadius: 25,
          color: '#ffffff'
        }}
        onClick={onSave}
        {...props}
      >
        {saveButtonName}
      </Button>
    </ContainerButton>
  )
}

export default Update
