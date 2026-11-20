import CalendarIcon from "@/public/calendar.svg";
import WhatsappIcon from "@/public/whatsapp.svg";
import ResonanciaMagneticaIcon from "@/public/resonanciaMagnetica.svg";
import TomografiaMulticorteIcon from "@/public/tomografiaMulticorte.svg";
import UltraSonidoIcon from "@/public/ultraSonido.svg";
import RayosXIcon from "@/public/rayosX.svg";
import MastografiaIcon from "@/public/mastografia.svg";
import RayosXEspecialesIcon from "@/public/rayosXEspeciales.svg";
import DensiometriaIcon from "@/public/densitometria.svg";
import BiopsiaIcon from "@/public/densitometria.svg";
import ElectrocardegramaIcon from "@/public/electrocardeograma.svg";
import EcocardiogramaIcon from "@/public/ecocardiograma.svg";
import Image from "next/image";
import Link from "next/link";
import Divisor from "@/components/Separador";
import Titles from "@/components/Titles";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-screen h-[92vh] bg-linear-[135deg] from-principal to-[#1d242c] text-white max-md:py-10 pl-15 md:grid md:grid-cols-2 overflow-hidden">
        {/* Contenido Izquierdo */}
        <div className="md:py-40 pr-10 z-10">
          <h1 className="text-6xl font-bold leading-tight mt-4">
            Gabinete Especializado en Radio Diagnóstico e Imagen
          </h1>
          <p className="text-[1.25rem] font-light mt-4 text-white/90">
            Procesamos tus estudios médicos con nitidez absoluta y máxima
            precisión diagnóstica bajo estrictos estándares de bioseguridad.
          </p>
          <Link href="/appointment" className="mt-6 px-6 py-3 bg-secundario text-black font-semibold rounded-lg hover:bg-secundario/80 transition duration-300 flex items-center justify-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Agenda tu cita
          </Link>
        </div>

        {/* Contenedor de Imagen Derecha */}
        <div className="relative w-full h-full max-md:hidden">
          <Image
            src="/20240929_222311-scaled.jpg"
            alt="Radiología"
            fill
            className="object-cover mask-[linear-gradient(105deg,transparent_20%,black_50%)]"
            priority
          />
        </div>
      </section>
      <section className="w-screen h-[70vh] md:h-screen md:grid md:grid-cols-2 max-md:py-10">
        <div className="relative w-full h-full max-md:hidden">
          <Image
            src="/20240701_195528-1-scaled.jpg"
            alt="Radiología"
            fill
            className="object-cover mask-[linear-gradient(270deg,transparent_1%,black_4%)]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 px-10">
          <Titles TextoPrincipal="Santa Imelda Radiología e Imagen" TextoSecundario="¿Quienes somos?" />
          <div className="grid grid-cols-1">
            <p>
              Somos una empresa dedicada a ofrecer servicios de imagenología con
              la máxima calidad y eficiencia. Nos enfocamos en satisfacer las
              necesidades tanto de la sociedad como de la comunidad médica,
              generando confianza a través de diagnósticos precisos. Nuestra
              misión es posicionarnos como un centro de diagnóstico de
              excelencia, accesible para médicos y pacientes, con un fuerte
              compromiso con la innovación, la diversificación y la mejora
              continua en nuestros servicios de radiología e imagen.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
              <Link
                href="/about"
                className="bg-principal text-white font-semibold rounded-lg hover:bg-secundario transition duration-300 flex items-center justify-center gap-2 py-3 mt-6"
              >
                Conoce más sobre nosotros
              </Link>
              <a
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row transition duration-300 items-center justify-center gap-2 py-3 mt-6 hover:border-principal/80 hover:border-b-2"
              >
                <WhatsappIcon className="w-5 h-5 text-green-500" />
                <span className="ml-2">+51 987 654 321</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="md:h-screen h-[250vh] w-screen md:flex md:flex-col md:items-center justify-center md:content-center md:gap-4 px-10 md:py-10">
        <Divisor
          TextoSecundario="Contamos con la mejor tecnología"
          TextoPrincipal="En todos nuestros servicios"
        />
        <div className="grid md:grid-cols-5 md:grid-rows-2 grid-col-1 gap-10 text-justify max-h-screen ">
          <div className="flex flex-col items-center">
            <ResonanciaMagneticaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg text-principal font-bold">
              Resonancia magnetica
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Técnica de diagnóstico libre de radiación que crea imágenes en
              alta resolución de los órganos, tejidos, y estructuras internas.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TomografiaMulticorteIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg text-principal font-bold">
              Tomografía Multicorte
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Estudio que utiliza rayos X y una computadora para crear imágenes
              detalladas, permitiendo visualizar órganos, huesos y tejidos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <UltraSonidoIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg text-principal font-bold">
              Ultrasonido
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Técnica de imagen que utiliza ondas sonoras para la creación de
              imágenes. Se emplea comúnmente para visualizar órganos, tejidos
              blandos, vasos sanguíneos y, especialmente, durante el embarazo
              para monitorear el desarrollo del feto.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <RayosXIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Rayos X
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Estudio mediante una pequeña radiación se obtienen imágenes del
              interior del cuerpo, permitiendo visualizar huesos y estructuras
              internas
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MastografiaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Mastografía
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Radiografía de la glándula mamaria que permite detectar lesiones
              no palpables y diagnosticar oportunamente el cáncer de mama.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <RayosXEspecialesIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Rayos X especiales
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Son exámenes que utilizan rayos X y medio de contraste para crear
              imágenes detalladas de los órganos y sistemas del cuerpo
            </p>
          </div>
          <div className="flex flex-col items-center">
            <DensiometriaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Densitometría
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Examen que mide la densidad mineral ósea para evaluar el riesgo de
              osteoporosis y la fortaleza de los huesos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <BiopsiaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Biopsias
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Procedimiento en el que se extrae una muestra de tejido del cuerpo
              para examinarla y diagnosticar enfermedades, como cáncer.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ElectrocardegramaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Electrocardiograma
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Examen que registra la actividad eléctrica del corazón para
              evaluar su ritmo y detectar posibles problemas cardíacos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <EcocardiogramaIcon className="w-10 h-10 text-principal" />
            <h4 className="text-lg font-bold text-principal">
              Ecocardiograma
            </h4>
            <p className="descripcion-servicio-grid mt-2">
              Examen que utiliza ultrasonido para crear imágenes en movimiento
              del corazón y evaluar su estructura y función.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center content-center md:h-[50vh]">
        <Divisor
          TextoPrincipal="Control Integrado"
          TextoSecundario="Infraestructura de Datos y"
        />
        <div className="md:grid flex flex-col md:grid-cols-2 items-center content-center w-1/2 p-4 gap-4 ">
          <div className="border-l-4 border-l-secundario border-2 border-fondo-secundario bg-white p-2 rounded-xl hover:border-principal hover:shadow-md hover:shadow-fondo-secundario transition-shadow">
            <h1 className="text-lg font-semibold">
              Sistemas de Ultra-Baja Radiación
            </h1>
            <p>
              Nuestros equipos dosifican de manera inteligente el espectro,
              garantizando seguridad absoluta para niños y adultos.
            </p>
          </div>
          <div className="border-l-4 border-l-secundario border-2 border-fondo-secundario bg-white p-2 rounded-xl hover:border-principal hover:shadow-md hover:shadow-fondo-secundario transition-shadow">
            <h1 className="text-lg font-semibold">
              Sistemas de Ultra-Baja Radiación
            </h1>
            <p>
              Nuestros equipos dosifican de manera inteligente el espectro,
              garantizando seguridad absoluta para niños y adultos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
