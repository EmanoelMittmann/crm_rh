import styled from 'styled-components'
import { theme } from 'styles'

import { TemplateProps } from '../types'

export const ScrollContainer = styled.ul`
  overflow-y: scroll;
  height: 820px;
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
  padding-left: 3.5px;
`

export const ContainerOnPrice = styled.div`
  display: flex;
  width: 700px;
  height: 95px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  margin-left: 1em;

  .price {
    display: flex;
    align-items: center;
  }
`

export const CompaniesField = styled.div`
  display: flex;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5em;
`
export const Text = styled.p`
  width: 150px;
  padding-left: ${(props) => props.title};
  font-weight: 400;
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Some = styled.span`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 0.8em;
  font-weight: 550;
`
export const ContainerShelf = styled.div<TemplateProps>`
  width: 100%;
  min-height: 4rem;
  display: grid;
  align-items: center;
  padding: 0px 22px;
  border: 1px solid #ccd1d6;
  grid-template-columns: ${({ template }) => template};
  gap: 1rem;
  color: ${theme.neutrals.gray7};
  overflow-x: auto;

  :last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
