import { useContext } from 'react';

import { CameraContext } from '.';

export function useCameraContext() {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error(
      'useCameraContext must be used within a CameraContextProvider'
    );
  }
  return context;
}
