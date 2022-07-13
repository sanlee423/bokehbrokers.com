import {BrandObject, BrandResponse} from 'pages/api/brands';
import {CameraObject, CameraResponse} from 'pages/api/cameras';
import {FilmObject, FilmResponse} from 'pages/api/film';
import {LensObject, LensResponse} from 'pages/api/lens';

export function objDecider(
  char: string,
  objList: BrandResponse | CameraResponse | FilmResponse | LensResponse,
) {
  if (objList.type === 'brands') {
    const tempObj = objList.data as BrandObject[];
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    return objByChar;
  } else if (objList.type === 'cameras') {
    const tempObj = objList.data as CameraObject[];
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  } else if (objList.type === 'film') {
    const tempObj = objList.data as FilmObject[];
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  } else if (objList.type === 'lens') {
    const tempObj = objList.data as LensObject[];
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  }

  return [];
}

export function instanceOfCamera(
  object: any,
  type: 'brands' | 'cameras' | 'film' | 'lens',
): object is CameraObject {
  if (type === 'cameras') {
    return true;
  }
  return false;
}

export function instanceOfBrand(
  object: any,
  type: 'brands' | 'cameras' | 'film' | 'lens',
): object is BrandObject {
  if (type === 'brands') {
    return true;
  }
  return false;
}

export function instanceOfFilm(
  object: any,
  type: 'brands' | 'cameras' | 'film' | 'lens',
): object is FilmObject {
  if (type === 'film') {
    return true;
  }
  return false;
}

export function instanceOfLens(
  object: any,
  type: 'brands' | 'cameras' | 'film' | 'lens',
): object is LensObject {
  if (type === 'lens') {
    return true;
  }
  return false;
}
