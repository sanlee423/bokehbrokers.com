import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: '8%',
    width: '100vw',
    background: '#4a4848',
    height: 'auto',
  },
  footerText: {
    fontSize: '0.7rem',
    margin: '2%',
    paddingLeft: '2%',
    color: 'white',
    height: '100%',
  },
}));

type Props = {
  children: React.FC[];
};

export const Footer: React.FC = () => {
  const classes = useStyles(cpTheme);
  return (
    <div className={classes.footer}>
      <div className={classes.footerText}>
        <strong className="copyright">
          ©{new Date().getFullYear()} Sanlee LLC. All rights reserved.
        </strong>
        <Link href="/settings/privacy"> | Terms of Use</Link>
        <Link href="/settings/privacy"> | Privacy Policy</Link>
      </div>
    </div>
  );
};
