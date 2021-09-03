import React from 'react';

import { StyledButton } from './styles';

// returns a memoized component that will only be modified when props.disabled was changed
export const Button = React.memo((props) => {
  return <StyledButton {...props} />;
});
