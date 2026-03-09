import * as React from "react";

const PONTO_DE_CORTE_MOBILE = 768;

export function useCelular() {
  const [ehCelular, setEhCelular] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${PONTO_DE_CORTE_MOBILE - 1}px)`);
    const aoMudar = () => {
      setEhCelular(window.innerWidth < PONTO_DE_CORTE_MOBILE);
    };
    mql.addEventListener("change", aoMudar);
    setEhCelular(window.innerWidth < PONTO_DE_CORTE_MOBILE);
    return () => mql.removeEventListener("change", aoMudar);
  }, []);

  return !!ehCelular;
}
