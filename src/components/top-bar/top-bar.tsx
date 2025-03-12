import styled from "styled-components";

const TopBarStyled = styled.div`
  grid-area: top-bar;

  background-color: var(--surface-brand-primary);
`;

export const TopBar = () => <TopBarStyled></TopBarStyled>;
