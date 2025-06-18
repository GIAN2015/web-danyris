'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      // Activar todos los carruseles manualmente
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        new bootstrap.Carousel(carousel, {
          interval: 2000,
          ride: 'carousel',
          pause: false,
        });
      });
    });
  }, []);

  return null;
}
