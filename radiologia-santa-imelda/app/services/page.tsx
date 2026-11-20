import Badge from "@/components/Badge";
import Disclosure from "@/components/Disclosure";
import Divisor from "@/components/Separador";

export default function Services() {
  const Services = [
    {
      Titulo: "Resonancia Magnética",
      Tipos: [
        "Abdomen",
        "Abdominopélvica",
        "Cadera",
        "Codo",
        "Colangioresonancia",
        "Columna cervical",
        "Columna dorsal",
        "Columna lumbar",
        "Corazón",
        "Encéfalo",
        "Enteroresonancia",
        "Hipófisis",
        "Hombro",
        "Mama",
        "Muñeca",
        "Muslo",
        "Neuroeje",
        "Oído",
        "Pasting",
        "Pelvis",
        "Pie",
        "Pierna",
        "Próstata multiparamétrica",
        "Rodilla",
        "Temporomandibular",
        "Tobillo",
        "Angiorm cerebral",
        "Angiorm abdominal",
        "Angiorm aorta abdominal",
        "Angiorm miembro torácico",
        "Angiorm miembros pélvicos",
        "Angiorm troncos supra y cerebral",
        "Angiorm troncos supraaorticos",
      ],
    },
    {
      Titulo: "Tomografía Multicorte",
      Tipos: [
        "Abdominopélvica",
        "Cadera",
        "Codo",
        "ColoTC",
        "Columna cervical",
        "Columna lumbar",
        "Cráneo",
        "Cuello",
        "Hombro",
        "Laringe",
        "Macizo facial",
        "Muñeca",
        "Orbitas u oídos",
        "Rodilla",
        "Score de calcio coronario",
        "Senos paranasales",
        "Tobillo",
        "Tórax",
        "Urotomografía",
        "AngioTC abdominopélvica fase venosa",
        "AngioTC aorta abdominal",
        "AngioTC aorta abdominal y miembros pélvicos",
        "AngioTC aorta torácica",
        "AngioTC aorta toraco-abdominal",
        "AngioTC carótidas",
        "AngioTC cerebral",
        "AngioTC coronaria",
        "AngioTC miembros pélvicos",
        "AngioTC miembros superiores",
        "AngioTC pulmonar",
        "AngioTC renal",
        "AngioTC toraco-abdominal",
        "AngioTC tronco supraaórtico",
        "AngioTC tronco supraaórtico y cerebral",
        "FleboTC miembros pélvicos",
      ],
    },
    {
      Titulo: "Ultrasonido",
      Tipos: [
        "Abdomen superior (hígado y vías biliares)",
        "Abdomen total",
        "Cuello",
        "Elastografía hepática",
        "Inguinal",
        "Musculoesquelético",
        "Obstétrico convencional",
        "Obstétrico Doppler",
        "Obstétrico perfil biofísico",
        "Obstétrico estructural",
        "Obstétrico genético",
        "Pared abdominal",
        "Pélvico",
        "Prostático",
        "Renal y vías urinarias",
        "Seguimiento folicular",
        "Tejidos blandos",
        "Testicular",
        "Tiroides",
        "Transfontanelar",
        "Doppler abdominal",
        "Doppler arterial de miembro pélvico",
        "Doppler venoso de miembro pélvico",
        "Doppler carotideo",
        "Doppler renal",
        "Doppler testicular",
      ],
    },
    {
      Titulo: "Rayos X",
      Tipos: [
        "Abdomen",
        "Antebrazo",
        "Rotula",
        "Cefalopelvimetría",
        "Codo",
        "Columna cervical",
        "Columna dorsal",
        "Columna lumbar",
        "Cráneo",
        "Dedo",
        "Econometría, radiometría y medición de miembros pélvicos",
        "Fémur",
        "Hombro",
        "Humero",
        "Lateral de cuello",
        "Mano",
        "Muñeca",
        "Pelvis",
        "Perfilograma",
        "Pie",
        "Rodilla",
        "Eje mecánico",
        "Senos paranasales",
        "Tele de tórax",
        "Tibia y peroné",
        "Tobillo",
        "Tórax",
      ],
    },
    {
      Titulo: "Rayos X Especiales",
      Tipos: [
        "Cistograma miccional",
        "Colangiografía",
        "Colon por enema",
        "Esofagograma",
        "Fistulografía",
        "Histerosalpingografía",
        "Serie esofagogastroduodenal",
        "Sialografía parotídea",
        "Tránsito colónico",
        "Tránsito intestinal",
        "Uretrografía",
        "Urografía excretora",
      ],
    },
    {
      Titulo: "Mastografía",
      Tipos: [
        "Mastografía",
        "Mastografía con implantes",
      ],
    },
    {
      Titulo: "Biopsias",
      Tipos: [
        "Biopsia de próstata",
        "Biopsia de tiroides",
        "Biopsia de mama por ultrasonido",
        "Biopsia de mama por estereotaxia"
      ]
    },
    {
      Titulo: "Densitometría",
      Tipos: [
        "Columna y cadera",
      ],
    }
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-10 gap-4">
      <div>
        <Divisor TextoPrincipal="Catálogo de Especialidades" TextoSecundario="Estudios Disponibles" />
        <p className="max-w-xl text-center">
          Haz clic sobre cualquiera de nuestras áreas médicas para desplegar de
          forma interactiva las regiones y variantes de estudio que procesamos.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        {Services.map((service, index) => (
          <Disclosure key={index} title={service.Titulo}>
            <div className="flex flex-wrap gap-2">
              {service.Tipos.map((tipo, index) => (
                <Badge key={index} text={tipo} />
              ))}
            </div>
          </Disclosure>
        ))}
      </div>
    </main>
  );
}
