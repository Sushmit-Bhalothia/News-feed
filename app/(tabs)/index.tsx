import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import SearchBar from "../../components/searchBar";
import Articles from "../../components/Articles";

export default function TabOneScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("common:Discover")}</Text>
      <Text style={styles.Subtitle}>{t("common:Discreption")}</Text>
      <SearchBar></SearchBar>
      <Articles></Articles>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginLeft: 15,
    fontWeight: "bold",
    // flex: 1,
    // alignItems: "fle",
  },
  Subtitle: {
    fontSize: 17,
    marginLeft: 15,
    color: "#6b6464",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
