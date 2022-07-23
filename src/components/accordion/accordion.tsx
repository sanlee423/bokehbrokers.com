import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {campediaTheme} from '@/utils/campediaTheme';
import {
  MuiAccordion,
  MuiAccordionDetails,
  MuiAccordionSummary,
} from './muiAccordion';

const useStyles = makeStyles(theme => ({
  accordionHeading: {
    fontWeight: 800,
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  accordion: {
    '.MuiPaper-root.MuiAccordion-root': {
      boxShadow: 'none',
    },
    transition: '100ms ease',
  },
}));

type AccordionProps = {
  title: string;
  text: string;
  defaultExpanded: boolean;
};

const CollapsibleText: React.FC<AccordionProps> = ({
  title,
  text,
  children,
  defaultExpanded = true,
}) => {
  const classes = useStyles(campediaTheme);

  return (
    <MuiAccordion
      className={classes.accordion}
      defaultExpanded={defaultExpanded}>
      <MuiAccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        aria-controls={`${title}-control`}
        id={`${title}-id`}>
        <Typography className={classes.accordionHeading} variant="h6">
          {title}
        </Typography>
      </MuiAccordionSummary>
      {children ? (
        <MuiAccordionDetails>{children}</MuiAccordionDetails>
      ) : (
        <MuiAccordionDetails>
          <Typography>{text}</Typography>
        </MuiAccordionDetails>
      )}
    </MuiAccordion>
  );
};

export default CollapsibleText;
