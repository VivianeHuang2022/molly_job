// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage:
      localStorage.getItem('Lan') ||
      (navigator.language.startsWith('zh') ? 'CN' : 'EN'),
  },
  reducers: {
    switchLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      localStorage.setItem('Lan', state.currentLanguage);
    },
  },
});

export const selectCurrentLanguage = (state) => state.language.currentLanguage;
export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
