import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider, createTheme, Text, Button } from "@rneui/themed";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();
  const isDarkModeEnabled = false; // Set your preferred initial theme mode

  const theme = createTheme({
    components: {
      Text: {
        style: {
          fontFamily: "sans",
        },
      },
      Button: {
        style: {
          backgroundColor: "primary",
        },
      },
    },
    lightColors: {
      primary: "blue",
      secondary: "#0ff",
      background: "#fff",
    },
    darkColors: {
      primary: "blue",
      secondary: "#f1e",
      background: "#292727",
    },

    mode: "light",
  });
  // save button at right side of header

  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
