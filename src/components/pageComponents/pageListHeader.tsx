import React from 'react';
import {makeStyles} from '@mui/styles';
import {Divider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {campediaTheme} from '@/utils/campediaTheme';
import {toggleList} from './pageList';
import Breadcrumb from '../breadcrumbs';
import {Description, Image as ImageIcon, TextFields} from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'center',
    height: '4vh',
    margin: '1%',
  },
}));

interface PageListProps {
  alignmentState: React.Dispatch<React.SetStateAction<toggleList>>;
}

export default function PageListHeader(props: PageListProps) {
  const classes = useStyles(campediaTheme);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: toggleList,
  ) => {
    props.alignmentState(newAlignment);
  };

  const control = {
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <div className={classes.pageHeader}>
        <Breadcrumb />
        <ToggleButtonGroup size="small" {...control}>
          <ToggleButton value="desc" key="desc">
            <Description />
          </ToggleButton>
          <ToggleButton value="image" key="image">
            <ImageIcon />
          </ToggleButton>
          <ToggleButton value="text" key="text">
            <TextFields />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Divider />

      <br />
    </>
  );
}
