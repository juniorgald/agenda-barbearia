import type { Agendamento } from "@/data/agendamentos";

function paraData(data: string, horario: string): Date {
  const [dia, mes, ano] = data.split("/").map(Number);
  const [hora, minuto] = horario.split(":").map(Number);
  return new Date(ano, mes - 1, dia, hora, minuto);
}

export function proximosAgendamentos(
  lista: Agendamento[],
  quantidade: number,
): Agendamento[] {
  const agora = new Date();

  return lista
    .filter((a) => paraData(a.data, a.horario) >= agora)
    .sort(
      (a, b) =>
        paraData(a.data, a.horario).getTime() -
        paraData(b.data, b.horario).getTime(),
    )
    .slice(0, quantidade);
}
