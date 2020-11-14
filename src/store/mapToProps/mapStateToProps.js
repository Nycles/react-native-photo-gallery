const mapStateToProps = (component) => {
  switch (component) {
    case "List":
      return (state) => {
        return {
          pages: state.pages,
          photos: state.photos,
        }
      }
    default:
      return undefined
  }
}

export default mapStateToProps
