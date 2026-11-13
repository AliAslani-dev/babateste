// src/components/pwa/IosSplashSetup.tsx
'use client';

import { useEffect } from 'react';
import { generateIosPwaSplash } from 'ios-pwa-splash-screen';

export default function IosSplashSetup() {
  useEffect(() => {
    generateIosPwaSplash({
      icon: { url: '/icons/icon-512x512.png', backgroundColor: '#FCFDFF' },
    }).catch(console.error);
  }, []);

  return null;
}