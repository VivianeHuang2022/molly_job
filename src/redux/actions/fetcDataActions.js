import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getResume,
  getRecommendation,

} from '../../utils/api';

const topicId = localStorage.getItem('topicId');

export const fetchThunkCreator = (type, fetchFunction) => {
  return createAsyncThunk(type, async () => {
    try {
      const response = await fetchFunction(topicId);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  });
};

export const fetchCVData = fetchThunkCreator('cvData/fetchCVData', getResume);

export const fetchRecommendData = fetchThunkCreator(
  'recommendData/fetchRecommendData',
  getRecommendation
);
