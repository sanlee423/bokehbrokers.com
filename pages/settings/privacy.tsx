import {campediaTheme} from '@/utils/campediaTheme';
import {Divider, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import Head from 'next/head';
import React from 'react';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    height: '100%',
    margin: '4% 20%',
  },
  bulletList: {
    margin: '0 1%',
  },
}));

const PrivacyPolicy: React.FC = () => {
  const classes = useStyles(campediaTheme);
  return (
    <>
      <Head>
        <title>Bokeh Broker | Privacy Policy</title>
      </Head>
      <div className={classes.pageContainer}>
        <Typography variant="h4">Privacy Policy</Typography>
        <Divider />
        <br />
        <Typography variant="body2">
          We collect your personal information in order to provide and
          continually improve our products and services. Here are the types of
          personal information we collect:
        </Typography>
        <ul className={classes.bulletList}>
          <li>
            <Typography variant="body2">
              • Information You Give Us: We receive and store any information
              you provide. You can choose not to provide certain information,
              but then you might not be able to take advantage of many of our
              services.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              • Automatic Information: We automatically collect and store
              certain types of information about your use of Campedia, including
              information about your interaction with products, content and
              services available through Campedia. Like many websites, we use
              cookies and other unique identifiers, and we obtain certain types
              of information when your web browser or device accesses Campedia
              Services and other content served by or on behalf of Campedia on
              other websites.
            </Typography>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PrivacyPolicy;
