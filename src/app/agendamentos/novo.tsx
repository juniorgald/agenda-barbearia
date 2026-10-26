import Botao from "@/components/Botao";
import CampoTexto from "@/components/CampoTexto";
import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { useAgenda } from "@/context/AgendaContext";
import { servicos } from "@/data/servicos";
import { validarAgendamento, type Erros } from "@/utils/validarAgendamento";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function NovoAgendamento() {
  const { adicionar } = useAgenda();

  const [cliente, setCliente] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [erros, setErros] = useState<Erros>({});

  function salvar() {
    const novosErros = validarAgendamento({ cliente, servico, data, horario });
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    adicionar({ cliente: cliente.trim(), servico, data, horario });
    Alert.alert("Pronto", "Agendamento criado!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  }

  return (
    <ScrollView
      style={estilos.container}
      contentContainerStyle={estilos.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <CampoTexto
        rotulo="Cliente"
        valor={cliente}
        aoMudar={setCliente}
        placeholder="Nome do cliente"
        erro={erros.cliente}
      />

      <View style={estilos.grupo}>
        <Text style={estilos.rotulo}>Serviço</Text>
        <View style={estilos.opcoes}>
          {servicos.map((s) => {
            const escolhido = servico === s.nome;
            return (
              <Pressable
                key={s.id}
                onPress={() => setServico(s.nome)}
                style={[estilos.opcao, escolhido && estilos.opcaoEscolhida]}
              >
                <Text
                  style={[
                    estilos.textoOpcao,
                    escolhido && estilos.textoOpcaoEscolhida,
                  ]}
                >
                  {s.nome}
                </Text>
              </Pressable>
            );
          })}
        </View>
        {erros.servico ? (
          <Text style={estilos.erro}>{erros.servico}</Text>
        ) : null}
      </View>

      <CampoTexto
        rotulo="Data"
        valor={data}
        aoMudar={setData}
        placeholder="DD/MM/AAAA"
        erro={erros.data}
      />
      <CampoTexto
        rotulo="Horário"
        valor={horario}
        aoMudar={setHorario}
        placeholder="HH:MM"
        erro={erros.horario}
      />

      <View style={estilos.botoes}>
        <Botao titulo="Salvar" icone="checkmark" cheio aoPressionar={salvar} />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 16, gap: 20 },
  grupo: { gap: 6 },
  rotulo: {
    fontFamily: fontes.medio,
    fontSize: 14,
    color: cores.textoSecundario,
  },
  erro: { fontFamily: fontes.normal, fontSize: 13, color: cores.erro },
  opcoes: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  opcao: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  opcaoEscolhida: {
    backgroundColor: cores.destaque,
    borderColor: cores.destaque,
  },
  textoOpcao: {
    fontFamily: fontes.normal,
    fontSize: 14,
    color: cores.texto,
  },
  textoOpcaoEscolhida: { color: cores.fundo },
  botoes: { flexDirection: "row", marginTop: 8 },
});
