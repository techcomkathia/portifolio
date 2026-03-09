import { useEffect, useRef, useState, useCallback } from "react";

function obterSecaoInicial(idsSecoes: string[]) {
  const hash = window.location.hash.replace("#", "");
  const indice = idsSecoes.indexOf(hash);
  return indice >= 0 ? indice : 0;
}

export function useRolagemPaginaCompleta(idsSecoes: string[]) {
  const [secaoAtiva, setSecaoAtiva] = useState(() => obterSecaoInicial(idsSecoes));
  const rolando = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const secoesRef = useRef<(HTMLDivElement | null)[]>([]);
  const toqueInicioY = useRef(0);

  const rolarParaSecao = useCallback(
    (indice: number) => {
      if (indice < 0 || indice >= idsSecoes.length || rolando.current) return;
      rolando.current = true;
      setSecaoAtiva(indice);
      const id = idsSecoes[indice];
      window.history.replaceState(null, "", indice === 0 ? window.location.pathname : `#${id}`);
      setTimeout(() => { rolando.current = false; }, 800);
    },
    [idsSecoes]
  );

  useEffect(() => {
    const aoMudarHash = () => {
      const hash = window.location.hash.replace("#", "");
      const indice = idsSecoes.indexOf(hash);
      if (indice >= 0) setSecaoAtiva(indice);
    };

    const aoRolarRoda = (e: WheelEvent) => {
      const alvo = e.target as HTMLElement;
      const containerRolagem = alvo.closest(".overflow-y-auto");
      if (containerRolagem) {
        const { scrollTop, scrollHeight, clientHeight } = containerRolagem;
        const noTopo = scrollTop <= 0 && e.deltaY < 0;
        const noFundo = scrollTop + clientHeight >= scrollHeight - 2 && e.deltaY > 0;
        if (!noTopo && !noFundo) return;
      }
      e.preventDefault();
      if (rolando.current) return;
      setSecaoAtiva((anterior) => {
        const proxima = e.deltaY > 30 ? anterior + 1 : e.deltaY < -30 ? anterior - 1 : anterior;
        if (proxima < 0 || proxima >= idsSecoes.length || proxima === anterior) return anterior;
        rolando.current = true;
        const id = idsSecoes[proxima];
        window.history.replaceState(null, "", proxima === 0 ? window.location.pathname : `#${id}`);
        setTimeout(() => { rolando.current = false; }, 800);
        return proxima;
      });
    };

    const aoPressionarTecla = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        setSecaoAtiva((anterior) => {
          const proxima = anterior + 1;
          if (proxima >= idsSecoes.length || rolando.current) return anterior;
          rolando.current = true;
          window.history.replaceState(null, "", `#${idsSecoes[proxima]}`);
          setTimeout(() => { rolando.current = false; }, 800);
          return proxima;
        });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        setSecaoAtiva((anterior) => {
          const proxima = anterior - 1;
          if (proxima < 0 || rolando.current) return anterior;
          rolando.current = true;
          window.history.replaceState(null, "", proxima === 0 ? window.location.pathname : `#${idsSecoes[proxima]}`);
          setTimeout(() => { rolando.current = false; }, 800);
          return proxima;
        });
      }
    };

    const aoToqueInicio = (e: TouchEvent) => {
      toqueInicioY.current = e.touches[0].clientY;
    };

    const aoToqueFim = (e: TouchEvent) => {
      if (rolando.current) return;
      const delta = toqueInicioY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;
      setSecaoAtiva((anterior) => {
        const proxima = delta > 0 ? anterior + 1 : anterior - 1;
        if (proxima < 0 || proxima >= idsSecoes.length) return anterior;
        rolando.current = true;
        window.history.replaceState(null, "", proxima === 0 ? window.location.pathname : `#${idsSecoes[proxima]}`);
        setTimeout(() => { rolando.current = false; }, 800);
        return proxima;
      });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", aoRolarRoda, { passive: false });
      el.addEventListener("touchstart", aoToqueInicio, { passive: true });
      el.addEventListener("touchend", aoToqueFim, { passive: true });
    }
    window.addEventListener("keydown", aoPressionarTecla);
    window.addEventListener("hashchange", aoMudarHash);

    return () => {
      if (el) {
        el.removeEventListener("wheel", aoRolarRoda);
        el.removeEventListener("touchstart", aoToqueInicio);
        el.removeEventListener("touchend", aoToqueFim);
      }
      window.removeEventListener("keydown", aoPressionarTecla);
      window.removeEventListener("hashchange", aoMudarHash);
    };
  }, [idsSecoes]);

  const setSecaoRef = (indice: number) => (el: HTMLDivElement | null) => {
    secoesRef.current[indice] = el;
  };

  return { containerRef, secaoAtiva, rolarParaSecao, setSecaoRef };
}
