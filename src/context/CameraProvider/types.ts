import { ComponentClass, Dispatch, RefObject, SetStateAction } from 'react';
import {
  Camera,
  CameraDevice,
  CameraDeviceFormat,
  CameraPermissionStatus,
  CameraProps,
  FrameProcessor,
} from 'react-native-vision-camera';

export interface CameraContextShape {
  device: CameraDevice | undefined;
  maxZoom: number;
  minZoom: number;
  handleZoom: (value: number) => void;
  cameraPermission: CameraPermissionStatus | undefined;
  Camera: ComponentClass<CameraProps>;
  isActive: boolean;
  cameraRef: RefObject<Camera>;
  isCapturing: boolean;
  setIsCapturing: Dispatch<SetStateAction<boolean>>;
  format?: CameraDeviceFormat;
  frameProcessor?: FrameProcessor;
}
