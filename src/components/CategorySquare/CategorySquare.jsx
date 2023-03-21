import { Image, Wrapper, Text } from "./style";

function CategorySquare({ picture, text }) {
  return (
    <Wrapper>
      <Image src={picture} alt="category" />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default CategorySquare;
