'use client';

export default function WhatsAppButton() {
  const mensaje = encodeURIComponent("Hola, estoy interesado en sus servicios. ¿Podría brindarme más información? vengo de la página web de Danyris. Gracias. https://danyris.com/");
  const numero = "017410619";

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 2.1.525 4.1 1.525 5.875L0 24l6.35-1.675A11.9 11.9 0 0 0 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0zm6.65 17.375c-.275.775-1.55 1.45-2.15 1.525-.575.05-1.275.075-2.05-.15-.475-.125-1.075-.35-1.85-.725-3.225-1.4-5.325-4.825-5.5-5.05-.15-.2-1.325-1.75-1.325-3.35s.825-2.375 1.15-2.7c.275-.3.725-.45 1.2-.45.15 0 .275 0 .4.025.35.025.525.05.75.6.275.65.9 2.225.975 2.375.075.15.125.3.025.475s-.15.3-.3.45c-.15.175-.3.35-.425.475-.125.15-.275.3-.125.575s.675 1.125 1.45 1.825c1 1 1.85 1.3 2.15 1.45.275.125.45.1.625-.05.15-.125.7-.825.875-1.1.175-.275.35-.225.6-.15.25.075 1.575.725 1.85.85.275.125.45.2.525.325.075.125.075.775-.2 1.55z" />
      </svg>
    </a>
  );
}
