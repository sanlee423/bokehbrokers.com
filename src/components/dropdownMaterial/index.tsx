import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {makeStyles, styled} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Theme} from '@mui/material';

interface DropDownMaterialInterface {
  menuItems: string[];
  title: string;
  size?: 'small' | 'medium';
}

const useStyles = makeStyles(theme => ({
  accordion: {
    '.MuiPaper-root.MuiAccordion-root': {
      boxShadow: 'none',
    },
    transition: '100ms ease',
  },
}));

export const StyledFormControl = styled(FormControl)(
  ({theme}: {theme: Theme}) => ({
    color: theme.palette.primary.main,
    textTransform: 'none',
  }),
);

export const StyledLabel = styled(InputLabel)(({theme}: {theme: Theme}) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export const StyledSelect = styled((props: any) => (
  <Select {...props}>{props.children}</Select>
))(({theme}: {theme: Theme}) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  '&:before': {},
  '&:after': {
    borderColor: theme.palette.primary.main,
  },
  '&:not(.Mui-disabled):hover::before': {
    borderColor: theme.palette.primary.main,
  },
}));

export default function DropDownMaterial({
  menuItems,
  title,
  size = 'small',
}: DropDownMaterialInterface) {
  const classes = useStyles(campediaTheme);
  const [item, setItem] = React.useState<string>(menuItems[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setItem(event.target.value);
  };

  return (
    <StyledFormControl variant="standard" size={size}>
      <StyledLabel id="dropdown-material">{title}</StyledLabel>
      <StyledSelect
        labelId="demo-select-small"
        id="demo-select-small"
        value={item}
        label="Age"
        onChange={handleChange}>
        {menuItems.map((menuItem, i) => {
          return (
            <MenuItem key={menuItem} value={menuItem}>
              {menuItem}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </StyledFormControl>
  );
}
