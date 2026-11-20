'use client';

import { useState, useEffect } from 'react';

interface PopUpAd {
  id: number;
  title: string;
  message: string;
  top: number;
  left: number;
}

export default function Adware() {
  const [popups, setPopups] = useState<PopUpAd[]>([]);
  const [stickyVisible, setStickyVisible] = useState(true);

  // 1. Simular la inyección automática de Pop-ups cada X segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (popups.length < 5) {
        const newAd: PopUpAd = {
          id: Date.now(),
          title: '⚠️ ¡ALERTA DE SISTEMA!',
          message: 'Se han detectado 3 virus en tu dispositivo. ¡Haz clic para limpiar!',
          top: Math.floor(Math.random() * 60) + 10, // % de la pantalla
          left: Math.floor(Math.random() * 60) + 10,
        };
        setPopups((prev) => [...prev, newAd]);
      }
    }, 4000); // Genera un anuncio cada 4 segundos

    return () => clearInterval(interval);
  }, [popups]);

  // Cerrar un popup (o hacer que abra otro, típico de adware)
  const closePopup = (id: number) => {
    setPopups((prev) => prev.filter((ad) => ad.id !== id));
  };

  return (
    <>
      {/* 2. Pop-ups Flotantes / Desplazables */}
      {popups.map((ad) => (
        <div
          key={ad.id}
          className="fixed z-50 bg-yellow-100 border-2 border-red-600 p-4 rounded shadow-2xl w-80 animate-bounce"
          style={{ top: `${ad.top}%`, left: `${ad.left}%` }}
        >
          <div className="flex justify-between items-center border-b border-red-300 pb-1 mb-2">
            <span className="text-xs font-bold text-red-700">{ad.title}</span>
            <button
              onClick={() => closePopup(ad.id)}
              className="text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded hover:bg-red-800"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-gray-800 mb-3">{ad.message}</p>
          <button
            onClick={() => alert('Simulación: Redirigiendo a sitio malicioso...')}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-1.5 rounded uppercase tracking-wider"
          >
            DESCARGAR AHORA
          </button>
        </div>
      ))}

      {/* 3. Banner Adhesivo Inferior (Inamovible) */}
      {stickyVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white p-3 z-40 flex justify-between items-center border-t-4 border-yellow-400">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🎉</span>
            <div>
              <p className="text-sm font-bold">¡Felicidades Usuario! Eres el visitante #1,000,000</p>
              <p className="text-xs text-blue-200">Reclama tu tarjeta de regalo antes de que expire el contador.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert('Simulación: Clic registrado en Adware')}
              className="bg-yellow-400 text-blue-950 font-bold text-xs px-4 py-2 rounded hover:bg-yellow-300"
            >
              RECLAMAR PREMIO
            </button>
            {/* Simula un botón de cierre falso que reaprece */}
            <button
              onClick={() => {
                setStickyVisible(false);
                setTimeout(() => setStickyVisible(true), 2000); // Reaparece a los 2s
              }}
              className="text-xs text-blue-300 underline px-2"
            >
              [X]
            </button>
          </div>
        </div>
      )}
    </>
  );
}