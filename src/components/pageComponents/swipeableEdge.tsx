import * as React from 'react';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {campediaTheme} from '@/utils/campediaTheme';
import {Button, Divider} from '@mui/material';
import MobileFilterGroup from '../groupComponents/mobile/mobileFilterGroup';
import MobileSortGroup from '../groupComponents/mobile/mobileSortGroup';

const drawerBleeding = 56;

interface Props {
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  open: boolean;
}

const Root = styled('div')(({theme}) => ({
  height: '100%',
  color: theme.palette.primary.main,
  backgroundColor: '#fff',
}));

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: '#fff',
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
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          theme={campediaTheme}>
          <Button
            size="medium"
            variant="text"
            onClick={props.handleClose}
            disableRipple
            sx={{
              '&:hover': {
                backgroundColor: '#fff',
              },
              p: 2,
              color: campediaTheme.palette.primary.main,
              textTransform: 'none',
            }}>
            Close
          </Button>
        </StyledBox>
        <Divider />
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
          theme={campediaTheme}>
          <MobileFilterGroup />
          <Divider />
          <MobileSortGroup />
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
