import * as React from 'react';
import InputUnstyled, {
  InputUnstyledProps,
  inputUnstyledClasses,
} from '@mui/base/InputUnstyled';
import {Search as SearchIcon} from '@mui/icons-material';
import {styled} from '@mui/system';

const StyledInputRoot = styled('div')(
  ({theme}) => `
  display: flex;
  font-weight: 500;
  width: 100%;
  border: 1px solid #CDD2D7;
  border-radius: 0.25rem;
  background: #F3F6F9;
  align-items: center;
  justify-content: center;

  &.${inputUnstyledClasses.focused} {
    outline: none;
  }
`,
);

const StyledInputElement = styled('input')(
  ({theme}) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: black;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 10px;
  outline: 0;
`,
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {components, ...other} = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
    />
  );
});

export default function SearchBar() {
  return <CustomInput id="search-bar" startAdornment={<SearchIcon />} />;
}
