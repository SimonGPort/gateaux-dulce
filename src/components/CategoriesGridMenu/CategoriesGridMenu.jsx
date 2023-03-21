import CategorySquare from "../CategorySquare/CategorySquare";
import { Wrapper, Row } from "./style";

function CategoriesGridMenu() {
  return (
    <Wrapper>
      <Row>
        <CategorySquare picture={"gateauxEuropeens.jpeg"} text={"Lamaita"} />
        <CategorySquare picture={"wedding.jpeg"} text={"Davie cake"} />
        <CategorySquare picture={"birthday.jpeg"} text={"Mirela (apple)"} />
      </Row>
      <Row>
        <CategorySquare picture={"cupcakes.jpeg"} text={"Cozonac"} />
        <CategorySquare picture={"salami.jpeg"} text={"Galuste capnine"} />
        <CategorySquare
          picture={"cakesCustom.jpeg"}
          text={"Citon - noisette"}
        />
      </Row>
      <Row>
        <CategorySquare picture={"cupcakes.jpeg"} text={"Dobostorta"} />
        <CategorySquare picture={"salami.jpeg"} text={"Zserbo"} />
        <CategorySquare picture={"cakesCustom.jpeg"} text={"Cherry pite"} />
      </Row>
      <Row>
        <CategorySquare
          picture={"cupcakes.jpeg"}
          text={"Prajitura cu visine (or plums)"}
        />
        <CategorySquare picture={"salami.jpeg"} text={"Plum - coudamom cake"} />
        <CategorySquare picture={"cakesCustom.jpeg"} text={"Black forest"} />
      </Row>
    </Wrapper>
  );
}

export default CategoriesGridMenu;
