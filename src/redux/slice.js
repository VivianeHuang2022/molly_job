import { createSlice } from '@reduxjs/toolkit';
import { fetchCoverletterData } from './actions/fetcDataActions';
import { logTime } from '../utils/time';

//job初始化数据
const getInitialJobData = (pNum) => {
  const storedJobData = localStorage.getItem('jobDataQP' + pNum);
  return storedJobData
    ? JSON.parse(storedJobData)
    : pNum === 5
    ? { years: 0 }
    : {};
};

//std初始化数据
const getInitialStdData = (pNum) => {
  const storedStdData = localStorage.getItem('stdDataQP' + pNum);
  return storedStdData ? JSON.parse(storedStdData) : {};
};

//job数据存储
export const jobDataSaveHandle = (name, value, pNum) => {
  const storedJobData =
    JSON.parse(localStorage.getItem('jobDataQP' + pNum)) || {};

  const updatedJobData = { ...storedJobData, [name]: value };

  localStorage.setItem('jobDataQP' + pNum, JSON.stringify(updatedJobData));
};

//std数据存储
export const stdDataSaveHandle = (name, value, pNum) => {
  handleRepeatData(name, value, 1);
  const storedStdData =
    JSON.parse(localStorage.getItem('stdDataQP' + pNum)) || {};

  const updatedStdData = { ...storedStdData, [name]: value };
  console.log(updatedStdData);

  localStorage.setItem('stdDataQP' + pNum, JSON.stringify(updatedStdData));
};

//20240519 lily 排查到drUni、drCountry、drMajor、drDegree 这四个需要不同page共用的变量在本地缓存存储时没有更新其调用的问题，故在此处统一处理
const handleRepeatData = (name, value, topicId) => {
  if (
    name === 'drUni' ||
    name === 'drCountry' ||
    name === 'drMajor' ||
    name === 'drDegree'
  ) {
    const storedData = JSON.parse(localStorage.getItem('stdDataQP1')) || {};

    const updateData = {
      ...storedData,
      [name]: value,
    };

    localStorage.setItem('stdDataQP1', JSON.stringify(updateData));
  }
};

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
    // stdDataQP6: getInitialStdData(6),
    // stdDataQP7: getInitialStdData(7),
    // stdDataQP8: getInitialStdData(8),
    // stdDataQP9: getInitialStdData(9),
  },
  reducers: {
    updateJobData(state, action) {
      const { pNum, payload } = action.payload;
      // console.log(pNum)
      // console.log(payload)
      switch (pNum) {
        case 1:
          state.jobDataQP1 = { ...state.jobDataQP1, ...payload };
          break;
        case 2:
          state.jobDataQP2 = { ...state.jobDataQP2, ...payload };
          break;
        case 3:
          state.jobDataQP3 = { ...state.jobDataQP3, ...payload };
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
      switch (pNum) {
        case 1:
          state.stdDataQP1 = { ...state.stdDataQP1, ...payload };
          break;
        case 2:
          state.stdDataQP2 = { ...state.stdDataQP2, ...payload };
          break;
        case 3:
          state.stdDataQP3 = { ...state.stdDataQP3, ...payload };
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoverletterData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoverletterData.fulfilled, (state, action) => {
        state.loading = false;
        const responseData = action.payload;
        const { timeStamp } = responseData;
        const storedStdData = localStorage.getItem('stdDataUpdateTimeStamp');

        const getLocalData = () => {
          logTime(timeStamp, storedStdData);
          state.stdDataQP1 = getInitialStdData(1);
          state.stdDataQP2 = getInitialStdData(2);
          state.stdDataQP3 = getInitialStdData(3);
          state.stdDataQP4 = getInitialStdData(4);
          state.stdDataQP5 = getInitialStdData(5);
        };

        const getBackEndData = () => {
          logTime(timeStamp, storedStdData);

          const stdData1 = {
            drCountry: responseData.dreamCountry,
            drUni: responseData.dreamUni,
            drDegree: responseData.dreamDegree,
            drMajor: responseData.dreamMajor,
          };
          const stdData2 = {
            drCountry: responseData.dreamCountry,
            drUni: responseData.dreamUni,
            drDegree: responseData.dreamDegree,
            drMajor: responseData.dreamMajor,
            curDegree: responseData.currentDegree,
            curMajor: responseData.currentMajor,
            curUni: responseData.currentUni,
            curCountry: responseData.currentCountry,
            curCourses: responseData.currentCourses,
          };
          const stdData3 = {
            getAwards: responseData.getAwards,
            getCompetitions: responseData.getCompetitions,
            getConference: responseData.getConference,
            getProject: responseData.getProject,
            getSkills: responseData.getSkills,
            internCompany: responseData.internCompany,
            internRole: responseData.internRole,
          };

          const stdData4 = {
            careerOrGoal: responseData.careerOrGoal,
            profName: '',
            profResearch: '',
          };

          const stdData5 = {
            FirstName: responseData.firstName,
            Surname: responseData.surname,
            Nationality: responseData.userNationality,
            Birthday: responseData.userBirthday,
            Address: responseData.userAddress,
            Tel: responseData.userTel,
            Email: responseData.userEmail,
          };
          state.stdDataQP1 = stdData1;
          state.stdDataQP2 = stdData2;
          state.stdDataQP3 = stdData3;
          state.stdDataQP4 = stdData4;
          state.stdDataQP5 = stdData5;
          localStorage.setItem('stdDataQP1', JSON.stringify(stdData1));
          localStorage.setItem('stdDataQP2', JSON.stringify(stdData2));
          localStorage.setItem('stdDataQP3', JSON.stringify(stdData3));
          localStorage.setItem('stdDataQP4', JSON.stringify(stdData4));
          localStorage.setItem('stdDataQP5', JSON.stringify(stdData5));
        };
        if (responseData) {
          if (!storedStdData) {
            if (timeStamp > storedStdData) {
              getBackEndData();
            } else {
              getLocalData();
            }
          } else {
            getBackEndData();
          }
        } else {
          getLocalData();
        }

        //这里要匹配Coverletter的数据格式
        // state = action.payload;
      })
      .addCase(fetchCoverletterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateJobData, updateStdData } = dataSlice.actions;
export default dataSlice.reducer;
