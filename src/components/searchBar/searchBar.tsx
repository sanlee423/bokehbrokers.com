import * as React from 'react';
import {styled} from '@mui/system';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox} from 'react-instantsearch-dom';

const ALGOLIA_BRANDS_INDEX = process.env.ALGOLIA_BRANDS_INDEX;
const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID ?? '',
  process.env.ALGOLIA_API_KEY ?? '',
);

export default function SearchBar() {
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
