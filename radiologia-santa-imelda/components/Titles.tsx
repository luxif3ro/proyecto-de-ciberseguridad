interface TitlesProps {
  TextoPrincipal: string;
  TextoSecundario?: string;
}

export default function Titles({
  TextoPrincipal,
  TextoSecundario,
}: TitlesProps) {
  return (
    <>
      {TextoSecundario ? (
        <div className="border-b-4 border-cafe-secundario pb-5 mb-5">
          <small className="text-secundario font-bold mb-1 text-[20px]">
            {TextoSecundario}
          </small>
          <h2 className="text-5xl font-extrabold text-principal">
            {TextoPrincipal}
          </h2>
        </div>
      ) : (
        <div className="border-b-4 border-cafe-secundario pb-5 mb-5">
          <h2 className="text-5xl font-extrabold text-principal">
            {TextoPrincipal}
          </h2>
        </div>
      )}
    </>
  );
}
