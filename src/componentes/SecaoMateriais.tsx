import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileCode, Rocket, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CartaoMaterial {
	id: string;
	icone: React.ElementType;
	titulo: string;
	descricao: string;
	conteudo: React.ReactNode;
}

const materiais: CartaoMaterial[] = [
	{
		id: "repos",
		icone: FileCode,
		titulo: "Repositórios de Aula",
		descricao: "Códigos-fonte e exemplos práticos utilizados nas aulas",
		conteudo: (
			<div className="space-y-3">
				<p className="text-muted-foreground text-sm">
					Acesse os repositórios com todo o código desenvolvido em aula, organizados por módulo e turma.
				</p>
				<div className="flex flex-wrap gap-2">
					{["HTML/CSS", "JavaScript", "React", "Node.js", "SQL", "Express"].map((tag) => (
						<span key={tag} className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20">
							{tag}
						</span>
					))}
				</div>
				<a href="https://github.com/stars/techcomkathia/lists/school-satchel-turmasdfs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-2">
					Acessar repositórios <ExternalLink className="w-3.5 h-3.5" />
				</a>
			</div>
		),
	},
	{
		id: "material",
		icone: BookOpen,
		titulo: "Material Didático",
		descricao: "Apostilas, guias e referências para estudo",
		conteudo: (
			<div className="space-y-4">
				<div className="glass-card rounded-lg p-4 border border-primary/10">
					<h4 className="font-mono font-semibold text-foreground text-sm mb-1">🎨 Desenvolvimento Front-end</h4>
					<p className="text-muted-foreground text-sm mb-3">
						HTML, CSS, Bootstrap, Git/GitHub, JavaScript e React — do básico ao desenvolvimento de interfaces modernas e responsivas.
					</p>
					<a href="https://aulaskathiafront.notion.site/Desenvolvimento-Front-End-JavaScript-270c2e42bce644b1972ac060f68dd6d6?pvs=74" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
						Acessar material <ExternalLink className="w-3 h-3" />
					</a>
				</div>
				<div className="glass-card rounded-lg p-4 border border-primary/10">
					<h4 className="font-mono font-semibold text-foreground text-sm mb-1">⚙️ Desenvolvimento Back-end</h4>
					<p className="text-muted-foreground text-sm mb-3">
						Node.js, SQL, Express, Jest e Cypress — construção de APIs, banco de dados e testes automatizados.
					</p>
					<a href="https://notasaulabackend.notion.site/Desenvolvimento-Back-End-JavaScript-5038d9fff41d45688f698f7d88a5a19e" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
						Acessar material <ExternalLink className="w-3 h-3" />
					</a>
				</div>
			</div>
		),
	},
	{
		id: "projetos",
		icone: Rocket,
		titulo: "Projetos Práticos",
		descricao: "Desafios e projetos para exercitar os conceitos aprendidos",
		conteudo: (
			<div className="space-y-3">
				<p className="text-muted-foreground text-sm">
					Projetos simples e guiados para que você coloque a mão na massa e exercite os conceitos vistos em aula.
				</p>
				<div className="grid sm:grid-cols-2 gap-2">
					{[
						{ name: "PetLorem", desc: "HTML e Bootstrap 5", link: "https://github.com/techcomkathia/petLorem" },
						{ name: "Cardápio Digital", desc: "HTML, variáveis CSS e Flexbox", link: "https://github.com/techcomkathia/cardapioBBQ-BRO" },
						{ name: "Pedra Papel Tesoura", desc: "JavaScript e DOM", link: "https://github.com/techcomkathia/pedraPapelTesoura" },
					].map((proj) => (
						<a key={proj.name} href={proj.link} target="_blank" rel="noopener noreferrer" className="glass-card rounded-lg p-3 border border-primary/10 hover:border-primary/30 transition-colors block">
							<p className="font-mono text-sm font-semibold text-foreground">{proj.name}</p>
							<p className="text-xs text-muted-foreground">{proj.desc}</p>
						</a>
					))}
				</div>
				<a href="https://github.com/stars/techcomkathia/lists/bricks-projetos-de-base" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-2">
					Ver todos os projetos <ExternalLink className="w-3.5 h-3.5" />
				</a>
			</div>
		),
	},
];

const SecaoMateriais = ({ ativo: _ativo }: { ativo?: boolean }) => {
	const [idAberto, setIdAberto] = useState<string | null>(null);

	const alternar = (id: string) => setIdAberto((anterior) => (anterior === id ? null : id));

	return (
		<section id="materiais" className="py-32 pt-24 relative">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<p className="font-mono text-primary text-sm mb-2">&gt; materiais --listar</p>
					<h2 className="text-4xl md:text-5xl font-mono font-bold">
						Materiais de <span className="gradient-text">Aula</span>
					</h2>
					<p className="text-muted-foreground mt-4 max-w-xl text-lg">
						Recursos e conteúdos para meus alunos de desenvolvimento Full Stack.
					</p>
				</motion.div>

				<div className="flex flex-col gap-4 w-full">
					{materiais.map((material, i) => (
						<motion.div
							key={material.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="glass-card rounded-xl border-glow overflow-hidden"
						>
							<button
								onClick={() => alternar(material.id)}
								className="w-full flex items-center gap-5 p-5 text-left group cursor-pointer"
							>
								<div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
									<material.icone className="w-6 h-6" />
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
										{material.titulo}
									</h3>
									<p className="text-muted-foreground text-sm">{material.descricao}</p>
								</div>
								<motion.div
									animate={{ rotate: idAberto === material.id ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="shrink-0 text-muted-foreground"
								>
									<ChevronDown className="w-5 h-5" />
								</motion.div>
							</button>

							<AnimatePresence initial={false}>
								{idAberto === material.id && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="overflow-hidden"
									>
										<div className="px-5 pb-5 pt-0 border-t border-primary/10">
											<div className="pt-4">{material.conteudo}</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SecaoMateriais;
