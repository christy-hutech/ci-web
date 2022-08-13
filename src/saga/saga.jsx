import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const createUsingAxios = (url, payload = null) => {
    return axios.post(url, payload);
};

const fetchUsingAxios = (url, payload = null) => {
    return axios.get(url,payload);
};


function* fetchData(action) {
    try {
        const posts = yield call(
        fetchUsingAxios,
        "https://jsonplaceholder.typicode.com/albums"
      );
      yield put({ type: "FETCH_DATA_SUCCESS", result: posts });
    } catch (e) {
      yield put({ type: "FETCH_DATA_FAILED", error: e.message });
    }
}

function* addData(action) {
    try {
      const data = yield call(
        createUsingAxios,
        "https://jsonplaceholder.typicode.com/albums",
        action.payload
      );
      yield put({ type: "ADD_DATA_SUCCESS", result: data });
    } catch (e) {
      yield put({ type: "ADD_DATA_FAILED", error: e.message });
    }
}

function* allSagas() {

    yield all([
      takeLatest("FETCH_DATA", fetchData),
      takeLatest("ADD_DATA", addData),
    ]);
  }
    
  export default allSagas;