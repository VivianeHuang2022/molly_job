import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    generateCount: 0,
    isFirstTime: true,
    generateCountHistory: [], // 用于记录生成次数的历史记录
  },
  reducers: {
    incrementGenerateCount(state) {
      state.generateCount += 1;
    },
    decrementGenerateCount(state) {
      state.generateCount -= 1;
    },
    setUserAccounts(state, action) {
      state.userAccounts = action.payload;
    },
  },
});

export const {
  incrementGenerateCount,
  decrementGenerateCount,
  setUserAccounts,
} = profileSlice.actions;

export const selectProfileStatus = (state) => state.profile;

export default profileSlice.reducer;
