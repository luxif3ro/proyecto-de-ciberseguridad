interface CardProps {
  title: string;
  description: string;
  componentSVG: React.ReactNode;
}

export default function Card({ title, description, componentSVG }: CardProps) {
  return (
    <div className="flex flex-row gap-4 m-3 p-4 bg-fondo-secundario rounded-3xl max-w-150 max-h-150 items-center">
      <div className="flex justify-center">{componentSVG}</div>
      <div>
        <h2 className="text-xl font-bold text-principal">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
