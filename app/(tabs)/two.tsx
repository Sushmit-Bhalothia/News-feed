import { StyleSheet, ImageBackground, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import SettingOptions from "../../components/SettingOptionInterface";
import SelectTheme from "../../components/SelectTheme";
import SelectLanguages from "../../components/SelectLangage";
import { useTheme } from "@rneui/themed";
import { useTranslation } from "react-i18next";

export default function TabTwoScreen() {
  // const{theme}=useTheme()
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <View
      style={theme.mode == "light" ? styles.container : styles.darkConatiner}
    >
      {/* <Text style={styles.title}>Tab Two</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      <Image
        source={require("../../assets/images/setting.jpeg")}
        style={styles.image}
      ></Image>

      <View
        style={
          theme.mode == "light"
            ? styles.SettingOptionsContainer
            : styles.darkSettingOptionContainer
        }
      >
        <SettingOptions
          title={t("common:ChangeTheme")}
          icon="paint-brush"
          // onPress={}
          RightSideComponent={<SelectTheme />}
        ></SettingOptions>
        <SettingOptions
          title={t("common:ChangeLang")}
          icon="language"
          //onPress={handleLanguageChange}
          RightSideComponent={<SelectLanguages />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#dfe0f5",
  },
  darkConatiner: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#858176",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    height: 360,
  },
  SettingOptionsContainer: {
    marginTop: -70,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 4,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // marginLeft: 30,
    padding: 20,
    backgroundColor: "#fff",
  },
  darkSettingOptionContainer: {
    marginTop: -70,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 4,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // marginLeft: 30,
    padding: 20,
    backgroundColor: "#292727",
  },
});
