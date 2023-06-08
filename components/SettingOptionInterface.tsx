import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
import { color } from "@rneui/themed/dist/config";
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
      style={
        theme.mode == "light" ? styles.optionButton : styles.darkOptionButton
      }
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
    width: "70%",
    justifyContent: "space-between",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 400,
    marginVertical: 5,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    // paddingVertical: 5,

    // Add hover effect styles
  },
  darkOptionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 400,
    marginVertical: 5,
    backgroundColor: "black",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
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
