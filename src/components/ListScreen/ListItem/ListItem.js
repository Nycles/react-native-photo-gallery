import React from "react"
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native"

const ListItem = (props) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.item}>
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Photo", { fullPhoto: props.fullPhoto })}>
          <Image style={styles.image} resizeMode="cover" source={{ uri: props.regularPhoto }} />
        </TouchableWithoutFeedback>

        <View style={styles.info}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.author}>{props.author}</Text>
        </View>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  itemWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  item: {
    width: 320,
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 10,
  },
  info: {
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  author: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "gray",
  },
})
