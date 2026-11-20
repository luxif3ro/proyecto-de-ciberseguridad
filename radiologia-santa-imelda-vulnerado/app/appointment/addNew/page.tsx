"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Titles from "@/components/Titles";

const estudios = [
  "Resonancia Magnetica",
  "Tomografía Multicorte",
  "Ultrasonido",
  "Rayos X",
  "Rayos X especiales",
  "Mastografia",
  "Biopsias",
  "Densitometría",
];

const sucursales = ["Matriz", "Norte", "Trojes", "Galerias"];

export default function AddNew() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaHoraCita, setFechaHoraCita] = useState("");
  const [estudio, setEstudio] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          telefono,
          fecha_hora_cita: fechaHoraCita,
          estudio,
          sucursal,
          descripcion,
        }),
      });

      const responseAtacante = await fetch("/servidor-atacante/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          telefono,
          fecha_hora_cita: fechaHoraCita,
          estudio,
          sucursal,
          descripcion,
        }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "No se pudo crear la cita");
      }

      setSuccess("Cita creada correctamente");

      // Limpiar formulario
      setNombre("");
      setTelefono("");
      setFechaHoraCita("");
      setEstudio("");
      setSucursal("");
      setDescripcion("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error al crear la cita");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[90vh] items-center justify-center">
      <div className="w-full max-w-2xl border-2 border-cafe-secundario p-6 rounded-xl bg-fondo-principal shadow-lg">
        <Titles TextoPrincipal="Proxima Cita con nosotros" TextoSecundario="Registra tu"/>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          {/* Nombre */}

          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="font-semibold">
              Nombre
            </label>

            <input
              id="nombre"
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="border border-cafe-secundario rounded-lg p-3 bg-transparent outline-none focus:ring-2 focus:ring-cafe-secundario"
            />
          </div>

          {/* Teléfono */}

          <div className="flex flex-col gap-1">
            <label htmlFor="telefono" className="font-semibold">
              Teléfono
            </label>

            <input
              id="telefono"
              type="tel"
              placeholder="4491234567"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="border border-cafe-secundario rounded-lg p-3 bg-transparent outline-none focus:ring-2 focus:ring-cafe-secundario"
            />
          </div>

          {/* Fecha */}

          <div className="flex flex-col gap-1">
            <label htmlFor="fecha" className="font-semibold">
              Fecha y hora de cita
            </label>

            <input
              id="fecha"
              type="datetime-local"
              value={fechaHoraCita}
              onChange={(e) => setFechaHoraCita(e.target.value)}
              required
              className="border border-cafe-secundario rounded-lg p-3 bg-transparent outline-none focus:ring-2 focus:ring-cafe-secundario"
            />
          </div>

          {/* Estudio */}

          <div className="flex flex-col gap-1">
            <label htmlFor="estudio" className="font-semibold">
              Estudio
            </label>

            <select
              id="estudio"
              value={estudio}
              onChange={(e) => setEstudio(e.target.value)}
              required
              className="border border-cafe-secundario rounded-lg p-3 bg-fondo-principal outline-none focus:ring-2 focus:ring-cafe-secundario"
            >
              <option value="">Selecciona un estudio</option>

              {estudios.map((estudio) => (
                <option key={estudio} value={estudio}>
                  {estudio}
                </option>
              ))}
            </select>
          </div>

          {/* Descripción */}

          <div className="flex flex-col gap-1 row-span-2">
            <label htmlFor="descripcion" className="font-semibold">
              Descripción
            </label>

            <textarea
              id="descripcion"
              placeholder="Descripción adicional de la cita"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={4}
              className="border border-cafe-secundario rounded-lg p-3 bg-transparent outline-none resize-none focus:ring-2 focus:ring-cafe-secundario"
            />
          </div>

          {/* Sucursal */}

          <div className="flex flex-col gap-1">
            <label htmlFor="sucursal" className="font-semibold">
              Sucursal
            </label>

            <select
              id="sucursal"
              value={sucursal}
              onChange={(e) => setSucursal(e.target.value)}
              required
              className="border border-cafe-secundario rounded-lg p-3 bg-fondo-principal outline-none focus:ring-2 focus:ring-cafe-secundario"
            >
              <option value="">Selecciona una sucursal</option>

              {sucursales.map((sucursal) => (
                <option key={sucursal} value={sucursal}>
                  {sucursal}
                </option>
              ))}
            </select>
          </div>

          {/* Error */}

          {error && (
            <div className="rounded-lg border border-red-400 bg-red-100 p-3 text-red-700">
              {error}
            </div>
          )}

          {/* Éxito */}

          {success && (
            <div className="rounded-lg border border-green-400 bg-green-100 p-3 text-green-700">
              {success}
            </div>
          )}

          {/* Botones */}

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => router.push("/appointment")}
              className="border border-cafe-secundario rounded-lg px-5 py-2 hover:bg-cafe-secundario/10 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-cafe-secundario text-white rounded-lg px-5 py-2 font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Guardando..." : "Guardar Cita"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
