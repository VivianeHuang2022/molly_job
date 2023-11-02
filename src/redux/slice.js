import { createSlice } from '@reduxjs/toolkit';

const getInitialFormData = () => {
  const storedFormData = localStorage.getItem('formData');
  return storedFormData ? JSON.parse(storedFormData) : {};
};

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: getInitialFormData()
  },
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;