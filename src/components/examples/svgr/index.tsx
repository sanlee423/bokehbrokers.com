import React from 'react';
import {
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
  PankodIcon,
} from '@/components/icons';

export const SvgrExample: React.FC = () => {
  return (
    <div>
      <GithubIcon width={32} height={32} color="black" />
      <TwitterIcon width={32} height={32} color="black" />
      <YoutubeIcon width={32} height={32} color="black" />
      <PankodIcon width={140} height={28} color="black" />
    </div>
  );
};
