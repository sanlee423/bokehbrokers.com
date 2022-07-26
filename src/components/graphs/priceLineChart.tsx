import {campediaTheme} from '@/utils/campediaTheme';
import useWindowSize from '@/utils/windowDimensions';
import {makeStyles} from '@mui/styles';
import {useState} from 'react';
import {
  DomainTuple,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
} from 'victory';

const useStyles = makeStyles(theme => ({
  chartContainer: {
    height: '30rem',
  },
}));

interface PriceLineChartProps {
  data: any;
}

type zDType = DomainTuple;
interface zD {
  x: zDType;
}

export const PriceLineChart: React.FC<PriceLineChartProps> = ({data}) => {
  const classes = useStyles(campediaTheme);
  const {width} = useWindowSize();
  const [zoomDomain, setZoomDomain] = useState<zD>({
    x: [new Date(1990, 1, 1), new Date(2009, 1, 1)],
  });

  const handleZoom = (domain: zD) => {
    setZoomDomain(domain);
  };

  return (
    <div className={classes.chartContainer}>
      <VictoryChart
        width={width}
        scale={{x: 'time'}}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }>
        <VictoryLine
          style={{
            data: {stroke: campediaTheme.palette.primary.main},
          }}
          data={[
            {a: new Date(1982, 1, 1), b: 125},
            {a: new Date(1987, 1, 1), b: 257},
            {a: new Date(1993, 1, 1), b: 345},
            {a: new Date(1997, 1, 1), b: 515},
            {a: new Date(2001, 1, 1), b: 132},
            {a: new Date(2005, 1, 1), b: 305},
            {a: new Date(2011, 1, 1), b: 270},
            {a: new Date(2015, 1, 1), b: 470},
          ]}
          x="a"
          y="b"
        />
      </VictoryChart>
      {/* <VictoryChart
        padding={{top: 50, left: 50, right: 50, bottom: 30}}
        scale={{x: 'time'}}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={handleZoom}
          />
        }>
        <VictoryAxis tickFormat={x => new Date(x).getFullYear()} />
        <VictoryLine
          style={{
            data: {stroke: 'tomato'},
          }}
          data={[
            {key: new Date(1982, 1, 1), b: 125},
            {key: new Date(1987, 1, 1), b: 257},
            {key: new Date(1993, 1, 1), b: 345},
            {key: new Date(1997, 1, 1), b: 515},
            {key: new Date(2001, 1, 1), b: 132},
            {key: new Date(2005, 1, 1), b: 305},
            {key: new Date(2011, 1, 1), b: 270},
            {key: new Date(2015, 1, 1), b: 470},
          ]}
          x="key"
          y="b"
        />
      </VictoryChart> */}
    </div>
  );
};
