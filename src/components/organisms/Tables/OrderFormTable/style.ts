import styled from 'styled-components'

export const ScrollContainer = styled.ul`
  overflow-y: scroll;
  height: 320px;
  width: 100%;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #ccc;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid #ddd;
    background-color: #ddd;
  }
`
export const ContainerText = styled.div`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding-left: ${(props) => props.title};
  color: ${(props) => props.color};
`

export const ContainerOnPrice = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  white-space: nowrap;
  align-items: flex-start;
  margin-top: -0.5em;
  margin-left: 1em;

  .price {
    display: flex;
    align-items: center;
  }
`

export const CompaniesField = styled.div`
  display: flex;
  width: 300px;
  padding: 0 0 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.p`
  width: 50px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Some = styled.span`
  width: 40%;
  padding: 0em 0.5em 0 0em;
  display: flex;
  align-items: center;
  justify-content: end;
  font-weight: 500;
`
