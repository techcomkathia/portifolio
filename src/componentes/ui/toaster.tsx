
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/componentes/ui/toast";

import * as React from "react";
import { useNotificacao } from "@/componentes/ui/use-toast";


export function Toaster() {
  // Estado real de notificações usando useReducer
  const [estado] = React.useReducer(useNotificacao, { notificacoes: [] });
  const toasts = estado.notificacoes;

  return (
    <ToastProvider>
      {toasts.map(function ({ id, titulo, descricao, acao, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {titulo && <ToastTitle>{titulo}</ToastTitle>}
              {descricao && <ToastDescription>{descricao}</ToastDescription>}
            </div>
            {acao}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
