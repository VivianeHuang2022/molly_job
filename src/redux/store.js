// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice'; 

import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';

import cvDataSlice from './slices/cvDataSlice';
import profileReducer from './slices/profileSlice';
import recommenderReducer from './slices/recommenderSlice';
import userTypeSlice from './slices/userTypeSlice';


const reducers = combineReducers({
  coverLetter: rootReducer,
  cvData: cvDataSlice,
  profile: profileReducer,
  language: languageReducer,
  recommender: recommenderReducer,
  userType: userTypeSlice,

});

const store = configureStore({
  reducer: reducers,
});


  
  export default store;
