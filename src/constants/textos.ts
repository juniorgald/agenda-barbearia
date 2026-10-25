import { Platform, StyleSheet } from "react-native";
import { cores } from "./cores";
import { fontes } from "./fontes";
import { fonte } from "./tamanhos";

export const fonteMonoespacada = Platform.select({
  ios: "Menlo",
  android: "monospace",
  default: "monospace",
});

export const textos = StyleSheet.create({
  titulo: {
    fontFamily: fontes.preto,
    color: cores.texto,
    fontSize: fonte.titulo,
    letterSpacing: -0.5,
    lineHeight: 38,
  },
  subtitulo: {
    fontFamily: fontes.medio,
    color: cores.texto,
    fontSize: fonte.media,
  },
  corpo: {
    fontFamily: fontes.normal,
    color: cores.textoSecundario,
    fontSize: fonte.normal,
  },
  rotulo: {
    fontFamily: fontes.medio,
    color: cores.textoSecundario,
    fontSize: fonte.pequena,
  },
  numero: {
    fontFamily: fontes.fino,
    color: cores.texto,
    fontSize: fonte.grande,
    letterSpacing: -1,
  },
  numeroForte: {
    fontFamily: fontes.preto,
    color: cores.texto,
    fontSize: fonte.grande,
    letterSpacing: -1,
  },
  monoespacado: {
    color: cores.textoSecundario,
    fontSize: fonte.normal,
    fontFamily: fonteMonoespacada,
  },
});
