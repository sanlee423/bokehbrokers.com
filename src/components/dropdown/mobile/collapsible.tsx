import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Collapse, ListItemButton} from '@mui/material';
import {DropdownProps} from '../dropDownItem';

type Props = {
  dropDownItems: DropdownProps;
  title: string;
};

export const Collapsible: React.FC<Props> = ({dropDownItems, title}: Props) => {
  const [expand, setExpand] = React.useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <ListItemButton onClick={handleExpand}>
        {expand ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        <ListItemText className="mx-4" primary={title} />
      </ListItemButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dropDownItems.menuObj.map(item => {
            return (
              <ListItemButton
                component="a"
                href={item.link}
                key={item.title}
                sx={{pl: 4}}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};
