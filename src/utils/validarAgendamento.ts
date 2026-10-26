export type DadosFormulario = {
  cliente: string;
  servico: string;
  data: string;
  horario: string;
};

export type Erros = {
  cliente?: string;
  servico?: string;
  data?: string;
  horario?: string;
};

const FORMATO_DATA = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const FORMATO_HORARIO = /^([01]\d|2[0-3]):[0-5]\d$/;

export function validarAgendamento(dados: DadosFormulario): Erros {
  const erros: Erros = {};

  if (dados.cliente.trim().length < 2) {
    erros.cliente = "Informe o nome do cliente";
  }
  if (!dados.servico) {
    erros.servico = "Escolha um serviço";
  }
  if (!FORMATO_DATA.test(dados.data)) {
    erros.data = "Use o formato DD/MM/AAAA";
  }
  if (!FORMATO_HORARIO.test(dados.horario)) {
    erros.horario = "Use o formato HH:MM";
  }

  return erros;
}
