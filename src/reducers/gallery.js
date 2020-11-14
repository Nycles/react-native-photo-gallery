import api from "../utils/api"

// TYPES

const SET_PHOTOS = "gallery/SET_PHOTOS"
const SET_MORE_PHOTOS = "gallery/SET_MORE_PHOTOS"
const SET_PAGES = "gallery/SET_PAGES"

// INITIAL STATE

const initialState = {
  photos: [],
  pages: 1,
}

// REDUCER

const gallery = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      }
    case SET_MORE_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.photoss],
      }
    case SET_PAGES:
      return {
        ...state,
        pages: action.pages,
      }

    default:
      return state
  }
}

export default gallery

// ACTION CREATORS

const setPhotos = (photos) => {
  return { type: SET_PHOTOS, photos }
}

const setMorePhotos = (photoss) => {
  return { type: SET_MORE_PHOTOS, photoss: photoss }
}

export const setPages = (pages) => {
  return { type: SET_PAGES, pages }
}

// THUNK CREATORS

export const getPhotos = (page) => (dispatch) => {
  return api.getPhotos(page).then((response) => dispatch(setPhotos(response)))
}

export const getMorePhotos = (page) => (dispatch) => {
  return api.getPhotos(page).then((response) => dispatch(setMorePhotos(response)))
}
