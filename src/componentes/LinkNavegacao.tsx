import { NavLink as RoteadorLinkNavegacao, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/biblioteca/utilitarios";

interface PropsCompatLinkNavegacao extends Omit<NavLinkProps, "className"> {
	className?: string;
	classeAtiva?: string;
	classePendente?: string;
}

const LinkNavegacao = forwardRef<HTMLAnchorElement, PropsCompatLinkNavegacao>(
	({ className, classeAtiva, classePendente, to, ...props }, ref) => {
		return (
			<RoteadorLinkNavegacao
				ref={ref}
				to={to}
				className={({ isActive, isPending }) =>
					cn(className, isActive && classeAtiva, isPending && classePendente)
				}
				{...props}
			/>
		);
	},
);

LinkNavegacao.displayName = "LinkNavegacao";

export { LinkNavegacao };
