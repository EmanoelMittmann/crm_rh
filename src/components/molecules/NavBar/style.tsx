import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 105%;
  height: 7em;
  background-color: #ffffff;
`;

export const Children = styled.div<{
  justify?: string;
  top?: string;
  w?: string;
  align: string;
}>`
  display: flex;
  width: ${(props) => props.w};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.top};
  justify-content: ${(props) => props.justify};

  @media screen and (max-width: 1650px) {
    width: calc(100% - 1em);
  }
`;

export const User = styled.div`
  width: 10em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
`;

export const To = styled.a`
  cursor: pointer;
`;
