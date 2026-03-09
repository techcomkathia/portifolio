import { useState, useEffect } from "react";

interface EfeitoDigitacaoProps {
	palavras: string[];
	className?: string;
}

const EfeitoDigitacao = ({ palavras, className = "" }: EfeitoDigitacaoProps) => {
	const [indicePalavra, setIndicePalavra] = useState(0);
	const [textoAtual, setTextoAtual] = useState("");
	const [apagando, setApagando] = useState(false);

	useEffect(() => {
		const palavra = palavras[indicePalavra];
		const timeout = setTimeout(
			() => {
				if (!apagando) {
					setTextoAtual(palavra.substring(0, textoAtual.length + 1));
					if (textoAtual.length + 1 === palavra.length) {
						setTimeout(() => setApagando(true), 1500);
					}
				} else {
					setTextoAtual(palavra.substring(0, textoAtual.length - 1));
					if (textoAtual.length === 0) {
						setApagando(false);
						setIndicePalavra((prev) => (prev + 1) % palavras.length);
					}
				}
			},
			apagando ? 50 : 100
		);

		return () => clearTimeout(timeout);
	}, [textoAtual, apagando, indicePalavra, palavras]);

	return (
		<span className={className}>
			{textoAtual}
			<span className="animate-blink text-primary">|</span>
		</span>
	);
};

export default EfeitoDigitacao;
