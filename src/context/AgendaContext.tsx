import {
    agendamentos as agendamentosIniciais,
    type Agendamento,
} from "@/data/agendamentos";
import { servicos } from "@/data/servicos";
import { createContext, useContext, useState, type ReactNode } from "react";

type DadosNovos = {
  cliente: string;
  servico: string;
  data: string;
  horario: string;
};

type ContextoAgenda = {
  agendamentos: Agendamento[];
  adicionar: (dados: DadosNovos) => void;
};

const AgendaContext = createContext<ContextoAgenda | null>(null);

export function AgendaProvider({ children }: { children: ReactNode }) {
  const [agendamentos, setAgendamentos] =
    useState<Agendamento[]>(agendamentosIniciais);

  function adicionar(dados: DadosNovos) {
    const servicoEscolhido = servicos.find((s) => s.nome === dados.servico);
    if (!servicoEscolhido) return;

    setAgendamentos((atual) => {
      const proximoId = Math.max(0, ...atual.map((a) => a.id)) + 1;
      const novo: Agendamento = {
        id: proximoId,
        cliente: dados.cliente,
        servico: dados.servico,
        imagem: servicoEscolhido.imagem,
        data: dados.data,
        horario: dados.horario,
        confirmado: false,
      };
      return [...atual, novo];
    });
  }

  return (
    <AgendaContext.Provider value={{ agendamentos, adicionar }}>
      {children}
    </AgendaContext.Provider>
  );
}

export function useAgenda(): ContextoAgenda {
  const contexto = useContext(AgendaContext);
  if (!contexto) {
    throw new Error("useAgenda precisa estar dentro do AgendaProvider");
  }
  return contexto;
}
