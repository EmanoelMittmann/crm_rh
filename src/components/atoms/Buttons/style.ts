import styled from 'styled-components'

export const ContainerButton = styled.div<{ bottom?: string }>`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '3em')};
  justify-content: space-between;
  flex-direction: row;
`
