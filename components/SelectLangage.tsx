import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { LANGUAGES, translate } from "../constants/DCSLocalize";
import { StyleSheet } from "react-native";
import { useLanguage } from "../providers/LanguageProvider";
import { useTranslation } from "react-i18next";
import { useTheme } from "@rneui/themed";

const SelectLanguages = () => {
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [value, setValue] = useState(language);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <DropDownPicker
        closeAfterSelecting
        closeOnBackPressed
        open={open}
        value={value}
        items={LANGUAGES}
        setOpen={setOpen}
        onChangeValue={changeLanguage as any}
        setValue={setValue}
        style={{
          backgroundColor: theme.mode == "light" ? "#fff" : "black",
          borderColor: theme.mode == "light" ? "black" : "#fff",

          marginTop: -5,
          width: 200,

          //   alignContent: "flex-end",
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.mode == "light" ? "#fff" : "black", // Set the background color of the dropdown when opened
        }}
        textStyle={{ color: theme.mode == "light" ? "black" : "#fff" }}
      />
    </View>
  );
};

export default SelectLanguages;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "60%",
    padding: 10,
    gap: 10,
    justifyContent: "flex-end",
    marginBottom: 40,
    // backgroundColor: "black",
  },
  txt: {
    marginTop: 12,
  },
});
