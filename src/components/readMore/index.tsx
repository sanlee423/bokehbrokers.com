import {campediaTheme} from '@/utils/campediaTheme';
import {Button, Theme} from '@mui/material';
import {makeStyles, styled} from '@mui/styles';
import {useState} from 'react';

interface ReadMoreProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  readMoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const StyledButton = styled(Button)(({theme}: {theme: Theme}) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
}));

export const ReadMore: React.FC<ReadMoreProps> = ({children}) => {
  const classes = useStyles(campediaTheme);
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <div className={classes.readMoreContainer}>
      <div className={hidden ? 'readmore-hidden' : 'readmore-open'}>
        {children}
      </div>
      <StyledButton
        disableRipple
        theme={campediaTheme}
        size="small"
        onClick={() => setHidden(!hidden)}>
        {hidden ? 'Read More ⬇' : 'Read Less ⬆'}
      </StyledButton>
    </div>
  );
};
