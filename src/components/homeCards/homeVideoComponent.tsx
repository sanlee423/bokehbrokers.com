import {campediaTheme} from '@/utils/campediaTheme';
import {makeStyles} from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  videoContainer: {
    flex: 1,
    marginBottom: '8px',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  videoIFrame: {
    position: 'relative',
    right: 0,
    bottom: 0,
    height: '40vh',
    width: '100%',
    float: 'none',
    pointerEvents: 'none',
    background: 'none',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    zIndex: 10,
  },
}));

const featuredVideoData = ['eE6xWnLfJho', 'e92dppDp6L8', 'wNNiS6UILS0'];

export const HomeVideoComponent: React.FC = () => {
  const classes = useStyles(campediaTheme);

  const videoId =
    featuredVideoData[Math.floor(Math.random() * featuredVideoData.length)];

  return (
    <div className={classes.videoContainer}>
      <iframe
        className={classes.videoIFrame}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&loop=1&color=white&controls=0&showinfo=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&playlist=${videoId}`}
        frameBorder="0"
        scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
};
