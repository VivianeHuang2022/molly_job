import { createSlice } from '@reduxjs/toolkit';

// 从本地存储中获取初始 topicId，如果没有缓存则默认为1
const cachedTopicId = localStorage.getItem('topicId');
let initialState = {
  topicId: cachedTopicId || '1', // 初始 topicId 为1
};

// 根据缓存的 topicId 来确定初始的用户身份
initialState = {
  userType: initialState.topicId === '1' ? 'student' : 'work', // 根据缓存的 topicId 确定初始的用户身份
};

const userTypeSlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    switchUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const { switchUserType } = userTypeSlice.actions;

export const selectCurrentUserType = (state) => state.userType.userType;
export const selectCurrentTopicId = (state) => state.userType.topicId;

export default userTypeSlice.reducer;
