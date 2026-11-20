"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapController from "./MapController";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createCustomIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

interface MapProps {
  Coordenadas: [number, number];
  Nombre: string;
  Descripcion: string;
  Color: string;
}
export default function Map({
  Coordenadas,
  Nombre,
  Descripcion,
  Color,
}: MapProps) {
  const customIcon = createCustomIcon(Color);

  return (
    <MapContainer
      center={Coordenadas}
      zoom={16}
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController Coordenadas={Coordenadas} />

      <Marker
        position={Coordenadas}
        icon={customIcon}
      >
        <Popup>
          <strong>{Nombre}</strong>
          <br />
          {Descripcion}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
