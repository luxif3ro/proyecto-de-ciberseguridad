interface BadgeProps {
    text: string;
}

export default function Badge({ text }: BadgeProps) {
    return (
        <span className="inline-block bg-fondo-secundario border-l-3 border-l-cafe-principal font-semibold px-2 py-1 rounded-lg">
            {text}
        </span>
    );
}