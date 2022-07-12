export function formatSpec(id: string): string {
  switch (id) {
    case 'gps':
      return 'GPS';
    case 'orientationSensor':
      return 'Orientation Sensor';
    case 'dimensions':
      return 'Dimensions';
    case 'weightIncBatteries':
      return 'Weight Incl. Batteries';
    case 'batteryLifeCIPA':
      return 'Battery Life (CIPA)';
    case 'batteryDescription':
      return 'Battery Description';
    case 'battery':
      return 'Battery';
    case 'environmentallySealed':
      return 'Environmentally Sealed';
    case 'remoteControl':
      return 'Remote Control';
    case 'hdmi':
      return 'HDMI';
    case 'usb':
      return 'USB';
    case 'storageIncluded':
      return 'Storage Included';
    case 'storageTypes':
      return 'Storage Types';
    case 'speaker':
      return 'Speaker';
    case 'microphonePort':
      return 'Microphone Port';
    case 'exposureCompensation':
      return 'ExposureCompensation';
    case 'meteringModes':
      return 'MeteringModes';
    case 'selfTimer':
      return 'Self Timer';
    case 'continuousDrive':
      return 'Continuous Drive';
    case 'flashModes':
      return 'Flash Modes';
    case 'externalFlash':
      return 'External Flash';
    case 'builtinFlash':
      return 'Built-in Flash';
    case 'subjectSceneModes':
      return 'Subject / Scene Modes';
    case 'manualExposureMode':
      return 'Manual Exposure Mode';
    case 'shutterPriority':
      return 'Shutter Priority';
    case 'aperturePriority':
      return 'Aperture Priority';
    case 'maximumShutterSpeed':
      return 'Maximum Shutter Speed';
    case 'minimumShutterSpeed':
      return 'Minimum Shutter Speed';
    case 'viewFinderType':
      return 'Viewfinder Type';
    case 'liveView':
      return 'Live View';
    case 'touchScreen':
      return 'TouchScreen';
    case 'screenDots':
      return 'Screen Dots';
    case 'screenSize':
      return 'Screen Size';
    case 'articulatedLCD':
      return 'Articulated LCD';
    case 'numberOfFocusPoints':
      return 'Number of Focus Points';
    case 'macroFocusRange':
      return 'Macro Focus Range';
    case 'normalFocusRange':
      return 'Normal Focus Range';
    case 'manualFocus':
      return 'Manual Focus';
    case 'digitalZoom':
      return 'Digital Zoom';
    case 'autofocus':
      return 'Autofocus';
    case 'maximumAperture':
      return 'Maximum Aperture';
    case 'opticalZoom':
      return 'Optical Zoom';
    case 'focalLengthEquiv':
      return 'Focal Length Equivalent';
    case 'jpegQualityLevels':
      return 'JPEG Quality Levels';
    case 'uncompressedFormat':
      return 'Uncompressed Format';
    case 'imageStabilization':
      return 'Image Stabilization';
    case 'customWhiteBalance':
      return 'Custom White Balance';
    case 'whiteBalancePresets':
      return 'White Balance Presets';
    case 'iso':
      return 'ISO';
    case 'sensorType':
      return 'Sensor Type';
    case 'sensorSize':
      return 'Sensor Size';
    case 'sensorPhotoDetectors':
      return 'Sensor Photo Detectors';
    case 'effectivePixels':
      return 'Effective Pixels';
    case 'imageRatioWh':
      return 'Image Ratio W:H';
    case 'otherResolutions':
      return 'Other Resolutions';
    case 'maxResolution':
      return 'Max Resolution';
    case 'bodyType':
      return 'Body Type';
    case 'msrp':
      return 'MSRP';
    case 'processor':
      return 'Processor';
    case 'lensMount':
      return 'Lens Mount';
    case 'focalLengthMultiplier':
      return 'Focal Length Multiplier';
    case 'screenType':
      return 'Screen Type';
    case 'viewFinderMagnification':
      return 'Viewfinder Magnification';
    case 'maximumShutterSpeedElectronic':
      return 'Maximum Shutter Speed (Electronic)';
    case 'usbCharging':
      return 'USB Charging';
    case 'headphonePort':
      return 'Headphone Port';
    case 'wireless':
      return 'Wireless';
    case 'wirelessNotes':
      return 'Wireless Notes';
    case 'boostedISOMinimum':
      return 'Boosted ISO Minimum';
    case 'boostedISOMaximum':
      return 'Boosted ISO Maximum';
    case 'cipaImageStabilizationRating':
      return 'CIPA Image Stabilization Rating';
    case 'viewfinderCoverage':
      return 'Viewfinder Coverage';
    case 'viewfinderResolution':
      return 'Viewfinder Resolution';
    case 'aeBracketing':
      return 'AE Bracketing';
    case 'wbBracketing':
      return 'WB Bracketing';
    case 'format':
      return 'Format';
    case 'modes':
      return 'Modes';
    case 'microphone':
      return 'Microphone';
    case 'timelapseRecording':
      return 'Timelapse Recording';
    case 'gpsNotes':
      return 'GPS Notes';
    case 'resolutions':
      return 'Resolutions';
    case 'flashRange':
      return 'Flash Range';
    case 'videographyNotes':
      return 'Videography Notes';
    default:
      return '';
  }
}

export function formatSpecValue(id: string, value: string): string {
  switch (id) {
    case 'aperturePriority':
    case 'builtinFlash':
    case 'digitalZoom':
    case 'environmentallySealed':
    case 'externalFlash':
    case 'hdmi':
    case 'liveView':
    case 'touchScreen':
    case 'manualExposureMode':
    case 'manualFocus':
    case 'orientationSensor':
    case 'remoteControl':
    case 'subjectSceneModes':
    case 'shutterPriority':
    case 'imageStabilization':
    case 'usbCharging':
    case 'headphonePort':
    case 'timelapseRecording':
      const val = parseInt(value);
      if (val === 1) {
        return 'Yes';
      } else {
        return 'No';
      }
    case 'weightIncBatteries':
      return `${value} g`;
    case 'articulatedLCD':
    case 'autofocus':
    case 'battery':
    case 'batteryDescription':
    case 'batteryLifeCIPA':
    case 'dimensions':
    case 'exposureCompensation':
    case 'gps':
    case 'meteringModes':
    case 'numberOfFocusPoints':
    case 'selfTimer':
    case 'speaker':
    case 'storageIncluded':
    case 'storageTypes':
    case 'usb':
    case 'viewFinderType':
    case 'screenDots':
    case 'jpegQualityLevels':
    case 'uncompressedFormat':
    case 'customWhiteBalance':
    case 'whiteBalancePresets':
    case 'iso':
    case 'sensorType':
    case 'sensorSize':
    case 'imageRatioWh':
    case 'otherResolutions':
    case 'maxResolution':
    case 'bodyType':
    case 'processor':
    case 'lensMount':
    case 'screenType':
    case 'viewFinderMagnification':
    case 'microphonePort':
    case 'wireless':
    case 'wirelessNotes':
    case 'boostedISOMinimum':
    case 'boostedISOMaximum':
    case 'viewfinderResolution':
    case 'aeBracketing':
    case 'wbBracketing':
    case 'format':
    case 'modes':
    case 'microphone':
    case 'gpsNotes':
    case 'resolutions':
    case 'flashRange':
    case 'videographyNotes':
      return value;
    case 'continuousDrive':
      return `${parseFloat(value)} fps`;
    case 'flashModes':
      return value;
    case 'maximumShutterSpeed':
      return `1/${value} sec`;
    case 'minimumShutterSpeed':
      return `${value} sec`;
    case 'screenSize':
      return `${value}"`;
    case 'macroFocusRange':
      return `${value} cm`;
    case 'normalFocusRange':
      return `${value} cm`;
    case 'maximumAperture':
      return `F${value}`;
    case 'opticalZoom':
      return `${value}x`;
    case 'focalLengthEquiv':
      return `${value}mm`;
    case 'sensorPhotoDetectors':
      return `${value} megapixels`;
    case 'effectivePixels':
      return `${value} megapixels`;
    case 'msrp':
      return `$${value}`;
    case 'focalLengthMultiplier':
      return `${value}x`;
    case 'maximumShutterSpeedElectronic':
      return `1/${value} sec`;
    case 'cipaImageStabilizationRating':
      return `${value} stop(s)`;
    case 'viewfinderCoverage':
      return `${value}%`;
    default:
      return '';
  }
}
