// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice'; 

import { combineReducers } from '@reduxjs/toolkit';
import cvDataSlice from './cvDataSlice';

const reducers = combineReducers({
  coverLetter: rootReducer,
  cvData: cvDataSlice,
});

const store = configureStore({
  reducer: reducers,
});


  
  export default store;
