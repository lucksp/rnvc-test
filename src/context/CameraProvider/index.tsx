import React, { ReactNode, createContext } from 'react';

import { useCamera } from '../../hooks/useCamera';
import type { CameraContextShape } from './types';

export const CameraContext = createContext<CameraContextShape | undefined>(
  undefined
);

const CameraProvider = ({ children }: {children: ReactNode;}) => {
  const camera = useCamera();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <CameraContext.Provider value={{ ...camera }}>
      {children}
    </CameraContext.Provider>
  );
};

export { CameraProvider };
