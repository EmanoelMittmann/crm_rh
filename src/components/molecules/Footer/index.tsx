import React, { useState } from "react";
import { IconLeftArrow } from "../../atoms/Icons/IconLeftArrow";
import { IconRightArrow } from "../../atoms/Icons/IconRightArrow";
import { Container, Numbers, Pagination } from "./style";

export const Footer = () => {
    const [active, setActive] = useState<boolean>(false)
    return (
    <>
      <Container>
        <div className="left">
          <IconLeftArrow />
          Anterior
        </div>
        <Pagination>
          <Numbers isActive={false}>1</Numbers>
          <Numbers isActive={false}>2</Numbers>
          <Numbers isActive={false}>3</Numbers>
          <div className="threepoints">...</div>
          <Numbers isActive={false}>8</Numbers>
          <Numbers isActive={false}>9</Numbers>
          <Numbers isActive={false}>10</Numbers>
        </Pagination>
        <div className="right">
          Próximo
          <IconRightArrow />
        </div>
      </Container>
    </>
  );
};
