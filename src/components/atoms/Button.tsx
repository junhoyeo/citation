import styled, { css } from 'styled-components';

type ButtonProps = {
  primary?: boolean,
};

export const Button = styled.button<ButtonProps>`
  ${({ primary = true }) => primary && css`
  `};
`;

export default Button;
