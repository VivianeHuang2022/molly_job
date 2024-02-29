// reduxSlice.js

import { createSlice } from '@reduxjs/toolkit';
import Resume from '../classes/Resume';
import { getInitialLanguage, getInitCvData } from '../views/Selector/Resume/local';

const createNewResume = (initialCvData) => {
  return new Resume(
    initialCvData.lastUpdated,
    initialCvData.personalInfo,
    initialCvData.educationInfo,
    initialCvData.workExperience,
    initialCvData.projectExperience,
    initialCvData.researchExperience,
    initialCvData.publicationsPresentations,
    initialCvData.skillsActivitiesInterests
  );
};

const getInitialReduxState = () => {
  const storedState = localStorage.getItem('cvData');
  const initialCvData = getInitCvData(); // 将 stdResumeData 替换为 initialCvData

  return storedState
    ? JSON.parse(storedState)
    : {
        language: getInitialLanguage(), // 存储当前应用程序的语言设置
        resumes: {
          // 根据初始化数据创建简历实例
          resume1: {
            EN: [createNewResume(initialCvData).toJSON()], // 转换为普通对象
            CN: [createNewResume(initialCvData).toJSON()], // 转换为普通对象
            // 如果有其他语言版本，可以在这里添加
          },
          // 可以继续添加其他简历的初始化
        },

        currentResumeId: 'resume1', // 设置当前正在编辑的简历的 ID
        // 其他可能存在的部分，如权限信息、支付数据等
      };
};

// 初始状态从本地存储或默认值中获取
const initialState = getInitialReduxState();

// 创建简历 slice
export const cvDataSlice = createSlice({
  name: 'cvData',
  initialState: initialState,
  reducers: {
    // 更新简历字段...
    updateField: (state, action) => {
      // Extract payload from action
      const { sectionName, title, newValue } = action.payload;

      // Find the current resume being edited
      const currentResume =
        state.resumes[state.currentResumeId][state.language][0];

      console.log(state.language);

      // Update the appropriate field based on sectionName and title
      const updatedResume = {
        ...currentResume,
        [sectionName]: {
          ...currentResume[sectionName],
          [title]: newValue,
        },
      };

      // Update the state with the updated resume
      state.resumes[state.currentResumeId][state.language][0] = updatedResume;


      // Return the updated state
      return state;
    },

    // 更改语言...
    changeLanguage: (state, action) => {
      state.language = action.payload;
      // 保存更新后的状态到本地存储
      localStorage.setItem('cvData', JSON.stringify(state));
    },
  },
});

// 导出 action creators...
export const { updateField, changeLanguage } =
  cvDataSlice.actions;

// 从 Redux store 中选择简历状态...
export const selectCvData = (state) =>
  state.cvData.resumes[state.cvData.currentResumeId][state.cvData.language][0];

export default cvDataSlice.reducer;
