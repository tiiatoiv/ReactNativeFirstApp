import React, { Component } from "react";
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  List,
  ListItem,
  FlatList} from "react-native";

class Catlist extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={this.props.mediaArray}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.touchable}>
                <Image
                  style={styles.image}
                  source={{ uri: item.thumbnails.w160 }}
                />
                <View style={styles.text}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff"
  },

  ListItem: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap"
  },

  image: {
    flexDirection: "row",
    width: 100,
    height: "100%",
    flex: 1,
    margin: 10
  },

  text: {
    flex: 1,
    margin: 10
  },

  touchable: {
    backgroundColor: "#f4f4f4",
    flexDirection: "row"
  }
});


export default Catlist;
