import {
  Main,
  KarenPic,
  TextHeader,
  SectionText,
  TextGeneral,
  TextGeneralLastChild,
} from "./style";

/* eslint-disable */
function Presentation() {
  return (
    <Main>
      <KarenPic src="karen.jpeg" alt="karen's pic" />
      <SectionText>
        <TextHeader>Hi, I'm Karen Bailey</TextHeader>
        <TextGeneral>
          <div>My happy place is backing and I love sharing it.</div>
          <div>Every celebration, big or small needs a special cake.</div>
        </TextGeneral>
        <TextGeneralLastChild>
          Indulge in my specialty: delicious Eastern European cakes
        </TextGeneralLastChild>
      </SectionText>
    </Main>
  );
}

export default Presentation;
