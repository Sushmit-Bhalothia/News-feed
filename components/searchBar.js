import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View } from "./Themed";
import { useTranslation } from "react-i18next";

const searchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { t } = useTranslation();

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={t("common:Search")}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default searchBar;
