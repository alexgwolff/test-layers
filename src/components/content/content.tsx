import styled from "styled-components";

const ContentStyled = styled.div`
  display: grid;

  grid-area: content;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  padding-inline: 12px;

  background-color: var(--surface-content-secondary);
  background-clip: content-box;
`;

type ContentProps = {
  children?: React.ReactNode;
};

export const Content = (props: ContentProps) => {
  const { children } = props;

  return <ContentStyled>{children}</ContentStyled>;
};
