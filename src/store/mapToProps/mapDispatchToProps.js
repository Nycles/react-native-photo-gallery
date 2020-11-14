import { getPhotos, getMorePhotos, setPages } from "../../reducers/gallery"

const mapDispatchToProps = (component) => {
  switch (component) {
    case "List":
      return {
        getPhotos,
        getMorePhotos,
        setPages,
      }
    default:
      return undefined
  }
}

export default mapDispatchToProps
