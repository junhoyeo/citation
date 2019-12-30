import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  transition: border-color 0.2s ease-out;
  line-height: 1.5;
  box-sizing: border-box;

  &:focus {
    border-color: #610eeb;
  }

  &::placeholder {
    color: #cbcfd4;
  }
`;

export default Input;
