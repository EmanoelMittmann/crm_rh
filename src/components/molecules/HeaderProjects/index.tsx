
import { IconArrowsPosition } from "../../atoms/Icons/IconArrowsPosition";
import InputIconPosition from "../../atoms/InputIconPosition";
import { Column, ColumnText, Container } from "./style";

const HeaderProjects = () => {
  return (
    <>
      <Container>
        <Column width="28%" left="1em">
          <ColumnText>Projeto</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width="25%">
          <ColumnText>Tipo</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width="25%">
          <ColumnText>Iníco</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
        <Column width="15%">
          <ColumnText>Status</ColumnText>
          <InputIconPosition Icon={<IconArrowsPosition />} />
        </Column>
      </Container>
    </>
  );
};

export default HeaderProjects;
