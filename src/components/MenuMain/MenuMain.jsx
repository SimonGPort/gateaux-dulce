import {
  Main,
  KarenPic,
  TextHeader,
  SectionText,
  TextGeneral,
  TextGeneralLastChild,
} from "./style";

/* eslint-disable */
function MenuMain() {
  return (
    <Main>
      <KarenPic src="gateau-chocolat.jpeg" alt="karen's pic" />
      <SectionText>
        <TextHeader>Menu</TextHeader>
        <TextGeneral>
          <div>
            From classic flavors to unique twists, each bite will take your
            taste buds on a journey of pure delight.
          </div>
        </TextGeneral>
        <TextGeneralLastChild>
          Indulge in a world of delectable sweetness with our heavenly selection
          of cakes!
        </TextGeneralLastChild>
      </SectionText>
    </Main>
  );
}

export default MenuMain;
