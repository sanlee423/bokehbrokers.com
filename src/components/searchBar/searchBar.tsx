import * as React from 'react';
import InputUnstyled, {
  InputUnstyledProps,
  inputUnstyledClasses,
} from '@mui/base/InputUnstyled';
import {styled} from '@mui/system';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchServerState,
  SearchBox,
} from 'react-instantsearch-hooks-web';

const ALGOLIA_BRANDS_INDEX = process.env.ALGOLIA_BRANDS_INDEX;
const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID ?? '',
  process.env.ALGOLIA_API_KEY ?? '',
);

const StyledInputRoot = styled('div')(
  ({theme}) => `
  display: flex;
  font-weight: 500;
  width: 100%;
  height: 90%;
  border: 1px solid rgb(86, 94, 96);
  border-radius: 0.25rem;
  background: white;
  align-items: center;
  justify-content: center;
  align-items: center;

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
  color: #2C3639;
  flex-grow: 1;
  color: black;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 0px 2px;
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

export default function SearchBar({
  serverState,
  url,
}: {
  serverState?: InstantSearchServerState;
  url: string;
}) {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={ALGOLIA_BRANDS_INDEX ?? ''}>
        <SearchBox />
      </InstantSearch>
    </>
  );
}
