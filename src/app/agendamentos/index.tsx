import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { StyleSheet, Text, View } from "react-native";

export default function ListaAgendamentos() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Lista de agendamentos</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: { fontFamily: fontes.normal, color: cores.texto },
});
