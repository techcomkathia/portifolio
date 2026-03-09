import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/componentes/ui/toast";

const LIMITE_NOTIFICACOES = 1;
const ATRASO_REMOVER_NOTIFICACAO = 1000000;

type NotificacaoTorrador = ToastProps & {
  id: string;
  titulo?: React.ReactNode;
  descricao?: React.ReactNode;
  acao?: ToastActionElement;
};

const tiposAcao = {
  ADICIONAR_NOTIFICACAO: "ADICIONAR_NOTIFICACAO",
  ATUALIZAR_NOTIFICACAO: "ATUALIZAR_NOTIFICACAO",
  DESCARTAR_NOTIFICACAO: "DESCARTAR_NOTIFICACAO",
  REMOVER_NOTIFICACAO: "REMOVER_NOTIFICACAO",
} as const;

let contador = 0;

function gerarId() {
  contador = (contador + 1) % Number.MAX_SAFE_INTEGER;
  return contador.toString();
}

type TipoAcao = typeof tiposAcao;

type Acao =
  | { type: TipoAcao["ADICIONAR_NOTIFICACAO"]; notificacao: NotificacaoTorrador }
  | { type: TipoAcao["ATUALIZAR_NOTIFICACAO"]; notificacao: Partial<NotificacaoTorrador> }
  | { type: TipoAcao["DESCARTAR_NOTIFICACAO"]; notificacaoId?: NotificacaoTorrador["id"] }
  | { type: TipoAcao["REMOVER_NOTIFICACAO"]; notificacaoId?: NotificacaoTorrador["id"] };

interface Estado {
  notificacoes: NotificacaoTorrador[];
}

const notificacoesTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// Função utilitária para uso externo: agenda a remoção, mas não chama dispatch internamente
export const agendarRemocaoNotificacao = (notificacaoId: string, callback: () => void) => {
  if (notificacoesTimeouts.has(notificacaoId)) {
    return;
  }
  const timeout = setTimeout(() => {
    notificacoesTimeouts.delete(notificacaoId);
    callback();
  }, ATRASO_REMOVER_NOTIFICACAO);
  notificacoesTimeouts.set(notificacaoId, timeout);
};

export const redutor = (estado: Estado, acao: Acao): Estado => {
  switch (acao.type) {
    case "ADICIONAR_NOTIFICACAO":
      return {
        ...estado,
        notificacoes: [acao.notificacao, ...estado.notificacoes].slice(0, LIMITE_NOTIFICACOES),
      };
    case "ATUALIZAR_NOTIFICACAO":
      return {
        ...estado,
        notificacoes: estado.notificacoes.map((n) => (n.id === acao.notificacao.id ? { ...n, ...acao.notificacao } : n)),
      };
    case "DESCARTAR_NOTIFICACAO": {
      const { notificacaoId } = acao;
      // O agendamento da remoção deve ser feito externamente, usando agendarRemocaoNotificacao
      return {
        ...estado,
        notificacoes: estado.notificacoes.map((n) =>
          n.id === notificacaoId || notificacaoId === undefined
            ? { ...n, open: false }
            : n,
        ),
      };
    }
    case "REMOVER_NOTIFICACAO":
      if (acao.notificacaoId === undefined) {
        return {
          ...estado,
          notificacoes: [],
        };
      }
      return {
        ...estado,
        notificacoes: estado.notificacoes.filter((n) => n.id !== acao.notificacaoId),
      };
    default:
      return estado;
  }
};
