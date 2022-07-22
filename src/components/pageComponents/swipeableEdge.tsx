import * as React from 'react';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FilterGroup from '../filterGroup/filterGroup';
import {campediaTheme} from '@/utils/campediaTheme';

const drawerBleeding = 56;

interface Props {
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  open: boolean;
}

const Root = styled('div')(({theme}) => ({
  height: '100%',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
}));

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.default,
}));

const Puller = styled(Box)(({theme}) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer(props: Props) {
  return (
    <Root theme={campediaTheme}>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={props.open}
        onClose={props.handleClose}
        onOpen={props.handleOpen}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}>
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
          theme={campediaTheme}>
          <Puller theme={campediaTheme} />
          <Typography sx={{p: 2, color: 'text.secondary'}}>Options</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
          theme={campediaTheme}>
          <FilterGroup />
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
