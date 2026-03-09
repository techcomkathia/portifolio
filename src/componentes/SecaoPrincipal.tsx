import { motion } from "framer-motion";
import EfeitoDigitacao from "./EfeitoDigitacao";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const SecaoPrincipal = ({ ativo: _ativo, aoNavegar }: { ativo?: boolean; aoNavegar?: (indice: number) => void }) => {
	return (
		<section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
			{/* Efeito scan line */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="animate-scan-line absolute left-0 w-full h-px bg-primary/10" />
			</div>

			{/* Orbes flutuantes */}
			<div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
			<div className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl"
				>
					<p className="font-mono text-primary mb-4 text-sm tracking-widest uppercase">
						&gt; Olá, Mundo!
					</p>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 leading-tight gradient-text text-glow">
						Káthia Rocha Sá
					</h1>

					<div className="text-2xl md:text-3xl font-mono text-muted-foreground mb-8 h-12">
						<EfeitoDigitacao
							palavras={["Educadora Tech", "Node.js & React", "Testes & Qualidade de Software", "Banco de Dados & SQL", "Figma & UI Design", "Python & Power BI", "Pronta para Trabalho Remoto"]}
						/>
					</div>

					<p className="text-lg text-secondary-foreground max-w-2xl mb-12 leading-relaxed">
						Professora e desenvolvedora full stack com domínio em Node.js, React
						e arquiteturas modernas. Uno a experiência de sala de aula com a prática
						do desenvolvimento para criar soluções reais e formar novos profissionais
						de tecnologia.
					</p>

					<div className="flex items-center gap-6">
						<motion.button
							onClick={() => aoNavegar?.(2)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg border-glow transition-all hover:shadow-[0_0_30px_hsl(280_85%_65%/0.3)] cursor-pointer"
						>
							Ver Projetos
							<ArrowDown className="w-4 h-4" />
						</motion.button>

						<div className="flex gap-4">
							{[
								{ icon: Github, href: "https://github.com/techcomkathia/" },
								{ icon: Linkedin, href: "https://www.linkedin.com/in/kathiarochasa/" },
								{ icon: Mail, href: "mailto:kathia.karine2015@gmail.com" },
							].map(({ icon: Icone, href }, i) => (
								<motion.a
									key={i}
									href={href}
									whileHover={{ scale: 1.1, y: -2 }}
									className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
								>
									<Icone className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Indicador de rolagem */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<ArrowDown className="w-5 h-5 text-primary/50" />
			</motion.div>
		</section>
	);
};

export default SecaoPrincipal;
