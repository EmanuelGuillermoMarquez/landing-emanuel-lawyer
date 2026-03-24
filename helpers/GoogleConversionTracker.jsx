'use client'

import { useEffect } from 'react';

export default function GoogleConversionTracker() {
  useEffect(() => {
    // Verificamos que gtag exista antes de llamarlo
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17751695174/zUjZCIm32egbEMa-1ZBC'
      });
    }
  }, []);

  return null; // Este componente no renderiza nada visual
}
