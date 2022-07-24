import Tabs from '@mui/material/Tabs';
import {Theme} from '@mui/material';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const StyledTabs = styled(Tabs)(({theme}: {theme: Theme}) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}

export const StyledTab = styled(Tab)(({theme}: {theme: Theme}) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: '1rem',
  textTransform: 'none',
}));
