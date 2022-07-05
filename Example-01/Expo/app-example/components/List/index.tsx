import React, { FC, useEffect, useState } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";
import api from "../../config/Axios";
import styles from "./style";

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

const List: FC = () => {
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
    <>
      <View style={styles.container}>
        <FlatList
          data={news}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.flatListStyle}>
              <Text>{item.title}</Text>
              <Text>Author: {item.author}</Text>
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.imageStyle}
              />
              <Button title="Click" onPress={() => console.log(item.title)} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default List;
