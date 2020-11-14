import React, { useEffect, useState } from "react"

import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native"
import { connect } from "react-redux"

import mapStateToProps from "../../store/mapToProps/mapStateToProps"
import mapDispatchToProps from "../../store/mapToProps/mapDispatchToProps"

import ListItem from "./ListItem/ListItem"
import Preloader from "../common/Preloader"

const ListScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const loadPhotos = () => {
    setIsLoading(true)
    props
      .getPhotos(1)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }

  const refreshPhotos = () => {
    setIsRefreshing(true)
    props
      .getPhotos(1)
      .then(() => {
        props.setPages(1)
        setIsRefreshing(false)
      })
      .catch(() => setIsRefreshing(false))
  }

  const loadMorePhotos = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true)
      let page = props.pages + 1
      props
        .getMorePhotos(page)
        .then(() => {
          props.setPages(page)
          setIsLoadingMore(false)
        })
        .catch(() => setIsLoadingMore(false))
    }
  }

  const item = ({ item }) => {
    return (
      <ListItem
        navigation={props.navigation}
        regularPhoto={item.urls.regular}
        fullPhoto={item.urls.full}
        title={item.alt_description}
        author={item.user.name}
      />
    )
  }

  useEffect(() => {
    loadPhotos()
  }, [])

  if (isLoading) {
    return <Preloader />
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={props.photos}
        renderItem={item}
        keyExtractor={(item, index) => String(index)}
        refreshing={isRefreshing}
        onRefresh={refreshPhotos}
        onEndReached={loadMorePhotos}
        onEndReachedThreshold={0.3}
      />
    </View>
  )
}

export default connect(mapStateToProps("List"), mapDispatchToProps("List"))(ListScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
})
