import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import CameraSections from '@/components/cameraSections/cameraSections';
import {Footer} from '@/components/footer';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  // const [brands, setBrands] = useState<string[]>([]);
  // const {data} = useSWR(`/api/brands/`, fetcher);

  // useEffect(() => {
  //   console.log(data);
  //   setBrands(data?.brands ?? []);
  // });

  return (
    <div className={classes.homeContainer}>
      <CameraSections />
      <Footer />
    </div>
  );
};

export default Brands;
