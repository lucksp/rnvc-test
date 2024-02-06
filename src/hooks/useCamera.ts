import { useIsFocused } from '@react-navigation/core';
import { Component, useEffect, useRef, useState } from 'react';
import {
  Camera,
  CameraProps,
  Templates,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useFrameProcessor,
} from 'react-native-vision-camera';
import { useIsForeground } from '../hooks/useIsForeground'

const MINZOOM = 0.5;
const MAXZOOM = 3;

export function useCamera() {
  // UNCOMMENT HERE TO ENABLE & SEE APP CRASH
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`);
  }, []);

  const cameraRef = useRef<Component<CameraProps>>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle-camera', 'wide-angle-camera'],
  });

  const minZoom = device?.minZoom ?? MINZOOM;
  const maxZoom = Math.min(device?.maxZoom ?? MINZOOM, MAXZOOM);

  const [isCapturing, setIsCapturing] = useState(false);
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  const format = useCameraFormat(device, Templates.FrameProcessingRGB);

  useEffect(
    function checkPermissions() {
      // TODO - open nice permissions UI & if denied link to settings
      if (!hasPermission) {
        requestPermission();
      }
    },
    [hasPermission, requestPermission]
  );

  return {
    device,
    maxZoom,
    minZoom,
    Camera,
    isActive,
    cameraRef,
    isCapturing,
    setIsCapturing,
    format,
    frameProcessor,
  };
}
