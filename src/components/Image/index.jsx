import React from 'react';
import { StyledImg } from './styles';

// returns a memoized component that will only be modified when props.src was changed
export const Image = React.memo((props) => {
  return <StyledImg {...props} />;
});
