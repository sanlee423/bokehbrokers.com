import {axInstance} from '@/utils/axiosInstance';
import {NextApiRequest, NextApiResponse} from 'next';

const CAMPEDIA_API_URL = process.env.CAMPEDIA_API_URL;

export interface CameraData {
  id: number;
  name: string;
  alt: string;
  description?: string;
  brandId: string;
  source?: string;
  productLink?: string;
  releaseDate?: string;
}
export interface CameraSpecs {
  gps?: string;
  orientationSensor?: number;
  dimensions?: string;
  weightIncBatteries?: number;
  batteryLifeCIPA?: number;
  batteryDescription?: string;
  battery?: string;
  environmentallySealed?: number;
  remoteControl?: number;
  hdmi?: number;
  usb?: string;
  storageIncluded?: string;
  storageTypes?: string;
  speaker?: string;
  microphonePort?: string;
  exposureCompensation?: string;
  meteringModes?: string;
  selfTimer?: string;
  continuousDrive?: number;
  flashModes?: string;
  externalFlash?: number;
  builtinFlash?: number;
  subjectSceneModes?: number;
  manualExposureMode?: number;
  shutterPriority?: number;
  aperturePriority?: number;
  maximumShutterSpeed?: number;
  minimumShutterSpeed?: number;
  viewFinderType?: string;
  liveView?: number;
  touchScreen?: number;
  screenDots?: number;
  screenSize?: number;
  articulatedLCD?: string;
  numberOfFocusPoints?: number;
  macroFocusRange?: number;
  normalFocusRange?: number;
  manualFocus?: number;
  digitalZoom?: number;
  autofocus?: string;
  maximumAperture?: number;
  opticalZoom?: number;
  focalLengthEquiv?: number;
  jpegQualityLevels?: string;
  uncompressedFormat?: string;
  imageStabilization?: number;
  customWhiteBalance?: string;
  whiteBalancePresets?: number;
  iso?: string;
  sensorType?: string;
  sensorSize?: string;
  sensorPhotoDetectors?: number;
  effectivePixels?: number;
  imageRatioWh?: string;
  otherResolutions?: string;
  maxResolution?: string;
  bodyType?: string;
  msrp?: number;
  processor?: string;
  lensMount?: string;
  focalLengthMultiplier?: number;
  screenType?: string;
  viewFinderMagnification?: string;
  maximumShutterSpeedElectronic?: number;
  usbCharging?: number;
  headphonePort?: number;
  wireless?: string;
  wirelessNotes?: string;
  boostedISOMinimum?: number;
  boostedISOMaximum?: number;
  cipaImageStabilizationRating?: number;
  viewfinderCoverage?: number;
  viewfinderResolution?: number;
  aeBracketing?: string;
  wbBracketing?: string;
  format?: string;
  modes?: string;
  microphone?: string;
  timelapseRecording?: number;
  gpsNotes?: string;
  resolutions?: string;
  flashRange?: string;
  videographyNotes?: string;
}

export interface CameraPair {
  camera: CameraData;
  specs: CameraSpecs;
}

export interface CameraDetailsResponse {
  type: 'cameras';
  data: CameraPair;
}

export default async function cameraDetailsHandler(
  req: NextApiRequest,
  res: NextApiResponse<CameraDetailsResponse>,
) {
  if (req.method === 'GET') {
    const {cameraAlt} = req.query;
    const cameraResponse = await axInstance.get<CameraDetailsResponse>(
      CAMPEDIA_API_URL + '/cameras/' + cameraAlt,
    );

    return res.status(200).json(cameraResponse.data);
  }
}
