import React from 'react';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: '#4a4848',
    height: '5vh',
  },
  footerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
    fontSize: '0.7rem',
    color: 'white',
    height: '100%',
  },
  spacer: {
    margin: '0 2%',
  },
}));

export const Footer: React.FC = () => {
  const {width} = useWindowSize();
  const classes = useStyles(campediaTheme);

  return (
    <footer className={classes.footer}>
      {width > 700 ? (
        <div className={classes.footerText}>
          <strong className="copyright">
            ©{new Date().getFullYear()} Sanlee LLC. All rights reserved.
          </strong>
          <p className={classes.spacer}>{' | '}</p>
          <Link href="/settings/terms">Terms of Use</Link>
          <p className={classes.spacer}>{' | '}</p>
          <Link href="/settings/privacy">Privacy Policy</Link>
        </div>
      ) : (
        <div className={classes.footerText}>
          <strong className="copyright">
            ©{new Date().getFullYear()} Sanlee LLC
          </strong>
        </div>
      )}
    </footer>
  );
};
