import { useCallback, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Tag } from '@stardust-ds/react'

import { IconClose, IconUbistart } from 'components/atoms'
import Icon from 'components/atoms/Inputs/Icon'
import { FormProps } from 'components/organisms/Forms/Professional'

import { Container, TagContainer } from './style'
import { InputTagProps } from './types'

const InputTag = ({ value = [] }: InputTagProps) => {
  const { watch, setValue } = useFormContext<FormProps>()
  const [error, setError] = useState('')
  const handleDeleteTag = useCallback((label: string) => {
    let previous = watch('tools', [])
    setValue(
      'tools',
      previous.filter((item) => item !== label)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const Tags = useMemo(() => {
    return (
      <>
        {watch('tools', []).map((item) => (
          <Tag
            key={item + Math.random()}
            bgColor='#E9EBEE'
            labelColor='#3B454F'
            labelTypographyProps={{
              fontWeight: 500
            }}
            label={item}
            hasIconRight
            iconRight={<IconClose />}
            onClose={() => handleDeleteTag(item)}
          />
        ))}
      </>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('tools', [])])
  return (
    <>
      <Container>
        <TagContainer>
          {Tags}
          <input
            placeholder={
              value.length === 0 ? 'Digite as ferramentas' : ''
            }
            onKeyUp={(e) => {
              setError('')
              switch (e.key) {
                case 'Enter':
                  let previous = watch('tools', [])
                  if (previous.includes(e.currentTarget.value)) {
                    setError('Já existe essa ferramenta')
                    e.currentTarget.value = ''
                    return
                  }
                  setValue('tools', [
                    ...previous,
                    e.currentTarget.value
                  ])
                  e.currentTarget.value = ''
                  break
                default:
                  break
              }
            }}
          />
        </TagContainer>
      </Container>
      {error && (
        <p
          style={{
            color: 'rgb(255, 53, 65)',
            fontSize: '.8rem',
            fontWeight: '600',
            lineHeight: '21px',
            margin: '8px 0 0'
          }}
        >
          {error}
        </p>
      )}
    </>
  )
}

export default InputTag
