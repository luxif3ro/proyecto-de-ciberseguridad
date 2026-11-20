"use client";

import { useState } from "react";
import Link from "next/link";
import HospitalIcon from "@/public/hospital.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-principal border-b-4 border-cafe-secundario">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-white font-bold text-xl md:text-2xl"
          >
            <HospitalIcon className="w-6 h-6 mr-2" />
            <span>Radiología Santa Imelda</span>
          </Link>

          {/* Botón para celular */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Menú para PC */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-white hover:text-secundario transition-colors"
            >
              Inicio
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-secundario transition-colors"
            >
              Sobre Nosotros
            </Link>

            <Link
              href="/services"
              className="text-white hover:text-secundario transition-colors"
            >
              Servicios
            </Link>

            <Link
              href="/location"
              className="text-white hover:text-secundario transition-colors"
            >
              Ubicación
            </Link>

            <Link
              href="/appointment"
              className="text-white hover:text-secundario transition-colors"
            >
              Citas
            </Link>
          </div>
        </div>

        {/* Menú desplegable para celular */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 border-t border-white/20 pt-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-secundario transition-colors"
            >
              Inicio
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-secundario transition-colors"
            >
              Nosotros
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-secundario transition-colors"
            >
              Servicios
            </Link>

            <Link
              href="/location"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-secundario transition-colors"
            >
              Ubicación
            </Link>

            <Link
              href="/appointment"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-secundario transition-colors"
            >
              Citas
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
