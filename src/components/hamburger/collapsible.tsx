import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Collapse, ListItemButton} from '@mui/material';

type Props = {
  data: Object;
};

export const Collapsible: React.FC<Props> = ({data}) => {
  const [expand, setExpand] = React.useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <ListItemButton onClick={handleExpand}>
        {expand ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        <ListItemText className="mx-4" primary={Object.keys(data)[0]} />
      </ListItemButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(data)[0].map(item => {
            return (
              <ListItemButton key={item} sx={{pl: 4}}>
                <ListItemText primary={item} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

{
  /* <ListItemButton onClick={handleExpand}>
              {expand ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
              <ListItemText className="mx-4" primary="Brands" />
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary="Canon" />
                </ListItemButton>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary="Fujifilm" />
                </ListItemButton>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary="Sony" />
                </ListItemButton>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary="Nikon" />
                </ListItemButton>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary="View all brands" />
                </ListItemButton>
              </List>
            </Collapse> */
}
