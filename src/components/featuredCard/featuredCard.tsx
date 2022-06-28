import {CircularProgress} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, {useEffect, useRef, useState} from 'react';
import cpTheme from 'src/theme/cpTheme';

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

export const FeaturedCard: React.FC = () => {
  const classes = useStyles(cpTheme);

  const iFrameContainer = useRef<HTMLDivElement>(null);
  const videoId =
    featuredVideoData[Math.floor(Math.random() * featuredVideoData.length)];

  useEffect(() => {
    const iFrame = document.createElement('iframe');
    iFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&color=white&controls=0&showinfo=0&mute=1&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&playlist=${videoId}`;
    iFrame.className = classes.videoIFrame;
    iFrame.setAttribute('frameBorder', '0');
    iFrame.setAttribute('scrolling', 'no');
    iFrame.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    );

    if (iFrameContainer.current) {
      iFrameContainer.current.appendChild(iFrame);
    }
  }, [classes.videoIFrame, videoId]);

  return (
    <>
      <div className={classes.videoContainer} ref={iFrameContainer}></div>
    </>
  );
};
