import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
interface SettingOptionProps {
  title: string;
  icon: string;
  //onPress: () => void;
  RightSideComponent: React.ReactNode;
}

const SettingOptions: React.FC<SettingOptionProps> = ({
  title,
  icon,
  //onPress,
  RightSideComponent,
}) => {
  const { theme } = useTheme();
  const iconColor = theme.mode == "light" ? "black" : "white";
  return (
    <TouchableOpacity
      style={styles.optionButton}
      // onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome name={icon} size={24} color={iconColor} />
      <Text
        style={
          theme.mode == "light"
            ? styles.optionButtonText
            : styles.darkoptionButtonTxt
        }
      >
        {title}
      </Text>
      {RightSideComponent}
    </TouchableOpacity>
  );
};

export default SettingOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,

    // Add hover effect styles
  },
  optionButtonText: {
    marginLeft: 20,
    fontSize: 16,
  },
  darkoptionButtonTxt: {
    marginLeft: 20,
    fontSize: 16,
    color: "white",
  },
});
