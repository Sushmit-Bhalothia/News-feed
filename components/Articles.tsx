import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DetailedArticle from "./DetailedArticle";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

const url =
  "https://newsapi.org/v2/everything?q=apple&from=2023-06-06&to=2023-06-06&sortBy=popularity&apiKey=ca195cc3d1124f06a4f77af6aaf5cd97";

const defaultImageUrl = require("../assets/images/setting.jpeg");

const Articles = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Article[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        setFilteredData(json.articles);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    const filteredArticles = data.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredArticles);
  };

  const handleArticlePress = (item: Article) => {
    navigation.navigate("DetailedArticle", { article: item });
  };

  const renderItem = ({ item }: { item: Article }) => (
    <TouchableOpacity onPress={() => handleArticlePress(item)}>
      <View style={styles.article}>
        <View style={styles.items}>
          <Image
            style={{ height: 200, width: 140 }}
            source={
              item.urlToImage ? { uri: item.urlToImage } : defaultImageUrl
            }
          />
        </View>
        <View style={styles.items}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ marginVertical: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(_, index) => String(index)}
            renderItem={renderItem}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dfe0f5",
  },
  articleContainer: {
    padding: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
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
    justifyContent: "center",
    alignContent: "flex-start",
    paddingRight: 10,
  },
});

export default Articles;
