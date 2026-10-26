import { AgendaProvider } from "@/context/AgendaContext";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [carregou] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });
  if (!carregou) return null;

  return (
    <AgendaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0D1017" },
          headerTintColor: "#FFFFFF",
          contentStyle: { backgroundColor: "#0D1017" },
        }}
      />
    </AgendaProvider>
  );
}
