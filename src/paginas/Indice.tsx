
import BarraNavegacao from "@/componentes/BarraNavegacao";
import SecaoPrincipal from "@/componentes/SecaoPrincipal";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoProjetos from "@/componentes/SecaoProjetos";
import SecaoMateriais from "@/componentes/SecaoMateriais";
import SecaoContato from "@/componentes/SecaoContato";
import PontosSecao from "@/componentes/PontosSecao";
import { useRolagemPaginaCompleta } from "@/hooks/useRolagemPaginaCompleta";


const secoes = [
	{ id: "inicio", label: "Início" },
	{ id: "sobre", label: "Sobre" },
	{ id: "projetos", label: "Projetos" },
	{ id: "materiais", label: "Materiais" },
	{ id: "contato", label: "Contato" },
];


const Indice = () => {
	const { containerRef, secaoAtiva, rolarParaSecao, setSecaoRef } =
		useRolagemPaginaCompleta(secoes.map((s) => s.id));


	return (
		<div ref={containerRef} className="h-screen overflow-hidden bg-background grid-bg">
			<BarraNavegacao secaoAtiva={secaoAtiva} aoNavegar={rolarParaSecao} />
			<PontosSecao
				secoes={secoes}
				indiceAtivo={secaoAtiva}
				aoNavegar={rolarParaSecao}
			/>

			<div className="h-screen overflow-hidden">
				<div
					className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
					style={{ transform: `translateY(-${secaoAtiva * 100}vh)` }}
				>
					<div ref={setSecaoRef(0)} className="h-screen">
						<SecaoPrincipal ativo={secaoAtiva === 0} aoNavegar={rolarParaSecao} />
					</div>
					<div ref={setSecaoRef(1)} className="h-screen overflow-y-auto">
						<SecaoSobre ativo={secaoAtiva === 1} />
					</div>
					<div ref={setSecaoRef(2)} className="h-screen overflow-y-auto">
						<SecaoProjetos ativo={secaoAtiva === 2} />
					</div>
					<div ref={setSecaoRef(3)} className="h-screen overflow-y-auto">
						<SecaoMateriais ativo={secaoAtiva === 3} />
					</div>
					<div ref={setSecaoRef(4)} className="h-screen">
						<SecaoContato ativo={secaoAtiva === 4} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Indice;
