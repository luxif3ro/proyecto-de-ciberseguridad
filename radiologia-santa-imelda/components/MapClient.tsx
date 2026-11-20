"use client";

import dynamic from "next/dynamic";

interface MapClientProps {
  Coordenadas: [number, number];
  Nombre: string;
  Descripcion: string;
   Color: string;
}

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-125 w-full items-center justify-center">
      Cargando mapa...
    </div>
  ),
});

export default function MapClient({
  Coordenadas,
  Nombre,
  Descripcion,
  Color,
}: MapClientProps) {
  return (
    <Map
      Coordenadas={Coordenadas}
      Nombre={Nombre}
      Descripcion={Descripcion}
      Color={Color}
    />
  );
}