import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Propriedades = {
  titulo: string;
  icone: keyof typeof Ionicons.glyphMap;
  aoPressionar: () => void;
  cheio?: boolean;
};

export default function Botao({
  titulo,
  icone,
  aoPressionar,
  cheio = false,
}: Propriedades) {
  const corConteudo = cheio ? cores.fundo : cores.destaque;

  return (
    <Pressable
      onPress={aoPressionar}
      style={({ pressed }) => [
        estilos.botao,
        cheio ? estilos.cheio : estilos.borda,
        pressed && estilos.pressionado,
      ]}
    >
      <Ionicons name={icone} size={20} color={corConteudo} />
      <Text style={[estilos.texto, { color: corConteudo }]} numberOfLines={1}>
        {titulo}
      </Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: cores.destaque,
  },
  borda: { backgroundColor: cores.fundo },
  cheio: { backgroundColor: cores.destaque },
  pressionado: { opacity: 0.7 },
  texto: { fontFamily: fontes.medio, fontSize: 14 },
});
