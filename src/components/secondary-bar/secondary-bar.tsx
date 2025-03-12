import styled from "styled-components";
import { Button } from "../button/button";
import { ButtonSplit } from "../button-spit/button-split.tsx";
import { ButtonIA } from "../button-ia/button-ia.tsx";

const SecondaryBarContainerStyled = styled.div`
  grid-area: secondary-bar;
  padding-inline: 12px;
`;

const SecondaryBarStyled = styled.div`
  background-color: var(--surface-static-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  padding-inline: 0.5rem;
  height: 50%;
`;

const SecondaryBarExpandedStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50%;

  background-color: var(--surface-static-secondary);
`;

export const SecondaryBar = () => (
  <SecondaryBarContainerStyled>
    <SecondaryBarStyled>
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="success" />
      <ButtonIA />
      <ButtonSplit label="Context" />
    </SecondaryBarStyled>
    <SecondaryBarExpandedStyled />
  </SecondaryBarContainerStyled>
);
