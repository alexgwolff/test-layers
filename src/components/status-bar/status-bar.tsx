import styled from "styled-components";

const StatusBarStyled = styled.div`
  grid-area: status-bar;
  display: flex;
  justify-content: center;

  background-color: var(--surface-static-primary);
`;

export const StatusBar = () => <StatusBarStyled> Status bar</StatusBarStyled>;
