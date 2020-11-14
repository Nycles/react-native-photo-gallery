const api = {
  getPhotos: (page) => {
    const url = "https://api.unsplash.com/photos/?client_id=XwcEAGJLuwmvi3cZJf1-puMRyZ6n1hUADLqZSVEskSA"
    return fetch(`${url}&page=${page}`).then((response) => response.json())
  },
}

export default api
