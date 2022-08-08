import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {campediaTheme} from '@/utils/campediaTheme';
import {Table, TableBody, TableCell, TableRow, Typography} from '@mui/material';
import {StyledTab, StyledTabs, TabPanel} from '../tabs';
import {ReadMore} from '../readMore';
import CircularPageLoader from '../pageComponents/circularPageLoader';
import {formatSpec, formatSpecValue} from '@/utils/specFormatter';
import {CameraSpecs} from 'pages/api/cameras/[cameraAlt]';

interface GridRows {
  id: string;
  value: string;
}

function buildDataGridRows(cameraSpecs: CameraSpecs): GridRows[] {
  const res: GridRows[] = [];

  for (const [key, value] of Object.entries(cameraSpecs)) {
    if (key === 'id' || key === 'cameraId') {
      continue;
    }

    if (value !== null) {
      res.push({id: formatSpec(key), value: formatSpecValue(key, value)});
    }
  }

  return res;
}

const useStyles = makeStyles(theme => ({}));

interface PageByAltTableProps {
  cameraSpecs: CameraSpecs;
  tabValue: number;
}

export default function PageByAltTable({
  cameraSpecs,
  tabValue,
}: PageByAltTableProps) {
  const classes = useStyles(campediaTheme);
  const [rows, setRows] = React.useState<GridRows[]>();

  React.useEffect(() => {
    if (cameraSpecs) {
      const specs = buildDataGridRows(cameraSpecs);
      setRows(specs);
    }
  }, []);
  return (
    <>
      {rows ? (
        <>
          <TabPanel key={`product-specifications`} value={tabValue} index={1}>
            <ReadMore>
              <Table aria-label="camera specifications">
                <TableBody>
                  {rows.map(row => (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:last-child td, &:last-child th': {border: 0},
                      }}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ReadMore>
          </TabPanel>
        </>
      ) : (
        <TabPanel key={`product-specifications`} value={tabValue} index={1}>
          <CircularPageLoader />
        </TabPanel>
      )}
    </>
  );
}
