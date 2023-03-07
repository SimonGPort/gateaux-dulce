import { Image, Wrapper, Text } from "./style";

function CategoriesGrid({ picture, text }) {
  return (
    <Wrapper>
      <Image src={picture} alt="category" />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default CategoriesGrid;
