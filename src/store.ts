import { combineReducers, createStore, applyMiddleware } from "redux"
import ShowReducer from "./reducers/ShowReducer";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "@redux-devtools/extension";
import { takeEvery, takeLatest, debounce } from 'redux-saga/effects'
import { SHOWS_QUERY_CHANGE } from "./actions/Shows";
import { fetchShows } from "./saga-s/Show";

const reducer = combineReducers({
    shows: ShowReducer,
});

// this is generator  function 

//   here is the sorting of any query chenging method and takeLatest is work esay with finding the right qurey == what user type   
// and also we call this method with takeEvery but  == takeEvery do some render some bug's with finding a right query  or what  user type is search

 // debounce is the new replace of to takeLatest or takeEvery method 
 // debounce have timing method we can call our data with a time set like here i do


function* rootSaga() {
    yield debounce(100, SHOWS_QUERY_CHANGE, fetchShows)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);



export type State = ReturnType<typeof reducer>;

export default store;










// // this is the setup code for the redux store for your state  data
// 1 ==
// // and here you will know the where you store your data now
// //    so make a new space for the Store all your Data

// // we have options here   // you can create multiple reducer's here
// //  option A = add a new reducer
//     // option B = or add keys to existing state in reducer's

// 2 =   Define actions
// 3 =  Dispacth actions
// 4 = add switch  case to reducers  //  multiple options you have here in all  of these method
// 5 =  add selector's or an single selector
// 6 mapStateTo Props /// maping this state to  props type 
