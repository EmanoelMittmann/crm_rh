import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`

export const Children = styled.div<{
  justify?: string
  p?: string
  w?: string
  align: string
}>`
  display: flex;
  width: ${(props) => props.w};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  @media screen and (max-width: 1650px) {
    width: calc(100% - 1em);
  }
`

export const User = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
`
