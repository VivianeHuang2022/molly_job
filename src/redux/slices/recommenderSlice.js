import { createSlice } from '@reduxjs/toolkit';
import { fetchRecommendData } from '../actions/fetcDataActions';

// 定义表单的初始值
const initialValues = {
  //recommender special value
  recommenderFirstName: '',
  recommenderLastName: '',
  recommenderPosition: '',
  recommenderInstitution: '',
  recommenderEmail: '',
  recommenderIntro: '',
  recommendRelationship: '',
  recommendActivity: '',

  //from other part
  firstName: '',
  surname: '', //按照最初的coverletter沿用的名字,如果要统一命名要一起修改对其

  dreamDegree: '',
  dreamUni: '',
  dreamUniAddress: '',
  dreamMajor: '',
  dreamCountry: '',

  currentUni: '',
  currentCountry: '',
  currentDegree: '',
  currentMajor: '',
  currentGPA: '',
};

// 创建 recommenderSlice
const recommenderSlice = createSlice({
  name: 'recommender',
  initialState: {
    formData: initialValues,
  },
  reducers: {
    // 更新表单字段值的 reducer
    updateFormField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // 重置表单的 reducer
    resetForm(state) {
      Object.keys(state).forEach((key) => {
        state[key] = initialValues[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecommendData.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(fetchRecommendData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// 导出 action creators
export const { updateFormField, resetForm } = recommenderSlice.actions;
export const selectFormData = (state) => state.recommender.formData;

// 导出 reducer
export default recommenderSlice.reducer;
