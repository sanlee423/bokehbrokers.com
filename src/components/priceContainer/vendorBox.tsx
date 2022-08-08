import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Typography} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles(theme => ({
  vendorBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    border: '0.5px solid grey',
  },
  vendorImage: {
    height: '15px',
  },
  avatarStyle: {
    border: '0.1px solid grey',
    '& img': {
      width: '80px',
      height: 'auto',
    },
  },
}));

interface VendorBoxProps {
  vendor: 'amazon' | 'ebay';
}

export default function VendorBox(props: VendorBoxProps) {
  const classes = useStyles(campediaTheme);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {props.vendor === 'amazon' ? (
            <Avatar
              className={classes.avatarStyle}
              alt="Amazon Logo"
              src="https://s3.us-east-1.wasabisys.com/merchants/amazon1x.png"
            />
          ) : (
            <Avatar
              className={classes.avatarStyle}
              alt="Ebay Logo"
              src="https://s3.us-east-1.wasabisys.com/merchants/ebay3x.png"
            />
          )}
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{display: 'inline'}}
              component="span"
              variant="body1"
              color="text.primary">
              $6084.75
            </Typography>
          }
          secondary={
            <>
              <Typography
                sx={{display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary">
                Used - Very Good
              </Typography>
              <Typography variant="body2" color="text.primary">
                🌟🌟🌟🌟🌟 (702)
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}
