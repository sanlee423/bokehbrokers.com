import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

interface PageTitleProps {
  title?: string;
}

export default function PageTitle({title}: PageTitleProps) {
  const {pathname} = useRouter();
  const splitArray = pathname.split('/').filter((part, i) => {
    if (i === 0) {
      return false;
    } else if (part.match(/\[.*\]/g)) {
      return false;
    } else {
      return true;
    }
  });

  const identifyingString =
    splitArray[0].charAt(0).toUpperCase() +
    splitArray[0].substring(1, splitArray[0].length);

  return (
    <>
      <Head>
        <title>{`Bokeh Broker | ${identifyingString}${
          title !== undefined ? ` - ${title}` : ''
        }`}</title>
      </Head>
    </>
  );
}
