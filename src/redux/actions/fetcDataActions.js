import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCoverletter,
  getRecommendation,
  getResume,
  getResume_MOCK,
} from '../../utils/api';

const topicId = localStorage.getItem('topicId');

//获取异步状态的公共函数
export const fetchThunkCreator = (type, fetchFunction) => {
  return createAsyncThunk(type, async () => {
    try {
      const response = await fetchFunction(topicId);
      return response.data.msg;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  });
};

export const fetchCVData = fetchThunkCreator(
  'cvData/fetchCVData',
  getResume_MOCK
);

export const fetchRecommendData = fetchThunkCreator(
  'recommendData/fetchRecommendData',
  getRecommendation
);

export const fetchCoverletterData = fetchThunkCreator(
  'coverletter/fetchCoverletterData',
  getRecommendation
);
