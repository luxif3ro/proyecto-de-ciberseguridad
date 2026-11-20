import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HospitalIcon from "@/public/hospital.svg";
import TelephoneIcon from "@/public/telephone.svg";
import MailIcon from "@/public/envelope.svg";
import UserIcon from "@/public/person.svg";
import Link from "next/link";
import { AuthProvider } from "./context/AuthContext";
import Adware from "@/components/AdwareSimulator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radiologia Santa Imelda",
  description: "Pagina web de la clínica Radiología Santa Imelda",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden scrollbar-thumb-blue-50">
        <NavBar />
        <AuthProvider>{children}</AuthProvider>
        <footer className="bg-black md:h-[40vh] text-white/85 grid grid-cols-1 rounded-t-4xl mt-4 max-md:mt-8">
          <div className="w-full grid md:grid-cols-3 gap-6 p-8 items">
            <div className="flex flex-col items-center text-white font-bold gap-3 max-md:border-b max-md:py-2 border-gray-500 md:border-r">
              <div className="flex items-center">
                <HospitalIcon className="w-6 h-6 mr-2" />
                <h1 className="text-2xl font-bold">Radiología Santa Imelda</h1>
              </div>
              <p className="text-lg font-light">
                Gabinete de diagnóstico por imagen comprometido con la
                excelencia clínica, la calidez humana y la precisión
                tecnológica.
              </p>
              <Adware/>
            </div>
            <div className="flex flex-col max-md:border-b max-md:py-2 border-gray-500 md:border-r">
              <h3 className="text-lg font-bold">Enlaces Rapidos</h3>
              <div className="flex flex-col space-y-4 max-md:flex-row max-md:space-x-4">
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
            <div className="flex flex-col gap-5 items-center text-white font-bold text-xl md:text-2xl">
              <h3 className="text-lg font-bold">Enlaces Rapidos</h3>
              <div className="flex flex-col space-y-4 max-md:flex-row max-md:space-x-4">
                <div className="flex items-center gap-2">
                  <TelephoneIcon className="w-4 h-4" />
                  <a
                    href="https://wa.me/+524491234567"
                    className="text-md font-light"
                  >
                    Central: 449-123-4567
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <p className="text-md font-light">
                    {" "}
                    info@radiologiasantaimelda.com
                  </p>
                </div>
              </div>
              <Link
                href="/login"
                className="text-base gap-1 font-light hover:font-bold p-3 flex items-center border border-secundario rounded-lg hover:bg-secundario transition-colors "
              >
                <UserIcon className="size-5" />
                Acceso Administrativo
              </Link>
            </div>
          </div>
          <div className="flex items-center max-md:border-t max-md:border-gray-500 w-full content-center justify-center max:md:p-3">
            <p>
              © 2026 - Radiología Santa Imelda. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
