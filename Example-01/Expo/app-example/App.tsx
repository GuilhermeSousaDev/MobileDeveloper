import React, { useEffect, useState } from "react";
import { 
  StyleSheet, 
  View, 
  FlatList, 
  Text,
  Image, 
  Button,
  TextInput
} from "react-native";
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
  const [text, setText] = useState<string>();

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
      <TextInput 
        style={{ height: 40, borderColor: '#000' }}
        placeholder="Type here to translate!"
        onChangeText={txt => setText(txt)}
        defaultValue={text}
      />

      <Text style={{padding: 10, fontSize: 42}}>
        { text?.split(' ').map((word) => word && '🍕').join(' ') }
      </Text>
      <View style={styles.container}>
        <FlatList
          data={news}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.flatListStyle}>
              <Text>{ item.title }</Text>
              <Text>Author: { item.author }</Text>
              <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
              <Button 
                title="Click" 
                onPress={() => console.log(item.title)}
              />
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  flatListStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 8
  },
  textStyle: {
    backgroundColor: "#000",
    color: "#fff",
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 10
  }
});
