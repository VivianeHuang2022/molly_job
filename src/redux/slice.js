import { createSlice } from '@reduxjs/toolkit';

//job初始化数据
const getInitialJobData = (pNum) => {
  const storedJobData = localStorage.getItem('jobDataQP'+pNum);
  return storedJobData ? JSON.parse(storedJobData) : pNum===5?{"years":0}:{};
};

//std初始化数据
const getInitialStdData = (pNum) => {
  const storedStdData = localStorage.getItem('stdDataQP'+pNum);
  return storedStdData?JSON.parse(storedStdData):{};
};

//job数据存储
export const jobDataSaveHandle = (name, value, pNum)=>{

  const storedJobData = JSON.parse(localStorage.getItem('jobDataQP'+pNum)) || {};

    const updatedJobData = { ...storedJobData, [name]: value };

    localStorage.setItem('jobDataQP'+pNum, JSON.stringify(updatedJobData));
}

//std数据存储
export const stdDataSaveHandle = (name, value, pNum)=>{

  const storedStdData = JSON.parse(localStorage.getItem('stdDataQP'+pNum)) || {};

    const updatedStdData = { ...storedStdData, [name]: value };

    localStorage.setItem('stdDataQP'+pNum, JSON.stringify(updatedStdData));
}

export const dataSlice = createSlice({
  name: 'localData',
  initialState: {
    jobDataQP1: getInitialJobData(1),
    jobDataQP2: getInitialJobData(2),
    jobDataQP3: getInitialJobData(3),
    jobDataQP4: getInitialJobData(4),
    jobDataQP5: getInitialJobData(5),
    stdDataQP1: getInitialStdData(1),
    stdDataQP2: getInitialStdData(2),
    stdDataQP3: getInitialStdData(3),
    stdDataQP4: getInitialStdData(4),
    stdDataQP5: getInitialStdData(5),
    stdDataQP6: getInitialStdData(6),
    stdDataQP7: getInitialStdData(7),
    stdDataQP8: getInitialStdData(8),
    stdDataQP9: getInitialStdData(9),
  },
  reducers: {
    updateJobData(state, action) {
      const { pNum, payload } = action.payload; 
      // console.log(pNum)
      // console.log(payload)
      switch(pNum){
        case 1:
          state.jDataQP1 = { ...state.jobDataQP1, ...payload };
          break;
        case 2:
          state.jobDataQP2 = { ...state.jobDataQP2, ...payload };
          break;
        case 3:
          state.jobDataQP3 = { ...state.jobDataQP3, ...payload};
          break;
        case 4:
          state.jobDataQP4 = { ...state.jobDataQP4, ...payload };
          break;
        case 5:
          state.jobDataQP5 = { ...state.jobDataQP5, ...payload };
          break;
        default:
          state.jobDataQP1 = { ...state.jobDataQP1, ...payload };
      }
    },
    updateStdData(state, action) {
      const { pNum, payload } = action.payload; 
      // console.log(pNum)
      // console.log(payload)
      switch(pNum){
        case 1:
          state.stdDataQP1 = { ...state.stdDataQP1, ...payload };
          break;
        case 2:
          state.stdDataQP2 = { ...state.stdDataQP2, ...payload };
          break;
        case 3:
          state.stdDataQP3 = { ...state.stdDataQP3, ...payload};
          break;
        case 4:
          state.stdDataQP4 = { ...state.stdDataQP4, ...payload };
          break;
        case 5:
          state.stdDataQP5 = { ...state.stdDataQP5, ...payload };
          break;
        case 6:
          state.stdDataQP6 = { ...state.stdDataQP6, ...payload };
          break;
        case 7:
          state.stdDataQP7 = { ...state.stdDataQP7, ...payload };
          break;
        case 8:
          state.stdDataQP8 = { ...state.stdDataQP8, ...payload };
          break;
        case 9:
          state.stdDataQP9 = { ...state.stdDataQP9, ...payload };
          break;
        default:
            break;
      }
    },
  },
});

export const { updateJobData,updateStdData } = dataSlice.actions;
export default dataSlice.reducer;

