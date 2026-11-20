"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapControllerProps {
  Coordenadas: [number, number];
}

export default function MapController({
  Coordenadas,
}: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(Coordenadas, 16, {
      duration: 1.5,
    });
  }, [Coordenadas, map]);

  return null;
}