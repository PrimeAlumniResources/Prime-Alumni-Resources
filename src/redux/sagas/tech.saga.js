import { put, take, takeLatest } from "redux-saga/effects"
import axios from "axios"

function* updateCurrent ( action ) {
    console.log('this is action.payload in updateKnown',action.payload);
   try {
        const response = yield axios.put('/api/tech/current',action.payload)
    } catch (error) {
        console.log('error in the updateCurrent Tech saga function',error);
    }
}


function* updateKnown (action ) {
    console.log('this is action.payload in updateCurrent',action.payload);
    try {
         const response = yield axios.put('/api/tech/known',action.payload)
     } catch (error) {
         console.log('error in the updateCurrent Tech saga function',error);
     }
     
 }

export default function* techSaga () {
    
    yield takeLatest('UPDATE_CURRENT_TECH',updateCurrent)
    yield takeLatest('UPDATE_KNOWN_TECH',updateKnown)
}