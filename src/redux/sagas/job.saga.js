import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* postJobs(action) {
  // console.log("action.payload:", action.payload); works
  try {
    yield axios.post("/api/jobs", action.payload);
    yield put({type:'GET_JOBS'});
  } catch (err) {
    console.log("error in postJobs saga:", err);
  }
}

function* getJobs() {
  try {
    const response = yield axios.get("/api/jobs");
    const jobs = response.data
    // console.log("RESPONSE:", jobs); COME BACK LATER
  } catch (err) {
    console.log("user get jobs request failed", err);
  }
}

export default function* jobsSaga() {
  yield takeLatest('POST_JOBS', postJobs);
  yield takeLatest('GET_JOBS', getJobs);
}

// ADD JOBS SAGA IN ROOT.SAGA