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
// import DetailedArticle from "./DetailedArticle";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@rneui/themed";
import { useTranslation } from "react-i18next";

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
  const { theme } = useTheme();
  const { t } = useTranslation();

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
      <View style={theme.mode == "light" ? styles.article : styles.darkArticle}>
        <View style={styles.items}>
          <Image
            style={{ height: 230, width: 140 }}
            source={
              item.urlToImage ? { uri: item.urlToImage } : defaultImageUrl
            }
          />
        </View>
        <View style={theme.mode == "light" ? styles.items1 : styles.darkItems1}>
          <Text style={theme.mode == "light" ? styles.title : styles.darkTitle}>
            {item.title}
          </Text>
          <Text
            style={
              theme.mode == "light" ? { color: "black" } : { color: "white" }
            }
          >
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ marginVertical: 10 }}>
        <Searchbar
          placeholder={t("common:Search")}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <LinearGradient
        colors={[theme.mode == "light" ? "#b4b0d9" : "#222224", "#e1e1e3"]}
        style={[
          styles.container,
          theme.mode === "light" ? styles.lightContainer : styles.darkContainer,
        ]}
      >
        <View
          style={
            theme.mode == "light" ? styles.container : styles.darkContainer
          }
        >
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
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#dfe0f5",
  },
  lightContainer: {
    backgroundColor: "#dfe0f5",
  },
  darkContainer: {
    backgroundColor: "#858176",
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
    color: "black",
    flexShrink: 1,
  },
  darkTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
    flexShrink: 1,
  },
  article: {
    backgroundColor: "#f7fcfc",
    flex: 1,
    height: 230,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  darkArticle: {
    backgroundColor: "black",
    flex: 1,
    height: 230,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    // color: "white",
  },
  items: {
    margin: 5,
    justifyContent: "center",
    alignContent: "flex-start",
    paddingRight: 10,
    color: "black",
    // flex: 1,
    //width: 250,
  },
  items1: {
    margin: 5,
    justifyContent: "center",
    alignContent: "flex-start",
    paddingRight: 60,
    color: "black",
    // flex: 1,
    width: 300,

    // width: 250,
  },
  darkItems1: {
    margin: 5,
    justifyContent: "center",
    alignContent: "flex-start",
    paddingRight: 60,
    color: "white",
    width: 300,

    //
  },
});

export default Articles;
