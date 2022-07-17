import React from 'react';
import {makeStyles} from '@mui/styles';
import Link from 'next/link';
import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';

const useStyles = makeStyles(theme => ({
  footer: {
    height: '5vh',
    width: '100%',
    background: '#4a4848',
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
  const {height, width} = useWindowSize();
  const classes = useStyles(campediaTheme);

  React.useEffect(() => {
    if (document !== null) {
      const footerContainer = document.getElementById('footer-container');

      if (footerContainer) {
        footerContainer.style.width = `${width}px`;
        footerContainer.style.height = `${height * 0.05}px`;
      }
    }
  }, [width, height]);

  return (
    <footer id={'footer-container'} className={classes.footer}>
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
