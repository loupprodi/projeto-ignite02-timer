import styled, { css } from "styled-components";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "neutral";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
  neutral: "grey",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}/* .primary {
    background: purple;
  }

  .secondary {
    background: orange;
  }

  .danger {
    background: red;
  }

  .success {
    background: green;
  } */
`;
