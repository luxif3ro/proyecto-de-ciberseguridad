import EstrellaSantaImeldaIcon from "@/public/estrellaSantaImelda.svg";
interface DivisorProps {
  TextoPrincipal: string;
  TextoSecundario: string;
}

export default function Divisor({
  TextoPrincipal,
  TextoSecundario,
}: DivisorProps) {
  return (
    <div className="md:pb-5 md:mb-5 mt-4 max-h-[24vh]">
      <div className="">
        <small className="text-secundario font-bold mb-1 text-[20px]">
          {TextoSecundario}
        </small>
        <h2 className="text-5xl font-extrabold text-principal">
          {TextoPrincipal}
        </h2>
        <div className="mb-5 flex items-center justify-center gap-3 before:h-0.5 before:w-full before:bg-divisor after:h-0.5 after:w-full after:bg-divisor py-2 ">
          <span className="text-xl">
            <EstrellaSantaImeldaIcon className="w-5 h-5 text-cafe-principal" />
          </span>
        </div>
      </div>
    </div>
  );
}
