import { ContainerSelect, Option } from "./style";

export const Select = ({ value, placeholder }: ISelectProps) => {
  return (
    <>
      <ContainerSelect w="20em" h="3.3em">
        {value ? (
          <Option selected>{placeholder}</Option>
        ) : (
          value.map((object: any) => {
            <Option key={object.id}>{object.name}</Option>;
          })
        )}
      </ContainerSelect>
    </>
  );
};
