"use client";

import MapClient from "@/components/MapClient";
import React from "react";
import WhatsappIcon from "@/public/whatsapp.svg";
import TelephoneIcon from "@/public/telephone.svg";
import Titles from "@/components/Titles";

enum Sucursales {
  MATRIZ,
  TROJES,
  GALERIAS,
  NORTE,
}

const sucursales = {
  [Sucursales.MATRIZ]: {
    coordenadas: [21.871952910167714, -102.3249193188733] as [number, number],
    nombre: "Santa Imelda Matriz",
    descripcion:
      "Blvd Juan Pablo II 1012, Sta Imelda, 20218 Aguascalientes, Ags.",
    color: "#2E7E95",
    horarios: ["8:00 am - 8:00 pm", "8:00 am - 6:00 pm"],
    telefonos: ["449-377-2110", "449-377-2111"],
    whatsapp: "449-220-3900",
    clase_carta: "bg-fondo-principal ",
    clase_carta_titulo: "bg-fondo-secundario text-principal ",
  },

  [Sucursales.TROJES]: {
    coordenadas: [21.932248738373424, -102.29886780823772] as [number, number],
    nombre: "Santa Imelda Trojes",
    descripcion:
      "Plaza Tribeca, Av. Independencia #2102, Esq, Av. Montenegro Local 14, Trojes de Alonso, 20115 Aguascalientes, Ags.",
    color: "#E66D98",
    horarios: ["8:00 am - 7:00 pm", "8:00 am - 2:00 pm"],
    telefonos: ["449-551-1895"],
    whatsapp: "449-288-6244",
    clase_carta: "bg-trojes-blanco ",
    clase_carta_titulo: "bg-trojes-secundario/60 text-trojes-principal ",
  },

  [Sucursales.GALERIAS]: {
    coordenadas: [21.922346565996406, -102.29778421721542] as [number, number],
    nombre: "Santa Imelda Galerías",
    descripcion:
      "Av Independencia 1861, Desarrollo Especial Galerías, 20124 Aguascalientes, Ags.",
    color: "#2E7E95",
    horarios: ["8:00 am - 8:00 pm", "8:00 am - 2:00 pm"],
    telefonos: ["449-238-8625", "449-914-9398"],
    whatsapp: "449-466-8144",
    clase_carta: "bg-fondo-principal ",
    clase_carta_titulo: "bg-fondo-secundario text-principal ",
  },

  [Sucursales.NORTE]: {
    coordenadas: [21.898138712257413, -102.30387819580402] as [number, number],
    nombre: "Santa Imelda Norte",
    descripcion:
      "Av. de la Convención de 1914 Nte. 1706-B-1706-B, Circunvalación Nte., 20020 Aguascalientes, Ags.",
    color: "#2E7E95",
    horarios: ["8:00 am - 8:00 pm", "8:00 am - 2:00 pm"],
    telefonos: ["449-239-0503", "449-239-4546"],
    whatsapp: "449-487-6746",
    clase_carta: "bg-fondo-principal ",
    clase_carta_titulo: "bg-fondo-secundario text-principal ",
  },
};

export default function Location() {
  const [sucursal, setSucursal] = React.useState<Sucursales>(Sucursales.MATRIZ);

  const actual = sucursales[sucursal];

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-10">
      <div>
        <Titles TextoPrincipal="Ubicación de Sucursales" TextoSecundario="Encuentra la sucursal más cercana a ti" />
      </div>
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setSucursal(Sucursales.MATRIZ)}
          className={sucursal === Sucursales.MATRIZ ? "rounded-lg border px-4 py-2 bg-secundario text-white" : "rounded-lg border px-4 py-2"}
        >
          {sucursales[Sucursales.MATRIZ].nombre}
        </button>
        <button
          onClick={() => setSucursal(Sucursales.TROJES)}
          className={sucursal === Sucursales.TROJES ? "rounded-lg border px-4 py-2 bg-trojes-secundario/60 text-white" : "rounded-lg border px-4 py-2"}
        >
          {sucursales[Sucursales.TROJES].nombre}
        </button>
        <button
          onClick={() => setSucursal(Sucursales.GALERIAS)}
          className={sucursal === Sucursales.GALERIAS ? "rounded-lg border px-4 py-2 bg-secundario text-white" : "rounded-lg border px-4 py-2"}
        >
          {sucursales[Sucursales.GALERIAS].nombre}
        </button>
        <button
          onClick={() => setSucursal(Sucursales.NORTE)}
          className={sucursal === Sucursales.NORTE ? "rounded-lg border px-4 py-2 bg-secundario text-white" : "rounded-lg border px-4 py-2"}
        >
          {sucursales[Sucursales.NORTE].nombre}
        </button>
      </div>
      <div className="w-full flex justify-center flex-row gap-4">
        <div className={actual.clase_carta + "flex flex-col gap-4 w-full max-w-md rounded-4xl border border-cafe-secundario"}>
          <div className={actual.clase_carta_titulo + "rounded-t-4xl p-4 font-bold"}>
            <h2 className="text-2xl font-bold">{actual.nombre}</h2>
          </div>
          <div className="p-4 border-b-2 border-gray-200">
            <h3 className="text-lg font-semibold">Dirección</h3>
            <p className="text-gray-600">{actual.descripcion}</p>
          </div>
          <div className="p-4 border-b-2 border-gray-200">
            <h3 className="text-lg font-semibold">Horarios de Atención</h3>
            <p className="text-gray-600">
              <strong>Lunes a Viernes:</strong> {actual.horarios[0]}
            </p>
            <p className="text-gray-600">
              <strong>Sábados:</strong> {actual.horarios[1]}
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Contacto Directo</h3>
            <p className="text-gray-600 flex items-center flex-row gap-1">
              <TelephoneIcon className="w-5 h-5" />

              <strong>
                {actual.telefonos.length > 1 ? "Teléfonos:" : "Teléfono:"}
              </strong>{" "}
              {actual.telefonos.join(" / ")}
            </p>
            <p className="text-gray-600 flex items-center flex-row gap-1">
              <WhatsappIcon className="w-5 h-5 text-green-500" />
              <strong>WhatsApp:</strong> {actual.whatsapp}
            </p>
          </div>
        </div>
        <div className="w-full rounded-4xl overflow-hidden shadow-2xl">
          <MapClient
          Coordenadas={actual.coordenadas}
          Nombre={actual.nombre}
          Descripcion={actual.descripcion}
          Color={actual.color}
        />
        </div>
      </div>
    </main>
  );
}
