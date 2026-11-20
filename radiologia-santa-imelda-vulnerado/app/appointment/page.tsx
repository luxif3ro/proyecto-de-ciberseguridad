"use client";
import Titles from "@/components/Titles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

interface Appointment {
  id: number;
  nombre: string;
  telefono: string;
  fecha_hora_cita: string;
  estudio: string;
  sucursal: string;
  descripcion: string;
}

async function fetchAppointments(): Promise<Appointment[]> {
  try {
    const response = await fetch("/api/citas");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return [];
  }
}

export default function Appointment() {
  const router = useRouter();
  const { user, loading, isAuthenticated } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
    };
    fetchData();
  }, [setAppointments]);

    useEffect(() => {

        if (!loading && !isAuthenticated) {
            router.replace("/appointment/addNew");
        }

    }, [
        loading,
        isAuthenticated,
        router
    ]);

    if (loading) {
        return <p>Comprobando sesión...</p>;
    }

    if (!isAuthenticated) {
        return null;
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="flex flex-row items-center content-center-safe gap-10 p-5">
          <Titles
          
          TextoPrincipal="Citas Programadas"
          TextoSecundario="Modulo administrativo"
        />
        <button className="p-2 bg-principal/80 text-white max-w-48 rounded-xl" onClick={()=>router.push("/appointment/addNew")}>Agregar una nueva cita</button>
        </div>
        <div className="bg-fondo-principal rounded-4xl border border-cafe-secundario p-4 shadow shadow-cafe-secundario">
          <div className="bg-cafe-secundario text-white font-bold rounded-t-lg p-4 grid grid-cols-21 gap-4">
            <p>ID</p>
            <p className="col-span-4">Nombre</p>
            <p className="col-span-3">Teléfono</p>
            <p className="col-span-4">Fecha y Hora de Cita</p>
            <p className="col-span-5">Estudio</p>
            <p className="col-span-4">Sucursal</p>
          </div>
          <div className="border border-cafe-secundario p-4 rounded-b-lg">
            {appointments.map((appoiment, index) => (
              <div key={index} className="grid grid-cols-21 gap-x-2">
                <p className="border-r-2 border-r-cafe-secundario/20">
                  {appoiment.id}
                </p>
                <p className="border-r-2 border-r-cafe-secundario/20 col-span-4">
                  {appoiment.nombre}
                </p>
                <p className="border-r-2 border-r-cafe-secundario/20 col-span-3">
                  {appoiment.telefono}
                </p>
                <p className="border-r-2 border-r-cafe-secundario/20 col-span-4">
                  {appoiment.fecha_hora_cita}
                </p>
                <p className="border-r-2 border-r-cafe-secundario/20 col-span-5">
                  {appoiment.estudio}
                </p>
                <p className="col-span-4">{appoiment.sucursal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
