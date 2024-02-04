import React from 'react'
import { Text  } from 'react-native';
import { CameraProvider } from '../src/context/CameraProvider';
import { CameraView } from '../src/components/CameraView';

export default function CameraLayout() {
    
    return (
        <CameraProvider>
            <Text>Test RNVC w FrameProcessors</Text>
            <CameraView />
        </CameraProvider>
    );

}