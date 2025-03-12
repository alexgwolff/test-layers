import styled, { css } from "styled-components";

import "./button.css";

const ButtonStyled = styled.div<ButtonProps>`
  @layer button;

  display: flex;
  height: 2.4rem;
  width: 6rem;
  border-radius: 0.4rem;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      color: var(--button-primary-foreground-color);
      background-color: var(--button-primary-background-color);
    `}

  ${({ variant }) =>
    variant === "danger" &&
    css`
      color: var(--button-danger-foreground-color);
      background-color: var(--button-danger-background-color);
    `}
    
  ${({ variant }) =>
    variant === "success" &&
    css`
      color: var(--button-success-foreground-color);
      background-color: var(--button-success-background-color);
    `};
`;

type ButtonProps = {
  variant: "primary" | "danger" | "success";
};

const BUTTON_DEFAULT_PROPS: ButtonProps = {
  variant: "primary",
} as const;

export const Button = (props: ButtonProps) => {
  const { variant } = { ...BUTTON_DEFAULT_PROPS, ...props };

  return (
    <ButtonStyled role="button" variant={variant}>
      {variant}
    </ButtonStyled>
  );
};
