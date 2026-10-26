import Botao from "@/components/Botao";
import CardAgendamento from "@/components/CardAgendamento";
import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { raio } from "@/constants/tamanhos";
import { useAgenda } from "@/context/AgendaContext";
import { proximosAgendamentos } from "@/utils/proximosAgendamentos";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const GRADIENTE = [cores.destaque2, cores.destaque] as const;

export default function Inicio() {
  const { agendamentos } = useAgenda();
  const proximos = proximosAgendamentos(agendamentos, 3);

  return (
    <View style={estilos.container}>
      <LinearGradient
        colors={GRADIENTE}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={estilos.card}
      >
        <View style={estilos.cabecalho}>
          <Ionicons name="calendar-outline" size={28} color={cores.fundo} />
          <Text style={estilos.titulo}>Agenda Barbearia</Text>
        </View>

        <View style={estilos.divisoria} />

        <Text style={estilos.numero}>
          {String(agendamentos.length).padStart(2, "0")}
        </Text>
        <Text style={estilos.rotulo}>Agendamentos</Text>
      </LinearGradient>

      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Próximos atendimentos</Text>

        {proximos.length === 0 ? (
          <Text style={estilos.vazio}>Nenhum atendimento próximo</Text>
        ) : (
          proximos.map((agendamento) => (
            <CardAgendamento key={agendamento.id} agendamento={agendamento} />
          ))
        )}
      </View>
      <View style={estilos.botoes}>
        <Botao
          titulo="Ver agenda"
          icone="calendar-outline"
          aoPressionar={() => router.push("/agendamentos")}
        />
        <Botao
          titulo="Novo agendamento"
          icone="add"
          cheio
          aoPressionar={() => router.push("/agendamentos/novo")}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    gap: 16,
    alignItems: "center",
    padding: "5%",
  },
  card: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.card,
    padding: 16,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  titulo: {
    fontFamily: fontes.normal,
    fontSize: 25,
    color: cores.fundo,
  },
  divisoria: {
    height: 1,
    backgroundColor: cores.borda,
    opacity: 0.2,
  },
  numero: {
    fontFamily: fontes.normal,
    fontSize: 40,
    color: cores.fundo,
  },
  rotulo: {
    fontFamily: fontes.normal,
    fontSize: 14,
    color: cores.fundo,
  },
  secao: { width: "100%", gap: 12 },
  tituloSecao: {
    fontFamily: fontes.medio,
    fontSize: 16,
    color: cores.textoSecundario,
  },
  vazio: {
    fontFamily: fontes.normal,
    color: cores.textoSecundario,
  },
  botoes: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: "auto",
    marginBottom: 24,
  },
  frase: {
    fontFamily: fontes.normal,
    fontSize: 16,
    color: cores.textoSecundario,
    alignSelf: "flex-start",
  },
});
