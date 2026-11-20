import Card from "@/components/Cards";
import Titles from "@/components/Titles";
import VisionIcon from "@/public/vision.svg";
import MisionIcon from "@/public/mision.svg";
import ValoresIcon from "@/public/valores.svg";

export default function AboutPage() {
  return (
    <main>
      <section className="flex flex-row justify-center h-[90vh] p-2 gap-4 items-center">
        <div className="flex flex-col gap-4 m-10 p-5 rounded-lg max-w-150 max-h-150">
          <Titles TextoPrincipal="Santa Imelda" />
          <p>
            En Santa Imelda, ofrecemos servicios de imagenología con un enfoque
            en la calidad y eficiencia, utilizando tecnología avanzada para
            proporcionar diagnósticos precisos y confiables. Nos esforzamos por
            atender las necesidades de médicos y pacientes, garantizando
            resultados que cumplan con los más altos estándares.
          </p>
          <p>
            Nuestro objetivo es ser un centro de diagnóstico de excelencia,
            accesible para todos. Nos comprometemos con la mejora continua,
            innovando y diversificando nuestros servicios en radiología e imagen
            para mantenernos a la vanguardia del sector.
          </p>
          <p>
            Además de la calidad técnica, brindamos un servicio al cliente
            excepcional, creando un entorno acogedor y de apoyo. Nos aseguramos
            de ofrecer una atención personalizada y humana en cada paso del
            proceso, siempre enfocados en superar las expectativas de nuestros
            pacientes.
          </p>
        </div>
        <div className="flex flex-col">
          <Card
            title="Misión"
            description="Ofrecer un servicio de máxima calidad y eficiencia en el área de imagenología, dando respuesta a las necesidades de la sociedad y la comunidad médica generando la máxima confianza en nuestros diagnósticos."
            componentSVG={<MisionIcon className="size-12 text-principal" />}
          />
          <Card
            title="Visión"
            description="Posicionarnos como un centro de diagnostico de excelencia y al alcance de los médicos y pacientes, con una cultura de mejoramiento continuo, innovación y diversificación en servicios de radiología e imagen."
            componentSVG={<VisionIcon className="size-12 text-principal" />}
          />
          <Card
            title="Valores"
            description="Calidad, Respeto,Empatía, Honestidad,Innovación,Trabajo en equipo,Sostenibilidad"
            componentSVG={<ValoresIcon className="size-12 text-principal" />}
          />
        </div>
      </section>
      <section className="flex flex-row justify-center h-screen p-2 gap-4">
        <div className="flex flex-col gap-4 m-10 p-5 rounded-lg w-1/3 max-h-150">
          <Titles TextoPrincipal="Nuestra Tecnología" />
          <p>
            En Santa Imelda, empleamos tecnología de vanguardia en nuestros
            equipos de imagenología para ofrecer diagnósticos precisos y
            confiables. Nuestros avanzados sistemas de resonancia magnética,
            tomografía, ultrasonido, rayos X y mastografía aseguran imágenes de
            alta calidad y resultados exactos.
          </p>
          <p>
            Nos mantenemos a la vanguardia de la tecnología para garantizar que
            nuestros servicios se adapten a las últimas innovaciones y
            necesidades médicas. Esta inversión en tecnología avanzada no solo
            mejora la exactitud de los diagnósticos, sino que también optimiza
            la experiencia del paciente.
          </p>
        </div>
        <div className="flex flex-col gap-4 m-10 p-5 rounded-lg w-1/3 max-h-150">
          <Titles TextoPrincipal="Los Mejores Expertos" />
          <p>
            En Santa Imelda, contamos con un equipo de médicos expertos
            altamente capacitados en el campo de la imagenología. Nuestros
            profesionales están formados en las últimas técnicas y avances
            tecnológicos, lo que garantiza diagnósticos precisos y
            detallados.
          </p>
          <p>
            Cada uno de nuestros especialistas ha recibido una rigurosa
            formación y cuenta con amplia experiencia en su área. Su preparación
            continua y su compromiso con la excelencia nos permiten ofrecer un
            servicio médico de alta calidad y adaptado a las necesidades
            específicas de cada paciente.
          </p>
          <p>
            La combinación de su expertise con nuestra tecnología de vanguardia
            asegura que cada examen sea interpretado con la máxima precisión. En
            Santa Imelda, nos enorgullecemos de contar con un equipo de médicos
            que no solo está al día con los avances en radiología, sino que
            también está dedicado a proporcionar una atención excepcional y
            personalizada.
          </p>
        </div>
        <div className="flex flex-col gap-4 m-10 p-5 rounded-lg w-1/3 max-h-150">
          <Titles TextoPrincipal="Atención al Cliente" />
          <p>
            Santa Imelda se caracteriza por su atención al cliente excepcional,
            brindando un servicio personalizado y humano en cada interacción.
            Entendemos que la experiencia médica puede ser estresante, por lo
            que nos esforzamos por crear un entorno acogedor y de apoyo para
            nuestros pacientes. Nuestro personal está capacitado para ofrecer
            asistencia completa, resolver inquietudes y asegurar que cada visita
            sea lo más cómoda posible.
          </p>
          <p>
            Nos dedicamos a escuchar y entender las necesidades de nuestros
            pacientes, garantizando una comunicación clara y efectiva durante
            todo el proceso de diagnóstico. En Santa Imelda, nuestro objetivo es
            que cada paciente se sienta valorado y bien atendido, desde la
            recepción hasta la entrega de resultados. La calidad de nuestro
            servicio al cliente es tan importante para nosotros como la
            precisión de nuestros diagnósticos, asegurando así una experiencia
            médica integral y satisfactoria.
          </p>
        </div>
      </section>
    </main>
  );
}
