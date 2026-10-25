import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { raio } from "@/constants/tamanhos";
import type { Agendamento } from "@/data/agendamentos";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

type Propriedades = {
  agendamento: Agendamento;
  mostrarStatus?: boolean;
};

export default function CardAgendamento({ agendamento }: Propriedades) {
  return (
    <View style={estilos.card}>
      <View style={estilos.pessoa}>
        <Image source={agendamento.imagem} style={estilos.foto} />
        <View style={estilos.textos}>
          <Text style={estilos.cliente}>{agendamento.cliente}</Text>
          <Text style={estilos.servico}>{agendamento.servico}</Text>
        </View>
      </View>

      <View style={estilos.divisor} />

      <View style={estilos.horario}>
        <View style={estilos.linha}>
          <Ionicons
            name="calendar-clear-outline"
            size={20}
            color={cores.texto}
          />
          <Text style={estilos.dado}>{agendamento.data.slice(0, 5)}</Text>
        </View>
        <View style={estilos.linha}>
          <Ionicons name="time-outline" size={20} color={cores.texto} />
          <Text style={estilos.dado}>{agendamento.horario}</Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.card,
    padding: 12,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  pessoa: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  foto: { width: 40, height: 40 },
  textos: { flex: 1, gap: 4 },
  cliente: { fontFamily: fontes.medio, fontSize: 16, color: cores.texto },
  servico: {
    fontFamily: fontes.normal,
    fontSize: 14,
    color: cores.textoSecundario,
  },
  divisor: {
    width: 1,
    alignSelf: "stretch",
    backgroundColor: cores.borda,
  },
  horario: { gap: 8, marginRight: 8 },
  linha: { flexDirection: "row", alignItems: "center", gap: 8 },
  dado: { fontFamily: fontes.normal, fontSize: 14, color: cores.texto },
});
