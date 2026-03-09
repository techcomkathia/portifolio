import { motion } from "framer-motion";
import {
	Terminal, Code2, Server, Database, Palette, BarChart3,
	Atom, FileCode2, Paintbrush, Play, Hexagon, Route, Boxes, Globe,
	Leaf, TableProperties, Triangle, TestTube2, RefreshCw, GitBranch,
	Container, Figma, Layout, Component, TrendingUp, DatabaseZap, LucideIcon,
} from "lucide-react";

const mapaIconeTecnologia: Record<string, LucideIcon> = {
	"React": Atom,
	"TypeScript": FileCode2,
	"Tailwind CSS": Paintbrush,
	"Framer Motion": Play,
	"Node.js": Hexagon,
	"Express": Route,
	"NestJS": Boxes,
	"REST APIs": Globe,
	"PostgreSQL": Database,
	"MongoDB": Leaf,
	"SQL": TableProperties,
	"Prisma": Triangle,
	"Testes Automatizados": TestTube2,
	"CI/CD": RefreshCw,
	"Git": GitBranch,
	"Docker": Container,
	"Figma": Figma,
	"UI/UX Design": Layout,
	"CSS Libraries": Paintbrush,
	"Design Systems": Component,
	"Python": Terminal,
	"Power BI": BarChart3,
	"SQL Avançado": DatabaseZap,
	"Data Analysis": TrendingUp,
};

const estatisticas = [
	{ rotulo: "Anos de experiência", valor: "4+" },
	{ rotulo: "Turmas formadas", valor: "20+" },
	{ rotulo: "Tecnologias", valor: "15+" },
	{ rotulo: "Alunos impactados", valor: "500+" },
];

const habilidades = [
	{ icone: Code2, titulo: "Frontend", itens: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
	{ icone: Server, titulo: "Backend", itens: ["Node.js", "Express", "NestJS", "REST APIs"] },
	{ icone: Database, titulo: "Banco de Dados", itens: ["PostgreSQL", "MongoDB", "SQL", "Prisma"] },
	{ icone: Terminal, titulo: "Qualidade & DevOps", itens: ["Testes Automatizados", "CI/CD", "Git", "Docker"] },
	{ icone: Palette, titulo: "Design & UI", itens: ["Figma", "UI/UX Design", "CSS Libraries", "Design Systems"] },
	{ icone: BarChart3, titulo: "Dados & Análise", itens: ["Python", "Power BI", "SQL Avançado", "Data Analysis"] },
];

const SecaoSobre = ({ ativo: _ativo }: { ativo?: boolean }) => {
	return (
		<section id="sobre" className="py-32 pt-24 relative">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<p className="font-mono text-primary text-sm mb-2">&gt; sobre.mim</p>
					<h2 className="text-4xl md:text-5xl font-mono font-bold">
						Sobre <span className="gradient-text">mim</span>
					</h2>
				</motion.div>

				{/* Estatísticas */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
					{estatisticas.map((estat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="glass-card rounded-xl p-6 text-center border-glow"
						>
							<p className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow mb-2">
								{estat.valor}
							</p>
							<p className="text-sm text-muted-foreground">{estat.rotulo}</p>
						</motion.div>
					))}
				</div>

				{/* Grid de Habilidades */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{habilidades.map((hab, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.15 }}
							whileHover={{ y: -5 }}
							className="glass-card rounded-xl p-6 group"
						>
							<hab.icone className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-all" />
							<h3 className="font-mono font-semibold text-lg mb-3">{hab.titulo}</h3>
							<ul className="space-y-2">
								{hab.itens.map((item, j) => (
									<li key={j} className="text-muted-foreground text-sm flex items-center gap-2">
										{(() => {
											const IconeTec = mapaIconeTecnologia[item];
											return IconeTec ? <IconeTec className="w-3.5 h-3.5 text-primary/70 shrink-0" /> : <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />;
										})()}
										{item}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SecaoSobre;
