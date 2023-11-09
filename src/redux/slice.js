import { createSlice } from '@reduxjs/toolkit';

const getInitialFormData = (pNum) => {
  const storedFormData = localStorage.getItem('formDataQP'+pNum);
  return storedFormData ? JSON.parse(storedFormData) : pNum===5?{"years":0}:{};
};

export const dataSaveHandle = (name, value, pNum)=>{

  const storedFormData = JSON.parse(localStorage.getItem('formDataQP'+pNum)) || {};

    const updatedFormData = { ...storedFormData, [name]: value };

    localStorage.setItem('formDataQP'+pNum, JSON.stringify(updatedFormData));
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formDataQP1: getInitialFormData(1),
    formDataQP2: getInitialFormData(2),
    formDataQP3: getInitialFormData(3),
    formDataQP4: getInitialFormData(4),
    formDataQP5: getInitialFormData(5),
  },
  reducers: {
    updateFormData(state, action) {
      const { pNum, payload } = action.payload; 
      // console.log(pNum)
      // console.log(payload)
      switch(pNum){
        case 1:
          state.formDataQP1 = { ...state.formDataQP1, ...payload };
          break;
        case 2:
          state.formDataQP2 = { ...state.formDataQP2, ...payload };
          break;
        case 3:
          state.formDataQP3 = { ...state.formDataQP3, ...payload};
          break;
        case 4:
          state.formDataQP4 = { ...state.formDataQP4, ...payload };
          break;
        case 5:
          state.formDataQP5 = { ...state.formDataQP5, ...payload };
          break;
        default:
          state.formDataQP1 = { ...state.formDataQP1, ...payload };
      }
    }
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;

