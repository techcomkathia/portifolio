
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projetos = [
	{
		titulo: "Título 1",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe"],
		github: "#",
		aoVivo: "#",
		destaque: true,
	},
	{
		titulo: "Título 2",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["React", "Socket.io", "Node.js", "MongoDB"],
		github: "#",
		aoVivo: "#",
		destaque: true,
	},
	{
		titulo: "Título 3",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
	{
		titulo: "Título 4",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["React", "D3.js", "Node.js", "ClickHouse"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
	{
		titulo: "Título 5",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["Docker", "GitHub Actions", "AWS", "Terraform"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
	{
		titulo: "Título 6",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["NestJS", "GraphQL", "PostgreSQL", "React"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
	{
		titulo: "Título 7",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
	{
		titulo: "Título 8",
		descricao: "Exemplo de descrição do projeto em português.",
		tecnologias: ["React", "D3.js", "Node.js", "ClickHouse"],
		github: "#",
		aoVivo: "#",
		destaque: false,
	},
];

const SecaoProjetos = ({ ativo }: { ativo?: boolean }) => {
	return (
		<section id="projetos" className="py-32 relative">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<p className="font-mono text-primary text-sm mb-2">&gt; ls ./projetos</p>
					<h2 className="text-4xl md:text-5xl font-mono font-bold">
						Meus <span className="gradient-text">Projetos</span>
					</h2>
				</motion.div>

				{/* Projetos em destaque */}
				<div className="space-y-8 mb-12">
					{projetos
						.filter((p) => p.destaque)
						.map((projeto, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="glass-card rounded-2xl p-8 md:p-10 border-glow group hover:border-primary/30 transition-all duration-500"
							>
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
									<div className="flex-1">
										<p className="font-mono text-primary text-xs mb-3 uppercase tracking-wider">
											Projeto Destaque
										</p>
										<h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 group-hover:text-primary transition-colors">
											{projeto.titulo}
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
											{projeto.descricao}
										</p>
										<div className="flex flex-wrap gap-2">
											{projeto.tecnologias.map((tec, j) => (
												<span
													key={j}
													className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
												>
													{tec}
												</span>
											))}
										</div>
									</div>
									<div className="flex gap-3">
										<a
											href={projeto.github}
											className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
										>
											<Github className="w-5 h-5" />
										</a>
										<a
											href={projeto.aoVivo}
											className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
										>
											<ExternalLink className="w-5 h-5" />
										</a>
									</div>
								</div>
							</motion.div>
						))}
				</div>

				{/* Outros projetos */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projetos
						.filter((p) => !p.destaque)
						.map((projeto, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ y: -8 }}
								className="glass-card rounded-xl p-6 group hover:border-primary/20 transition-all duration-300"
							>
								<div className="flex items-start justify-between mb-4">
									<div className="p-2 rounded-lg bg-primary/10">
										<ArrowUpRight className="w-5 h-5 text-primary" />
									</div>
									<div className="flex gap-2">
										<a href={projeto.github} className="text-muted-foreground hover:text-primary transition-colors">
											<Github className="w-4 h-4" />
										</a>
										<a href={projeto.aoVivo} className="text-muted-foreground hover:text-primary transition-colors">
											<ExternalLink className="w-4 h-4" />
										</a>
									</div>
								</div>
								<h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
									{projeto.titulo}
								</h3>
								<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
									{projeto.descricao}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{projeto.tecnologias.map((tec, j) => (
										<span key={j} className="text-xs font-mono text-primary/70">
											{tec}{j < projeto.tecnologias.length - 1 && " ·"}
										</span>
									))}
								</div>
							</motion.div>
						))}
				</div>
			</div>
		</section>
	);
};

export default SecaoProjetos;
