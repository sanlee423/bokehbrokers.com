import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';

const useStyles = makeStyles(theme => ({
  cameraBanner: {
    width: '100vw',
  },
  bannerContainer: {
    height: '30vh',
    marginBottom: '2%',
  },
  bannerMedia: {
    backgroundColor: 'white',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    transition: '300ms',
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(115%)',
    },
  },
  bannerMediaCaption: {
    textOverflow: 'ellipsis',
    position: 'absolute',
    bottom: 0,
    padding: '15px',
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.6,
    width: '100%',
    height: '10%',
    transition: '300ms',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 200,
    '&:hover': {
      opacity: 0.8,
    },
  },
  bannerGrid: {
    height: '100%',
    position: 'relative',
  },
  bannerContent: {
    color: 'white',
    backgroundColor: '#1a1a1a',
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
    padding: '30px',
    transition: '200ms',
    '&:hover, &:active': {
      backgroundColor: '#393a3b',
    },
    bannerViewButton: {
      backgroundColor: 'white',
      color: 'red',
    },
  },
  bannerTitle: {
    fontSize: 30,
    fontWeight: 500,
    color: 'white',
  },
  bannerCaption: {
    marginTop: '4%',
    fontSize: 16,
    fontWeight: 100,
    color: 'white',
  },
  bannerViewButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: '6%',
    marginRight: '4%',
    color: 'white',
    fontSize: 18,
    border: '1px solid white',
    textTransform: 'capitalize',
    transition: '100ms',
  },
}));

const CameraBanner = () => {
  const classes = useStyles(cpTheme);

  return (
    <div className={classes.bannerContainer}>
      <br />
      <Carousel
        className={classes.cameraBanner}
        autoPlay={true}
        animation="fade"
        indicators={true}
        duration={3000}
        navButtonsAlwaysVisible={false}
        fullHeightHover={true}
        cycleNavigation={true}
        swipe={true}>
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

type Item = {
  Name: string;
  Caption: string;
  contentPosition: 'left' | 'right' | 'middle';
  Items: {Name: string; Image: string}[];
};

interface BannerProps {
  item: Item;
  contentPosition: 'left' | 'right' | 'middle';
  length?: number;
}

const Banner = (props: BannerProps) => {
  const classes = useStyles(cpTheme);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : 'left';
  const totalItems: number = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className={classes.bannerContent}>
        <Typography className={classes.bannerTitle}>
          {props.item.Name}
        </Typography>

        <Typography className={classes.bannerCaption}>
          {props.item.Caption}
        </Typography>

        <Button className={classes.bannerViewButton}>View Now →</Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item.Name}>
        <CardMedia
          className={classes.bannerMedia}
          image={item.Image}
          title={item.Name}></CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={classes.bannerContainer}>
      <Grid container spacing={0} className={classes.bannerGrid}>
        {items}
      </Grid>
    </Card>
  );
};

const items: Item[] = [
  {
    Name: 'Fuji X-Pro 3',
    Caption: 'Pure Photography',
    contentPosition: 'left',
    Items: [
      {
        Name: 'X-Pro 3 Front',
        Image:
          'https://1.img-dpreview.com/files/p/articles/2118408140/camera-3q_1.jpeg',
      },
      {
        Name: 'X-Pro 3 Back',
        Image:
          'https://3.img-dpreview.com/files/p/E~TS590x0~articles/7641179975/camera-back.jpeg',
      },
    ],
  },
  {
    Name: 'Leica M11',
    Caption: 'A Legend Reinvented',
    contentPosition: 'left',
    Items: [
      {
        Name: 'Leica M11 - Front',
        Image:
          'https://i.pcmag.com/imagery/reviews/039ajAqjhDnJ8PPzY5J3Eog-49.fit_scale.size_760x427.v1640837147.jpg',
      },
      {
        Name: 'Leica M11 - Back',
        Image:
          'https://camerajabber.com/wp-content/uploads/2022/01/Leica-M11_DSC3241_%C2%A9Angela-Nicholson.jpg',
      },
    ],
  },
  {
    Name: 'Canon EOS R6',
    Caption: `Not the hybrid king, but a great photographers' camera`,
    contentPosition: 'left',
    Items: [
      {
        Name: 'Canon EOS R6 - Front',
        Image:
          'https://cdn.pocket-lint.com/r/s/1200x/assets/images/153880-cameras-review-canon-eos-r6-review-image1-tyjetvpexj.jpg',
      },
      {
        Name: 'Canon EOS R6 - Back',
        Image:
          'https://icdn.digitaltrends.com/image/digitaltrends/canon-eos-r6-review-0651.jpg',
      },
    ],
  },
];

export default CameraBanner;
