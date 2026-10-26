import Botao from "@/components/Botao";
import StatusBadge from "@/components/StatusBadge";
import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { raio } from "@/constants/tamanhos";
import { useAgenda } from "@/context/AgendaContext";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type PropriedadesLinha = {
  rotulo: string;
  valor: string;
};

function Linha({ rotulo, valor }: PropriedadesLinha) {
  return (
    <View style={estilos.linha}>
      <Text style={estilos.rotulo}>{rotulo}</Text>
      <Text style={estilos.valor}>{valor}</Text>
    </View>
  );
}

export default function DetalhesAgendamento() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { agendamentos, alternarStatus } = useAgenda();

  const agendamento = agendamentos.find((a) => a.id === Number(id));

  if (!agendamento) {
    return (
      <View style={estilos.naoEncontrado}>
        <Text style={estilos.titulo}>Agendamento não encontrado</Text>
        <View style={estilos.botoes}>
          <Botao
            titulo="Voltar para a agenda"
            icone="arrow-back"
            aoPressionar={() => router.back()}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={estilos.container}
      contentContainerStyle={estilos.conteudo}
    >
      <View style={estilos.topo}>
        <Image source={agendamento.imagem} style={estilos.icone} />
        <View style={estilos.cabecalho}>
          <Text style={estilos.titulo}>{agendamento.cliente}</Text>
          <StatusBadge confirmado={agendamento.confirmado} />
        </View>
      </View>

      <View style={estilos.card}>
        <Linha rotulo="Serviço" valor={agendamento.servico} />
        <Linha rotulo="Data" valor={agendamento.data} />
        <Linha rotulo="Horário" valor={agendamento.horario} />
      </View>

      <View style={estilos.botoes}>
        <Botao
          titulo={
            agendamento.confirmado
              ? "Marcar como pendente"
              : "Confirmar agendamento"
          }
          icone={agendamento.confirmado ? "time-outline" : "checkmark"}
          cheio
          aoPressionar={() => alternarStatus(agendamento.id)}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 16, gap: 16 },
  foto: { width: "100%", height: 220, borderRadius: raio.card },

  titulo: { fontFamily: fontes.medio, fontSize: 28, color: cores.texto },
  card: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.card,
    padding: 16,
    gap: 16,
  },
  linha: { gap: 2 },
  rotulo: {
    fontFamily: fontes.normal,
    fontSize: 13,
    color: cores.textoSecundario,
  },
  valor: { fontFamily: fontes.medio, fontSize: 18, color: cores.texto },
  botoes: { flexDirection: "row", marginTop: 8 },
  naoEncontrado: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  topo: { flexDirection: "row", alignItems: "center", gap: 16 },
  icone: { width: 64, height: 64, borderRadius: 16 },
  cabecalho: { flex: 1, gap: 8 },
});
