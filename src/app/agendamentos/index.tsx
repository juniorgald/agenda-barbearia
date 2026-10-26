import CardAgendamento from "@/components/CardAgendamento";
import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { useAgenda } from "@/context/AgendaContext";
import { router, type Href } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";

export default function ListaAgendamentos() {
  const { agendamentos } = useAgenda();
  return (
    <FlatList
      style={estilos.container}
      contentContainerStyle={estilos.lista}
      data={agendamentos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => router.push(`/agendamentos/${item.id}` as Href)}
        >
          <CardAgendamento agendamento={item} />
        </Pressable>
      )}
      ListEmptyComponent={
        <Text style={estilos.vazio}>Nenhum agendamento ainda</Text>
      }
    />
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  lista: { padding: 16, gap: 12 },
  vazio: {
    fontFamily: fontes.normal,
    color: cores.textoSecundario,
    textAlign: "center",
    marginTop: 60,
  },
});
