import React from 'react';
import PageTitle from '@/components/header/pageTitle';
import {makeStyles, styled} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {
  alpha,
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  InputBase,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Highlight,
  Pagination,
  Configure,
  RefinementList,
  connectSearchBox,
  RefinementItem,
} from 'react-instantsearch-dom';
import BackButton from '@/components/pageComponents/backButton';
import Link from 'next/link';
import SquareImage from '@/utils/squareImage';
import {FilterAlt as FilterAltIcon, SearchOutlined} from '@mui/icons-material';
import {Global} from '@emotion/react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {StyledBox} from '@/components/pageComponents/swipeableEdge';
import {useRouter} from 'next/router';
import {orderBy} from 'lodash';

const ALGOLIA_BRANDS_INDEX = process.env.ALGOLIA_BRANDS_INDEX;
const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID ?? '',
  process.env.ALGOLIA_API_KEY ?? '',
);

const useStyles = makeStyles(theme => ({
  pageContainer: {},
  pageHeader: {
    // border: '1px solid green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
    height: '7%',
    width: '100%',
    margin: '1%',

    '& > *': {
      margin: 'auto',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  filterContainer: {
    // border: '1px solid red',
    width: '20%',
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
  },
  filterBy: {
    width: '100%',
    padding: '5%',
    border: '0.02px solid #ededed',
    borderRadius: '0.25rem',
    whiteSpace: 'nowrap',
    boxShadow:
      '0 5px 7px -1px rgb(0 0 0 / 0.1), 0 2px 3px -2px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
  },
  mobileFilterBy: {
    padding: '0.5%',

    '& > *': {
      margin: '2% 0',
    },
  },
  paginationContainer: {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50px',
  },
  productListContainer: {
    // border: '1px solid blue',
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    verticalAlign: 'center',

    '@media (max-width: 700px)': {
      width: '100%',
    },
  },
  productContainer: {
    width: '98%',
    height: '8.0rem',
    margin: '1%',
    border: '0.02px solid #ededed',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow:
      '0 5px 7px -1px rgb(0 0 0 / 0.1), 0 2px 3px -2px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
  },
  productLink: {
    height: '100%',
    width: '100%',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  productIcon: {
    width: '8.0rem',
    height: '8.0rem',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mobileFilterContainer: {
    padding: '4px',
  },
}));

const Brands: React.FC = () => {
  const router = useRouter();
  const {width} = useWindowSize();
  const classes = useStyles(campediaTheme);

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Search = styled('div')(({theme}: {theme: Theme}) => ({
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '0.25rem',
    border: '1px solid black',
    backgroundColor: alpha('#fff', 0.15),
  }));

  const SearchIconWrapper = styled('div')(({theme}: {theme: Theme}) => ({
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    marginTop: '4px',
  }));

  interface StyledInputProps {
    currentRefinement: string;
    placeholder: string;
    refine: (e: string) => void;
  }

  const StyledInputBase = styled((props: StyledInputProps) => (
    <InputBase
      type="search"
      value={props.currentRefinement}
      aria-label={'search'}
      onChange={event => props.refine(event.currentTarget.value)}
    />
  ))(({theme}: {theme: Theme}) => ({
    color: theme.palette.primary.main,
    '& .MuiInputBase-input': {
      paddingLeft: '3rem',
      width: '100%',
    },
  }));

  const SearchBox = ({
    currentRefinement,
    refine,
  }: {
    currentRefinement: string;
    refine: (e: string) => void;
  }) => (
    <Search theme={campediaTheme}>
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        currentRefinement={currentRefinement}
        refine={refine}
      />
    </Search>
  );

  const CustomSearchBox = connectSearchBox(SearchBox);

  return (
    <>
      <PageTitle />
      <div className={classes.pageContainer}>
        <InstantSearch
          searchClient={searchClient}
          indexName={ALGOLIA_BRANDS_INDEX ?? ''}>
          <Configure hitsPerPage={40} />
          <div className={classes.pageHeader}>
            {width < 700 && <BackButton />}
            <CustomSearchBox />
            {width < 700 && (
              <div className={classes.mobileFilterContainer}>
                <Tooltip title="Select Options" arrow>
                  <IconButton
                    onClick={handleClick}
                    disableRipple={true}
                    aria-controls={open ? 'select-options-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>
                    <FilterAltIcon
                      style={{fill: campediaTheme.palette.primary.main}}
                    />
                  </IconButton>
                </Tooltip>
                <Global
                  styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                      height: `calc(80% - 56px)`,
                      overflow: 'visible',
                    },
                  }}
                />
                <SwipeableDrawer
                  anchor="bottom"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleClick}
                  swipeAreaWidth={56}
                  disableSwipeToOpen={true}
                  variant="temporary"
                  ModalProps={{
                    keepMounted: true,
                  }}>
                  <StyledBox
                    sx={{
                      position: 'absolute',
                      top: -56,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      visibility: 'visible',
                      right: 0,
                      left: 0,
                      display: open ? 'flex' : 'none',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                    theme={campediaTheme}>
                    <Button
                      size="medium"
                      variant="text"
                      onClick={handleClose}
                      disableRipple
                      sx={{
                        '&:hover': {
                          backgroundColor: '#fff',
                        },
                        p: 2,
                        color: campediaTheme.palette.primary.main,
                        textTransform: 'none',
                      }}>
                      Close
                    </Button>
                  </StyledBox>
                  <Divider />
                  <StyledBox
                    sx={{
                      px: 2,
                      pb: 2,
                      height: '100%',
                      overflow: 'auto',
                    }}
                    theme={campediaTheme}>
                    <div className={classes.mobileFilterBy}>
                      <Typography>Manufacturer Type</Typography>
                      <RefinementList
                        attribute={'Manufacturer Type'}
                        transformItems={(
                          items: Array<RefinementItem<string>>,
                        ) => orderBy(items, 'label', 'asc')}
                      />
                    </div>
                    <Divider />
                  </StyledBox>
                </SwipeableDrawer>
              </div>
            )}
          </div>

          <div className={classes.contentContainer}>
            {width > 700 && (
              <div className={classes.filterContainer}>
                <div className={classes.filterBy}>
                  <Typography>Manufacturer Type</Typography>
                  <RefinementList
                    attribute={'Manufacturer Type'}
                    transformItems={(items: Array<RefinementItem<string>>) =>
                      orderBy(items, 'label', 'asc')
                    }
                  />
                </div>
              </div>
            )}
            <div className={classes.productListContainer}>
              <Hits hitComponent={Hit} />
            </div>
          </div>
          <div className={classes.paginationContainer}>
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

function Hit({hit}: {hit: any}) {
  const classes = useStyles(campediaTheme);
  return (
    <div key={hit.alt} className={classes.productContainer}>
      <Link href={`/brands/${hit.alt}`} passHref>
        <a className={classes.productLink}>
          <Icon className={classes.productIcon}>
            <SquareImage alt={hit.alt} type={'brands'} />
          </Icon>
          <Typography variant="body1" noWrap>
            <Highlight attribute="name" hit={hit} />
          </Typography>
        </a>
      </Link>
    </div>
  );
}

export default Brands;
