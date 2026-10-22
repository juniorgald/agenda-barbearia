import type { ImageSourcePropType } from "react-native";
import { servicos } from "./servicos";

export type Agendamento = {
  id: number;
  cliente: string;
  servico: string;
  imagem: ImageSourcePropType;
  data: string;
  horario: string;
  confirmado: boolean;
};

export const agendamentos: Agendamento[] = [
  {
    id: 1,
    cliente: "Vicente",
    servico: servicos[0].nome,
    imagem: servicos[0].imagem,
    data: "22/10/2026",
    horario: "15:00",
    confirmado: true,
  },
  {
    id: 2,
    cliente: "Pedro Lima",
    servico: servicos[1].nome,
    imagem: servicos[1].imagem,
    data: "22/10/2026",
    horario: "16:30",
    confirmado: false,
  },
  {
    id: 3,
    cliente: "Marcos Souza",
    servico: servicos[2].nome,
    imagem: servicos[2].imagem,
    data: "23/10/2026",
    horario: "09:30",
    confirmado: true,
  },
  {
    id: 4,
    cliente: "Rafael Costa",
    servico: servicos[0].nome,
    imagem: servicos[0].imagem,
    data: "23/10/2026",
    horario: "11:00",
    confirmado: false,
  },
  {
    id: 5,
    cliente: "Lucas Andrade",
    servico: servicos[3].nome,
    imagem: servicos[3].imagem,
    data: "24/10/2026",
    horario: "14:00",
    confirmado: true,
  },
  {
    id: 6,
    cliente: "Bruno Alves",
    servico: servicos[1].nome,
    imagem: servicos[1].imagem,
    data: "24/10/2026",
    horario: "17:30",
    confirmado: false,
  },
  {
    id: 7,
    cliente: "Tiago Ramos",
    servico: servicos[2].nome,
    imagem: servicos[2].imagem,
    data: "25/10/2026",
    horario: "10:00",
    confirmado: true,
  },
];
