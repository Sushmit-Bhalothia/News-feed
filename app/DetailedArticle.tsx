import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import Articles from "../components/Articles";

interface Article {
  title: string;
  content: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  url: string;
}

export default function DetailedArticle() {
  const route = useRoute();
  const { article } = route.params as { article: Article };
  const defaultImageUrl = require("../assets/images/setting.jpeg");
  // console.log(article);
  const publishedAtSubstring = article.publishedAt.slice(0, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Image
        style={{ height: 300, width: "100%" }}
        source={
          article.urlToImage ? { uri: article.urlToImage } : defaultImageUrl
        }
      />
      <View style={styles.meta}>
        <Text style={styles.metaData}>By :{article.author}</Text>

        <Text style={styles.metaData}>
          Published At: {publishedAtSubstring}
        </Text>
      </View>

      <Text style={styles.description}>{article.content}</Text>
      <Text style={{ margin: 10 }}>Url :{article.url}</Text>
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  meta: {
    margin: 10,
    textAlign: "left",
  },
  metaData: {
    fontSize: 17,
    fontWeight: "bold",
    marginRight: "-50%",
    color: "#6a6b6b",
  },
});
