import styled from 'styled-components'

export const Main = styled.div<{ w?: string }>`
  max-width: ${({ w }) => w};
  min-width: ${({ w }) => w};
  border: 1px solid #ccd1d6;
  border-radius: 8px;
  height: auto;
  padding: 1em;
`

export const Row = styled.div<{
  align?: string
  gap?: string
  content?: string
  bottom?: string
}>`
  width: 100%;
  display: flex;
  padding-bottom: ${({ bottom }) => bottom};
  flex-direction: row;
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  justify-content: ${({ content }) => content};
`

export const Columns = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
`
export const MainDetails = styled.div`
  width: 100%;
  border: 1px solid #ccd1d6;
  border-radius: 8px;
  height: auto;
  padding: 24px;
`
