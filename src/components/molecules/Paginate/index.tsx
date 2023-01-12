import { useState } from "react";
import { Container, Main, PagesNumber, Row } from "./style";
import { IconLeftArrow } from "../../atoms/Icons/IconLeftArrow";
import { IconRightArrow } from "../../atoms/Icons/IconRightArrow";

export const Paginate = () => {
  const [current_page, setCurrent_page] = useState<number>(1);
  const totalpage: number = 16;
  const numberPages: number[] = Array.from(
    Array(totalpage).keys(),
    (x) => x+1
  );

  const copyTotalpages: number[] = [...numberPages];

  const [firstCurrent, setfirstCurrent] = useState<number[]>(
    numberPages.splice(0, 3)
  );
  const [lastCurrent, setLastCurrent] = useState<number[]>(
    numberPages.splice(numberPages.length - 3, numberPages.length)
  );

  function nextPage(number: number) {
    if (firstCurrent[2] !== lastCurrent[0] - 1) {
      copyTotalpages.shift();
      setfirstCurrent(copyTotalpages.splice(number - 1, 3));
      setCurrent_page((prev) => prev + 1);
    } else if (
      firstCurrent[2] === lastCurrent[0] - 1 &&
      lastCurrent[2] > current_page
    ) {
      setCurrent_page((prev) => prev + 1);
    }
  }

  function prevPage(number: number) {
    if (firstCurrent[0] !== 1) {
      setfirstCurrent(copyTotalpages.splice(number - 4, 3));
    }
    if (1 < current_page) {
      setCurrent_page((prev) => prev - 1);
    }
  }

  return (
    <Main>
      <Container
        onClick={() => {
          prevPage(firstCurrent[2]);
        }}
      >
        <IconLeftArrow />
        Anterior
      </Container>
      <Row>
        {firstCurrent.map((page, index) => (
          <PagesNumber
            key={index}
            Active={page === current_page}
            onClick={() => {
              setCurrent_page(page)
            }}
          >
            {page}
          </PagesNumber>
        ))}
        ...
        {lastCurrent.map((page,index) => (
          <PagesNumber
            key={index}
            Active={page === current_page}
            onClick={() =>  setCurrent_page(page)}
          >
            {page}
          </PagesNumber>
        ))}
      </Row>
      <Container
        onClick={() => {
          nextPage(firstCurrent[0]);
        }}
      >
        Próximo
        <IconRightArrow />
      </Container>
    </Main>
  );
};
