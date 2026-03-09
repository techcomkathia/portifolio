import { motion } from "framer-motion";

interface PontosSecaoProps {
	secoes: { id: string; label: string }[];
	indiceAtivo: number;
	aoNavegar: (indice: number) => void;
}

const PontosSecao = ({ secoes, indiceAtivo, aoNavegar }: PontosSecaoProps) => {
	return (
		<div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
			{secoes.map((secao, i) => (
				<button
					key={secao.id}
					onClick={() => aoNavegar(i)}
					className="group relative flex items-center justify-end"
					aria-label={secao.label}
				>
					{/* Tooltip do label */}
					<span className="absolute right-6 px-3 py-1 rounded-md bg-card text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
						{secao.label}
					</span>

					{/* Ponto */}
					<motion.div
						className={`w-2.5 h-2.5 rounded-full border transition-colors duration-300 ${
							i === indiceAtivo
								? "bg-primary border-primary shadow-[0_0_8px_hsl(var(--glow)/0.6)]"
								: "bg-transparent border-muted-foreground/40 hover:border-primary/60"
						}`}
						animate={i === indiceAtivo ? { scale: [1, 1.3, 1] } : { scale: 1 }}
						transition={{ duration: 0.4 }}
					/>
				</button>
			))}
		</div>
	);
};

export default PontosSecao;
