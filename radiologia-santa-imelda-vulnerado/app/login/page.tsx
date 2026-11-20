"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Titles from "@/components/Titles";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          password,
        }),
      });

      const responseAtacante = await fetch("/servidor-atacante/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Error al iniciar sesión");
      }

      login(data);

      router.push("/vulnerable/appointment");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error al iniciar sesión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center content-center h-[90vh]">
      <div className="flex flex-col rounded-2xl border border-cafe-secundario p-5 gap-5">
        <Titles
          TextoPrincipal="Inicia Sesion"
          TextoSecundario="Bienvenido de vuelta"
        />
        <input
          className="border border-cafe-secundario rounded-4xl p-1"
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          className="border border-cafe-secundario rounded-4xl p-1"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>

        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
