import { ComponentClass, Dispatch, RefObject, SetStateAction } from 'react';
import { AnimateProps, SharedValue } from 'react-native-reanimated';
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
  zoom: SharedValue<number>;
  maxZoom: number;
  minZoom: number;
  handleZoom: (value: number) => void;
  cameraPermission: CameraPermissionStatus | undefined;
  animatedProps: Partial<AnimateProps<CameraProps>>;
  Camera: ComponentClass<AnimateProps<CameraProps>, any>;
  isActive: boolean;
  cameraRef: RefObject<Camera>;
  isCapturing: boolean;
  setIsCapturing: Dispatch<SetStateAction<boolean>>;
  format?: CameraDeviceFormat;
  frameProcessor?: FrameProcessor;
}
