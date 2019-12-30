import styled, { css } from 'styled-components';

type ButtonProps = {
  primary?: boolean,
};

export const Button = styled.button<ButtonProps>`
  color: white;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-weight: bold;
  width: 100%;
  background-color: #6C14FF;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #610eeb;
  }

  &:not(:first-child) {
    margin-top: 0.5rem;
  }

  ${({ primary = true }) => !primary && css`
    background-color: white;
    border: 2px solid #6C14FF;
    color: #6C14FF;

    &:hover,
    &:focus {
      background-color: white;
      border: 2px solid #610eeb;
      color: #610eeb;
    }
  `};
`;

export default Button;
