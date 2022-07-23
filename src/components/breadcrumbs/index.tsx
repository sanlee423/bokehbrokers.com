import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {useRouter} from 'next/router';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';

const useStyles = makeStyles(theme => ({
  breadCrumb: {
    width: '100%',
    padding: '1%',
  },
  breadCrumbLink: {
    fontSize: '14px',
  },
}));

export default function Breadcrumb() {
  const classes = useStyles(campediaTheme);
  const {asPath} = useRouter();
  const splitArray = asPath.split('/');
  splitArray[0] = 'home';

  const generateLink = (asPath: string, link: string) => {
    const linkLength = link.length;
    const href = asPath.substring(0, asPath.indexOf(link) + linkLength);
    return href;
  };

  const capitalizeText = (link: string) => {
    return link.charAt(0).toUpperCase() + link.substring(1, link.length);
  };

  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs className={classes.breadCrumbLink} aria-label="breadcrumb">
        {splitArray &&
          splitArray.map((link, i) => {
            if (i === 0) {
              return (
                <Link
                  className={classes.breadCrumbLink}
                  key={link}
                  underline="hover"
                  color="inherit"
                  href="/">
                  Home
                </Link>
              );
            } else if (i === splitArray.length - 1) {
              return (
                <Link
                  className={classes.breadCrumbLink}
                  key={link}
                  underline="hover"
                  color="text.primary"
                  href={generateLink(asPath, link)}
                  aria-current="page">
                  {capitalizeText(link)}
                </Link>
              );
            } else {
              return (
                <Link
                  className={classes.breadCrumbLink}
                  key={link}
                  underline="hover"
                  color="inherit"
                  href={generateLink(asPath, link)}>
                  {capitalizeText(link)}
                </Link>
              );
            }
          })}
      </Breadcrumbs>
    </div>
  );
}
