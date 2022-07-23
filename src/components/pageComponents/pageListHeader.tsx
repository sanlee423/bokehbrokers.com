import React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {toggleList} from './pageList';
import Breadcrumb from '../breadcrumbs';
import useWindowSize from '@/utils/windowDimensions';
import SearchBar from '../searchBar/searchBar';
import BackButton from './backButton';
import MobileFilterButton from './mobileFilterButton';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'center',
    height: '7%',
  },
}));

interface PageListProps {
  alignmentState: React.Dispatch<React.SetStateAction<toggleList>>;
}

export default function PageListHeader() {
  const classes = useStyles(campediaTheme);
  const {width} = useWindowSize();

  return (
    <>
      <div className={classes.pageHeader}>
        {width < 700 && <BackButton />}
        <div className={'searchbar-container'}>
          <SearchBar />
        </div>
        {width < 700 && <MobileFilterButton />}
      </div>

      <Divider />
    </>
  );
}
