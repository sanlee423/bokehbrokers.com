import {ImageList, ImageListItem} from '@mui/material';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import React from 'react';
import cpTheme from 'src/theme/cpTheme';

const useStyles = makeStyles(theme => ({
  brandContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    height: '20vh',
    width: '100%',
  },
  imageList: {
    height: '100%',
    padding: '5px',
  },
  imageListItem: {
    borderRadius: '0.5rem',
    cursor:'pointer',

    '&:hover': {
      filter: 'brightness(90%)',
      transition: '300ms',
      backgroundColor: '#f0f0f0',
    }
  },
}));

const brandList = [
  {
    src: `icons/brand/canon.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/canon.svg?w=20%&fit=crop&auto=format 2x`,
    id: 'abc',
    alt: 'Canon',
  },
  {
    src: `icons/brand/fujifilm.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/fujifilm.svg?w=20%&fit=crop&auto=format 2x`,
    id: 'def',
    alt: 'Fujifilm',
  },
  {
    src: `icons/brand/leica.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/leica.svg?w=20%&fit=crop&auto=format 2x`,
    id: 'ghi',
    alt: 'Leica',
  },
  {
    src: `icons/brand/nikon.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/nikon.svg?w=20%&fit=crop&auto=format 2x`,
    id: 'jkl',
    alt: 'Nikon',
  },
  {
    src: `icons/brand/pentax.svg?w=20%&fit=crop&auto=format`,
    srcSet: `icons/brand/pentax.svg?w=20%&fit=crop&auto=format 2x`,
    id: 'mno',
    alt: 'Pentax',
  },
];

export const BrandCard: React.FC = () => {
  const classes = useStyles(cpTheme);

  return (
    <div className={`${classes.brandContainer} container`}>
      <ImageList
        cols={5}
        gap={28}
        rowHeight={'auto'}
        className={classes.imageList}>
        {brandList.map(data => {
          return (
            <Link key={data.alt} href={`/brands/${data.id}`} passHref>
              <a>
                <ImageListItem
                  sx={{boxShadow: 2}}
                  className={classes.imageListItem}>
                  <img
                    src={data.src}
                    srcSet={data.srcSet}
                    alt={data.alt}
                    loading="lazy"
                  />
                </ImageListItem>
              </a>
            </Link>
          );
        })}
      </ImageList>
    </div>
  );
};
