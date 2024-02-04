import React from 'react';
import {  Text, View } from 'react-native';

import { useCameraContext } from '../../context/CameraProvider/useCameraContext';

const CameraView = () => {
  const { device, cameraRef, isActive, Camera, frameProcessor } =
    useCameraContext();
    
  return (
    <>
      {device ? (
        <>
          <View>
            <Camera
              device={device}
              // TOGGLE THIS:
              // frameProcessor={frameProcessor}
              isActive={isActive}
              photo
              ref={cameraRef}
              style={{
                position: 'absolute',
                width: 500,
                height: 500,
              }}
            />
          </View>
        </>
      ): <Text>Loading Camera or not found</Text>}
    </>
  );
};

export { CameraView };
