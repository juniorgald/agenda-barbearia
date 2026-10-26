import { cores } from "@/constants/cores";
import { fontes } from "@/constants/fontes";
import { raio } from "@/constants/tamanhos";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Propriedades = {
  rotulo: string;
  valor: string;
  aoMudar: (texto: string) => void;
  placeholder: string;
  erro?: string;
};

export default function CampoTexto({
  rotulo,
  valor,
  aoMudar,
  placeholder,
  erro,
}: Propriedades) {
  return (
    <View style={estilos.grupo}>
      <Text style={estilos.rotulo}>{rotulo}</Text>
      <TextInput
        style={[estilos.campo, erro ? estilos.campoErro : null]}
        value={valor}
        onChangeText={aoMudar}
        placeholder={placeholder}
        placeholderTextColor={cores.placeholder}
      />
      {erro ? <Text style={estilos.erro}>{erro}</Text> : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  grupo: { gap: 6 },
  rotulo: {
    fontFamily: fontes.medio,
    fontSize: 14,
    color: cores.textoSecundario,
  },
  campo: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.campo,
    padding: 14,
    fontFamily: fontes.normal,
    fontSize: 16,
    color: cores.texto,
  },
  campoErro: { borderColor: cores.erro },
  erro: { fontFamily: fontes.normal, fontSize: 13, color: cores.erro },
});
