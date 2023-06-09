import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import SettingOptions from "../../components/SettingOptionInterface";
import SelectTheme from "../../components/SelectTheme";
import SelectLanguages from "../../components/SelectLangage";
import SendFeedback from "../../components/SendFeedBack";
import ReportBug from "../../components/ReportBug";
import { useTranslation } from "react-i18next";
import { FontAwesome } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const { t } = useTranslation(); //for multiple language suppoort
  const { theme } = useTheme();
  const iconColor = theme.mode == "light" ? "black" : "white"; //icon color of the Fontawesome

  return (
    //linear fradient  back ground color for the page
    <LinearGradient
      colors={[theme.mode == "light" ? "#b4b0d9" : "#222224", "#e1e1e3"]}
      style={[
        styles.container,
        theme.mode === "light" ? styles.lightContainer : styles.darkContainer,
      ]}
    >
      <View style={{ marginVertical: 20 }}>
        <FontAwesome name="gear" size={280} color={iconColor} />
      </View>

      {/* All the available options  in the Settings */}
      <SettingOptions
        title={t("common:ChangeTheme")}
        icon="paint-brush"
        RightSideComponent={<SelectTheme />}
      />
      <SettingOptions
        title={t("common:Report")}
        icon="bug"
        RightSideComponent={<ReportBug />}
      />
      <SettingOptions
        title={t("common:SendFeed")}
        icon="comments"
        RightSideComponent={<SendFeedback />}
      />
      <SettingOptions
        title={t("common:ChangeLang")}
        icon="language"
        RightSideComponent={<SelectLanguages />}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lightContainer: {
    backgroundColor: "#dfe0f5",
  },
  darkContainer: {
    backgroundColor: "#858176",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
