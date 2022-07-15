import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import useSWR from 'swr';
import {BrandResponse} from 'pages/api/brands';
import {campediaTheme} from '@/utils/campediaTheme';
import DescriptionListCard from '@/components/cards/descriptionListCard';
import PhotoListCard from '@/components/cards/photoListCard';
import TextListCard from '@/components/cards/textListCard';
import PageListHeader from './pageListHeader';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

const fetcher = (url: string) => fetch(url).then(res => res.json());

export type toggleList = 'image' | 'desc' | 'text';

interface PageListProps {
  type: 'brands' | 'cameras' | 'lens' | 'film';
}

export default function PageList(props: PageListProps) {
  const classes = useStyles(campediaTheme);
  const [obj, setObj] = useState<BrandResponse | undefined>();
  const {data} = useSWR(`/api/${props.type}/`, fetcher);

  useEffect(() => {
    setObj(data);
  }, [setObj, data]);

  const [alignment, setAlignment] = React.useState<toggleList>('desc');
  return (
    <>
      <PageListHeader alignmentState={setAlignment} />
      <br />
      <div className={classes.pageContainer}>
        {obj && alignment === 'desc' && <DescriptionListCard objList={obj} />}
        {obj && alignment === 'image' && <PhotoListCard objList={obj} />}
        {obj && alignment === 'text' && <TextListCard objList={obj} />}
      </div>
    </>
  );
}
