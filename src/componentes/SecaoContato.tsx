import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const SecaoContato = ({ ativo: _ativo }: { ativo?: boolean }) => {
	const aoCopiarEmail = () => {
		navigator.clipboard.writeText("kathia.karine2015@gmail.com");
		toast.success("E-mail copiado para a área de transferência!");
	};

	return (
		<section id="contato" className="py-32 relative flex flex-col justify-center min-h-screen">
			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center"
				>
					<p className="font-mono text-primary text-sm mb-4">&gt; contato --abrir</p>
					<h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
						Vamos construir algo <span className="gradient-text">juntos?</span>
					</h2>
					<p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
						Estou disponível para oportunidades de desenvolvimento, parcerias em projetos
						e colaborações na área de tecnologia. Ficarei feliz em conversar com você.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
						{[
							{ icon: Github, label: "GitHub", href: "https://github.com/techcomkathia/", acao: "link" },
							{ icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kathiarochasa/", acao: "link" },
							{ icon: Mail, label: "E-mail", href: "#", acao: "copiar" },
						].map(({ icon: Icone, label, href, acao }, i) => (
							<motion.button
								key={i}
								onClick={() => {
									if (acao === "copiar") {
										aoCopiarEmail();
									} else {
										window.open(href, "_blank", "noopener,noreferrer");
									}
								}}
								whileHover={{ y: -3 }}
								className="flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-primary/10 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all font-mono text-sm sm:text-base border border-primary/30"
							>
								<Icone className="w-5 h-5" />
								{label}
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Rodapé */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-20 pt-8 border-t border-border text-center"
				>
					<p className="font-mono text-xs text-muted-foreground">
						<span className="text-primary">&gt;</span> Káthia Rocha Sá · Desenvolvedora Full Stack
					</p>
					<p className="font-mono text-xs text-muted-foreground mt-1">
						Desenvolvido com paixão por código e café ☕ · {new Date().getFullYear()}
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default SecaoContato;
