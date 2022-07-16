import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import useSWR from 'swr';
import {BrandResponse} from 'pages/api/brands';
import {campediaTheme} from '@/utils/campediaTheme';
import DescriptionListCard from '@/components/cards/descriptionListCard';
import PhotoListCard from '@/components/cards/photoListCard';
import TextListCard from '@/components/cards/textListCard';
import PageListHeader from './pageListHeader';
import {
  BrandDetailsObject,
  BrandDetailsResponse,
} from 'pages/api/brands/[brandAlt]';
import {useRouter} from 'next/router';
import {ImagePreviewResponse} from 'src/types/imageTypes';
import fetcher from '@/utils/fetcher';
import HeaderCard from '../headerCard/headerCard';
import {ProductListResponse} from 'pages/api/brands/[brandAlt]/products';
import ProductListDescriptiveCard from '../brandCards/productListDescriptiveCard';
import ProductListPhotoCard from '../brandCards/productListPhotoCard';
import ProductListTextCard from '../brandCards/productListTextCard';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '3%',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
}));

export type toggleList = 'image' | 'desc' | 'text';

export default function BrandedProductListPage() {
  const classes = useStyles(campediaTheme);
  const router = useRouter();
  const params = router.query;
  const brandAlt = params.brandAlt as string;
  const [productList, setProductList] = useState<ProductListResponse>();
  const {data} = useSWR<ProductListResponse>(
    brandAlt ? `/api/brands/${brandAlt}/products` : null,
    brandAlt ? fetcher : null,
  );

  const [brandDetails, setBrandDetails] = useState<BrandDetailsObject>();
  const [image, setImage] = React.useState<ImagePreviewResponse>();

  const {data: brandData} = useSWR<BrandDetailsResponse>(
    brandAlt ? `/api/brands/${brandAlt}` : null,
    brandAlt ? fetcher : null,
  );
  const {data: brandImage} = useSWR<ImagePreviewResponse>(
    brandAlt ? `/api/image/brands/${brandAlt}` : null,
    brandAlt ? fetcher : null,
  );

  useEffect(() => {
    setProductList(data);
    console.log(data);
    if (brandData) {
      setBrandDetails(brandData.data);
    }
    setImage(brandImage);
  }, [data, brandData, brandImage]);

  const [alignment, setAlignment] = React.useState<toggleList>('desc');
  return (
    <div className={classes.pageContainer}>
      {brandDetails && <HeaderCard brandDetails={brandDetails} image={image} />}
      <PageListHeader alignmentState={setAlignment} />

      <br />
      <div className={classes.listContainer}>
        {productList && alignment === 'desc' && (
          <ProductListDescriptiveCard productList={productList.data} />
        )}
        {productList && alignment === 'image' && (
          <ProductListPhotoCard productList={productList.data} />
        )}
        {productList && alignment === 'text' && (
          <ProductListTextCard productList={productList.data} />
        )}
      </div>
    </div>
  );
}
