import React from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text, Image} from "react-native";
import api from "./config/Axios";

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export default function App() {
  const [news, setNews] = useState<INews[]>();

  useEffect(() => {
    (async () => {
      const { data } = await api.get("");

      if (!news) {
        setNews(data.articles);
      }
    })();
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <Text>{ item.title }</Text>
            <Text>Author: { item.author }</Text>
            <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    backgroundColor: "#000",
    color: "#fff",
  },
  imageStyle: {
    width: '200px',
    height: '200px'
  }
});
