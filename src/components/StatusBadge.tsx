import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { StyleSheet, Text, View } from "react-native";

type Propriedades = {
  confirmado: boolean;
};

export default function StatusBadge({ confirmado }: Propriedades) {
  return (
    <View
      style={[estilos.base, confirmado ? estilos.confirmado : estilos.pendente]}
    >
      <Text
        style={[
          estilos.texto,
          confirmado ? estilos.textoConfirmado : estilos.textoPendente,
        ]}
      >
        {confirmado ? "Confirmado" : "Pendente"}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  base: {
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  confirmado: { backgroundColor: cores.destaque },
  pendente: { borderWidth: 1, borderColor: cores.textoSecundario },
  texto: { fontFamily: fontes.medio, fontSize: 12 },
  textoConfirmado: { color: cores.fundo },
  textoPendente: { color: cores.textoSecundario },
});
