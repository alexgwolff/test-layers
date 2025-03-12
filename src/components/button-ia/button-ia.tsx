import styled from "styled-components";
import { Button } from "../button/button.tsx";

import css from "./button-ia.css?inline";

const ButtonIAContainer = styled.div`
  ${css}
`;

export const ButtonIA = () => {
  return (
    <ButtonIAContainer>
      <Button variant="primary" />
    </ButtonIAContainer>
  );
};
