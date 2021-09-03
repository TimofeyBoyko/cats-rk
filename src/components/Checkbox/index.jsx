import React from 'react';
import { StyledCheckboxContainer, StyledInput, StyledLabel } from './styles';

// returns a memoized component that will only be modified when props.disabled or props.checked was changed
export const Checkbox = React.memo((props) => {
  return (
    <StyledCheckboxContainer>
      <StyledInput id={props.id} {...props} />
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
    </StyledCheckboxContainer>
  );
});
