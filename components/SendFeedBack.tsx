import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import { useTheme } from "@rneui/themed";

const SendFeedback = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState("");
  const { theme } = useTheme();
  const value = theme.mode;

  const handleSendFeedback = () => {
    if (feedback) {
      const emailSubject = "Feedback";
      const emailBody = `Feedback: ${feedback}`;
      const emailRecipient = "sushmitbhalothiagmail.com";

      MailComposer.composeAsync({
        recipients: [emailRecipient],
        subject: emailSubject,
        body: emailBody,
      })
        .then((result: any) => {
          if (result.status === "sent") {
            Alert.alert("Feedback Sent", "Thank you for your feedback!", [
              { text: "OK" },
            ]);
          }
        })
        .catch((error: any) => {
          Alert.alert(
            "Error",
            "Failed to send feedback. Please try again." + error,
            [{ text: "OK" }]
          );
        });

      setModalVisible(false);
      setFeedback("");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <FontAwesome name="comment-o" size={24} color=  "black" /> */}
        {value === "light" ? (
          <FontAwesome name="comment-o" size={24} color="black" />
        ) : (
          <FontAwesome name="comment-o" size={24} color="white" />
        )}
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <TextInput
            placeholder="Enter your feedback"
            value={feedback}
            onChangeText={(text) => setFeedback(text)}
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
            }}
            multiline
          />
          <TouchableOpacity
            onPress={handleSendFeedback}
            style={{
              backgroundColor: "blue",
              padding: 10,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>Send Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              backgroundColor: "red",
              padding: 10,
              alignItems: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SendFeedback;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "center",
  },
});
