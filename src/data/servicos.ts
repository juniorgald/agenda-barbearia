import type { ImageSourcePropType } from "react-native";

export type Servico = {
  id: number;
  nome: string;
  imagem: ImageSourcePropType;
};

export const servicos: Servico[] = [
  { id: 1, nome: "Corte", imagem: require("@/assets/images/corte.png") },
  { id: 2, nome: "Barba", imagem: require("@/assets/images/barba.png") },
  {
    id: 3,
    nome: "Corte + Barba",
    imagem: require("@/assets/images/corte-barba.png"),
  },
  {
    id: 4,
    nome: "Sobrancelha",
    imagem: require("@/assets/images/sobrancelha.png"),
  },
];
