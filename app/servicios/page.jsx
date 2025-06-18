import { Suspense } from 'react';
import ServiciosContent from './ServiciosContent';

export default function ServiciosPage() {
  return (
    <Suspense fallback={<div className="text-center p-5">Cargando servicios...</div>}>
      <ServiciosContent />
    </Suspense>
  );
}