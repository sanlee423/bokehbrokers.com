import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {makeStyles} from '@mui/styles';
import {VictoryChart, VictoryLine} from 'victory';

const useStyles = makeStyles(theme => ({
  chartContainer: {
    height: '30rem',
  },
}));

interface PriceLineChartProps {
  data: any;
}

export const PriceLineChart: React.FC<PriceLineChartProps> = ({data}) => {
  const classes = useStyles(campediaTheme);
  const {width} = useWindowSize();

  return (
    <VictoryChart width={width} scale={{x: 'time'}}>
      <VictoryLine
        style={{
          data: {stroke: campediaTheme.palette.primary.main},
        }}
        data={[
          {x: new Date(1993, 1, 1), y: 345},
          {x: new Date(1997, 1, 1), y: 515},
          {x: new Date(2001, 1, 1), y: 132},
          {x: new Date(2005, 1, 1), y: 305},
          {x: new Date(2011, 1, 1), y: 270},
          {x: new Date(2015, 1, 1), y: 470},
          {x: new Date(2016, 1, 1), y: 500},
          {x: new Date(2017, 1, 1), y: 470},
        ]}
        x="x"
        y="y"
      />
    </VictoryChart>
  );
};
