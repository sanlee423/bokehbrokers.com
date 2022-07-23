import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import {styled} from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MuiAccordion = styled((props: any) => (
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

export const MuiAccordionSummary = styled((props: any) => (
  <AccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(({theme}) => ({
  flexDirection: 'row',
  padding: '0',
  '& .MuiAccordionSummary-content': {},
}));

export const MuiAccordionDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '1% 1% 1% 1%',
}));
