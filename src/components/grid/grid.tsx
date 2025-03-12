import type * as React from "react";

import styled from "styled-components";

const GridStyled = styled.div`
  display: grid;
  height: 100%;
  row-gap: 12px;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 128px 1fr 16px;
  background-color: var(--surface-content-tertiary);
  grid-template-areas:
    "top-bar"
    "secondary-bar"
    "content"
    "status-bar";
`;

type GridProps = {
  children: React.ReactNode;
};

export const Grid = (props: GridProps) => {
  return <GridStyled>{props.children}</GridStyled>;
};
