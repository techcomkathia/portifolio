import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
	{ rotulo: "Início", indice: 0 },
	{ rotulo: "Sobre", indice: 1 },
	{ rotulo: "Projetos", indice: 2 },
	{ rotulo: "Materiais", indice: 3 },
	{ rotulo: "Contato", indice: 4 },
];

interface BarraNavegacaoProps {
	secaoAtiva: number;
	aoNavegar: (indice: number) => void;
}

const BarraNavegacao = ({ secaoAtiva, aoNavegar }: BarraNavegacaoProps) => {
	const [menuMobileAberto, setMenuMobileAberto] = useState(false);

	const aoClicar = (indice: number) => {
		aoNavegar(indice);
		setMenuMobileAberto(false);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
		>
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				<button
					onClick={() => aoClicar(0)}
					className="font-mono font-bold text-xl text-primary text-glow"
				>
					&lt;káthia /&gt;
				</button>

				{/* Desktop */}
				<div className="hidden md:flex items-center gap-8">
					{links.map((link) => (
						<button
							key={link.indice}
							onClick={() => aoClicar(link.indice)}
							className={`font-mono text-sm transition-colors relative ${
								secaoAtiva === link.indice
									? "text-primary"
									: "text-muted-foreground hover:text-primary"
							}`}
						>
							{link.rotulo}
							{secaoAtiva === link.indice && (
								<motion.div
									layoutId="nav-underline"
									className="absolute -bottom-1 left-0 right-0 h-px bg-primary shadow-[0_0_8px_hsl(var(--glow)/0.5)]"
								/>
							)}
						</button>
					))}
				</div>

				{/* Mobile toggle */}
				<button
					onClick={() => setMenuMobileAberto(!menuMobileAberto)}
					className="md:hidden text-foreground"
				>
					{menuMobileAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuMobileAberto && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
					>
						<div className="container mx-auto px-6 py-4 flex flex-col gap-4">
							{links.map((link) => (
								<button
									key={link.indice}
									onClick={() => aoClicar(link.indice)}
									className={`font-mono text-sm text-left transition-colors ${
										secaoAtiva === link.indice
											? "text-primary"
											: "text-muted-foreground hover:text-primary"
									}`}
								>
									{link.rotulo}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default BarraNavegacao;
