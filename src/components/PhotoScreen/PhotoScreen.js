import React from "react"
import { StyleSheet, Image, View } from "react-native"

const PhotoScreen = ({ route }) => {
  const photo = route.params.fullPhoto

  return (
    <View style={styles.container}>
      <Image style={styles.photo} resizeMode="contain" source={{ uri: photo }} />
    </View>
  )
}

export default PhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    flex: 1,
  },
})
