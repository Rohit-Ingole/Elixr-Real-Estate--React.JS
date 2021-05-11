import Button from "../Button";

import * as style from "./styles";

function InfoSection({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) {
  return (
    <style.Section>
      <style.Container>
        <style.ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>

          <Button to="/homes" content={buttonLabel} primary={true} />
        </style.ColumnLeft>

        <style.ColumnRight reverse={reverse}>
          <img src={image} alt="casa" />
        </style.ColumnRight>
      </style.Container>
    </style.Section>
  );
}

export default InfoSection;
