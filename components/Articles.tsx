import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

const defaultImageUrl = require("../assets/images/setting.jpeg");

const Articles = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-06-06&to=2023-06-06&sortBy=popularity&apiKey=ca195cc3d1124f06a4f77af6aaf5cd97"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: Article }) => (
    <View style={styles.article}>
      <View style={styles.items}>
        <Image
          style={{ height: 200, width: 140 }}
          source={item.urlToImage ? { uri: item.urlToImage } : defaultImageUrl}
        />
      </View>
      <View style={styles.items}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dfe0f5",
  },
  article: {
    backgroundColor: "#f7fcfc",
    flex: 1,
    height: 200,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  items: {
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Articles;
