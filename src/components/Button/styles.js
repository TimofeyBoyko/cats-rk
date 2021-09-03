import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  line-height: 30px;
  font-size: 20px;
  background-color: #bbbbff;
  cursor: pointer;
  &:not(:disabled):hover {
    box-shadow: 0 2px 5px #ccccff;
    background-color: #9999ff;
  }
  &:disabled {
    background-color: #ddddff;
    cursor: not-allowed;
  }
`;
