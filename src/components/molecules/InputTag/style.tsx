import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border: 1px solid #acb4ba;
  border-radius: 5px;
  align-items: center;
  width: 100%;
`
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  flex: 1;

  & input {
    border: none;
    outline: none;
    flex: 1;
    padding: 8px;
  }
`

export const HideButton = styled.button`
  display: none;
`
