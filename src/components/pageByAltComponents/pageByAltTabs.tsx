import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Typography} from '@mui/material';
import {StyledTab, StyledTabs, TabPanel} from '../tabs';
import {ReadMore} from '../readMore';
import CircularPageLoader from '../pageComponents/circularPageLoader';
import PageByAltTable from './pageByAltTable';
import {CameraSpecs} from 'pages/api/cameras/[cameraAlt]';

const useStyles = makeStyles(theme => ({
  tabPanel: {
    '& > *': {
      margin: '2% 0',
    },
  },
}));

interface PageByAltTabsProps {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  description?: string;
  cameraSpecs?: CameraSpecs;
}

export default function PageByAltTabs({
  tabValue,
  handleTabChange,
  description,
  cameraSpecs,
}: PageByAltTabsProps) {
  const classes = useStyles(campediaTheme);

  return (
    <>
      <StyledTabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="product-tabs">
        <StyledTab
          theme={campediaTheme}
          label={'Product Description'}
          id={`simple-tab-0`}
          aria-controls={`simple-tabpanel-0`}
        />
        <StyledTab
          theme={campediaTheme}
          label={'Product Specifications'}
          id={`simple-tab-1`}
          aria-controls={`simple-tabpanel-1`}
        />
      </StyledTabs>
      {description ? (
        <div className={classes.tabPanel}>
          <TabPanel value={tabValue} index={0}>
            <ReadMore>
              <Typography variant={'body1'}>{description}</Typography>
            </ReadMore>
          </TabPanel>
        </div>
      ) : (
        <TabPanel key={`product-description`} value={tabValue} index={0}>
          <CircularPageLoader />
        </TabPanel>
      )}

      {cameraSpecs && (
        <PageByAltTable cameraSpecs={cameraSpecs} tabValue={tabValue} />
      )}
    </>
  );
}
