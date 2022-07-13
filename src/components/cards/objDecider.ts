import {BrandObject, BrandResponse} from 'pages/api/brands';
import {CameraObject, CameraResponse} from 'pages/api/cameras';

export function objDecider(
  char: string,
  objList: BrandResponse | CameraResponse,
  type: 'brands' | 'cameras' | 'lens' | 'film',
) {
  if (type === 'brands') {
    const tempObj = objList as BrandResponse;
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    return objByChar;
  } else if (type === 'cameras') {
    const tempObj = objList as CameraResponse;
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  } else if (type === 'film') {
    const tempObj = objList as CameraResponse;
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  } else {
    const tempObj = objList as CameraResponse;
    const objByChar = tempObj
      .filter(obj => {
        return obj.name.charAt(0) === char;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    return objByChar;
  }
}

export function instanceOfCamera(object: any): object is CameraObject {
  return 'releaseDate' in object;
}

export function instanceOfBrand(object: any): object is BrandObject {
  return 'hasDigitalCameras' in object;
}
