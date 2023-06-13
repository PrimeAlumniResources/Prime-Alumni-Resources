import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* postJobs(action) {
  // console.log("action.payload:", action.payload); works
  try {
    yield axios.post("/api/jobs", action.payload);
  } catch (err) {
    console.log("error in postJobs saga:", err);
  }
}

export default function* jobsSaga() {
  yield takeLatest('POST_JOBS', postJobs);
}

// ADD JOBS SAGA IN ROOT.SAGA