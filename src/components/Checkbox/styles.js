import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const StyledInput = styled.input`
  margin: 0 10px;
  opacity: 0.7;
  &:hover,
  &:checked,
  &:checked + ${StyledLabel} {
    opacity: 1;
  }
  &:disabled,
  &:disabled + ${StyledLabel} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
