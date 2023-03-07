import CategorySquare from "../CategorySquare/CategorySquare";
import { Wrapper, Row } from "./style";

function CategoriesGrid() {
  return (
    <Wrapper>
      <Row>
        <CategorySquare
          picture={"gateauxEuropeens.jpeg"}
          text={"European cakes"}
        />
        <CategorySquare picture={"wedding.jpeg"} text={"Wedding"} />
        <CategorySquare picture={"birthday.jpeg"} text={"Birthday"} />
      </Row>
      <Row>
        <CategorySquare picture={"cupcakes.jpeg"} text={"Cupcakes"} />
        <CategorySquare picture={"salami.jpeg"} text={"Salami"} />
        <CategorySquare picture={"cakesCustom.jpeg"} text={"Custom cakes"} />
      </Row>
    </Wrapper>
  );
}

export default CategoriesGrid;
