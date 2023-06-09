import React, { useEffect, useState } from "react";
import { useTheme } from "@rneui/themed";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Text } from "@rneui/themed";

import { StyleSheet } from "react-native";

const SelectTheme = () => {
  const { theme, updateTheme } = useTheme();
  const [value, setValue] = useState(theme.mode);

  useEffect(() => {
    updateTheme({ mode: value });
  }, [value]);

  const handleToggleTheme = () => {
    const newTheme = value === "light" ? "dark" : "light";
    setValue(newTheme);
  };

  return (
    <View
      style={theme.mode == "light" ? styles.container : styles.darkcontainer}
    >
      <TouchableOpacity
        onPress={handleToggleTheme}
        activeOpacity={0.7}
        style={styles.toggleButton}
      >
        {value === "light" ? (
          <FontAwesome5 name="moon" size={24} color="black" />
        ) : (
          <FontAwesome5 name="sun" size={24} color="yellow" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SelectTheme;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  darkcontainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  txt: {
    marginTop: 12,
  },
  toggleButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,

    marginLeft: 70,
  },
});
