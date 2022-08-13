import { combineReducers } from "redux";
const initialState = {
    fetching: false,
    result: null,
    error: null,
};

const listData = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          fetching: true,
          result: null,
          error: null,
        };
      case "FETCH_DATA_SUCCESS":
        return {
          ...state,
          fetching: false,
          result: action.result.data,
          error: null,
        };
  
      case "FETCH_DATA_FAILED":
        return {
          ...state,
          fetching: false,
          result: null,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const addData = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_DATA":
        return {
          ...state,
          fetching: true,
          result: null,
          error: null,
        };
      case "ADD_DATA_SUCCESS":
        return {
          ...state,
          fetching: false,
          result: action.result.data,
          error: null,
        };
  
      case "ADD_DATA_FAILED":
        return {
          ...state,
          fetching: false,
          result: null,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  export default combineReducers({ listData,addData});