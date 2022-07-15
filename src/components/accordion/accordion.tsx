import React from 'react';
import {makeStyles, styled} from '@mui/styles';

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {campediaTheme} from '@/utils/campediaTheme';

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

const MuiAccordion = styled((props: any) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const MuiAccordionSummary = styled((props: any) => (
  <AccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(({theme}) => ({
  flexDirection: 'row',
  padding: '0',
  '& .MuiAccordionSummary-content': {},
}));

const MuiAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '1% 1% 1% 1%',
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
