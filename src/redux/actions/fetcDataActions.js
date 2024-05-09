import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCoverletter, getResume, getResume_MOCK } from '../../utils/api';

const topicId = localStorage.getItem('topicId');

//获取异步状态的公共函数
export const fetchThunkCreator = (type, fetchFunction) => {
  return createAsyncThunk(type, async () => {
    try {
      const response = await fetchFunction(topicId);
      console.log(response.data.msg)
      return response.data.msg;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  });
};

export const fetchCVData = fetchThunkCreator('cvData/fetchCVData', getResume);

export const fetchCoverletterData = fetchThunkCreator(
  'coverletter/fetchCoverletterData',
  getCoverletter
);
