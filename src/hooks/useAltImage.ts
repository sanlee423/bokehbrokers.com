import fetcher from '@/utils/fetcher';
import {CameraVariants} from 'pages/api/cameras/[cameraAlt]/variants';
import {ImageListResponse} from 'src/types/imageTypes';
import useSWR from 'swr';

export const useAltImage = (
  selectedVariant: string,
  variants: CameraVariants[] | undefined,
  alt: string,
) => {
  return useSWR<ImageListResponse>(
    formulateImageUrl(selectedVariant, variants, alt),
    alt && selectedVariant && variants ? fetcher : null,
  );
};

const getAlt = (obj: CameraVariants[], str: string) => {
  const val = obj.filter(variant => variant.name === str);
  return val.length > 0 ? val[0].alt : '';
};

const formulateImageUrl = (
  selectedVariant: string,
  variantObject: CameraVariants[] | undefined,
  alt: string,
) => {
  if (variantObject && variantObject.length === 0) {
    return `/api/image/cameras/${alt}/list`;
  } else if (alt && selectedVariant && variantObject) {
    return `/api/image/cameras/${alt}-${getAlt(
      variantObject,
      selectedVariant,
    )}/list`;
  } else {
    return null;
  }
};
