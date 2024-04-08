// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice'; 

import { combineReducers } from '@reduxjs/toolkit';
import cvDataSlice from './cvDataSlice';
import languageReducer from './languageSlice';


const reducers = combineReducers({
  coverLetter: rootReducer,
  cvData: cvDataSlice,
  language: languageReducer,

});

const store = configureStore({
  reducer: reducers,
});


  
  export default store;
