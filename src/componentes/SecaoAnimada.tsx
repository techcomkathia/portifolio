import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface SecaoAnimadaProps {
	children: ReactNode;
	ativa: boolean;
	direcao?: "cima" | "baixo" | "esquerda" | "direita";
	classe?: string;
}

const variantes = {
	hidden: (direcao: string) => {
		const mapa: Record<string, { opacity: number; y?: number; x?: number; scale?: number }> = {
			cima: { opacity: 0, y: 80, scale: 0.97 },
			baixo: { opacity: 0, y: -80, scale: 0.97 },
			esquerda: { opacity: 0, x: 80, scale: 0.97 },
			direita: { opacity: 0, x: -80, scale: 0.97 },
		};
		return mapa[direcao] || mapa.cima;
	},
	visible: {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			staggerChildren: 0.1,
			delayChildren: 0.15,
		},
	},
	exit: (direcao: string) => {
		const mapa: Record<string, { opacity: number; y?: number; x?: number; scale?: number }> = {
			cima: { opacity: 0, y: -60, scale: 0.97 },
			baixo: { opacity: 0, y: 60, scale: 0.97 },
			esquerda: { opacity: 0, x: -60, scale: 0.97 },
			direita: { opacity: 0, x: 60, scale: 0.97 },
		};
		return mapa[direcao] || mapa.cima;
	},
} as Variants;

export const variantesFilho = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
	},
};

const SecaoAnimada = ({
	children,
	ativa,
	direcao = "cima",
	classe = "",
}: SecaoAnimadaProps) => {
	return (
		<motion.div
			custom={direcao}
			initial="hidden"
			animate={ativa ? "visible" : "hidden"}
			variants={variantes}
			className={classe}
		>
			{children}
		</motion.div>
	);
};

export default SecaoAnimada;
