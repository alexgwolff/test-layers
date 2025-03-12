import styled from "styled-components";

const ButtonSplitContainerStyled = styled.div`
  background-color: var(--color-transparent);
  display: flex;
  gap: 2px;
`;

const ButtonSplitStyled = styled.div`
  display: flex;
  height: 2.4rem;
  width: 6rem;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  justify-content: center;
  align-items: center;

  color: var(--foreground-brand-primary);
  background-color: var(--background-brand-primary);
`;

const ButtonSplitArrowStyled = styled.div`
  display: flex;
  height: 2.4rem;
  width: 2.4rem;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  justify-content: center;
  align-items: center;

  color: var(--foreground-brand-primary);
  background-color: var(--background-brand-primary);

  &:hover {
    background-color: var(--background-brand-secondary);
  }
`;

type ButtonSplitProps = {
  label?: string;
};

const BUTTON_DEFAULT_PROPS: ButtonSplitProps = {
  label: "Text",
} as const;

export const ButtonSplit = (props: ButtonSplitProps) => {
  const { label } = { ...BUTTON_DEFAULT_PROPS, ...props };

  return (
    <ButtonSplitContainerStyled>
      <ButtonSplitStyled role="button">{label}</ButtonSplitStyled>
      <ButtonSplitArrowStyled role="button">
        <svg viewBox="0 0 24 24">
          <path d="m7 8 5 5 5-5 1.5 1.5L12 16 5.5 9.5 7 8Z" />
        </svg>
      </ButtonSplitArrowStyled>
    </ButtonSplitContainerStyled>
  );
};
