import { createSlice } from '@reduxjs/toolkit';
import { fetchCVData } from '../actions/fetcDataActions';
import {
  cvSection,
  currentSectionType,
  allSectionType,
} from '../data/emptyData';
import { switchUserType } from './userTypeSlice'; // 导入用户身份切换的 action

const {
  personalInfo,
  educationInfo,
  workExperience,
  projectExperience,
  researchExperience,
  publicationsPresentations,
  skillsActivitiesInterests,
  dreamInfo,
} = cvSection;

// 创建简历 slice
export const cvDataSlice = createSlice({
  name: 'cvData',
  initialState: {
    //single Resume section
    cvSections: {
      personalInfo,
      educationInfo,
      workExperience,
      projectExperience,
      researchExperience,
      publicationsPresentations,
      skillsActivitiesInterests,
    },
    currentSectionType,

    //config
    allSectionType,

    //status
    loading: false,

    //std special data
    dreamInfo,
  },
  reducers: {
    // 更新简历字段...
    updateField: (state, action) => {
      const { sectionKey, id, title, newValue } = action.payload;
      const { cvSections } = state;
      const currentResume = cvSections;
      const updatedResume = { ...currentResume };

      // Update the appropriate field based on sectionKey and title
      if (Array.isArray(updatedResume[sectionKey].data)) {
        const dataArray = updatedResume[sectionKey].data;
        const updatedSection = dataArray.map((item) => {
          if (item.id === id) {
            return { ...item, [title]: newValue };
          }
          return item;
        });
        updatedResume[sectionKey].data = updatedSection;
      } else {
        const updatedSectionInfo = { ...updatedResume[sectionKey] };
        const updatedData = { ...updatedSectionInfo.data };
        updatedData[title] = newValue;
        updatedSectionInfo.data = updatedData;

        // Update the state with the updated personalInfo
        updatedResume[sectionKey] = updatedSectionInfo;
      }

      state.cvSections = updatedResume;

      return state;
    },

    //修改简历操作区模块标题名称
    updateSectionName: (state, action) => {
      const { sectionKey, newSectionName } = action.payload;
      const { cvSections } = state;
      const currentResume = cvSections;
      const updatedResume = { ...currentResume };
      const updatedSectionInfo = { ...updatedResume[sectionKey] };
      updatedSectionInfo.sectionName = newSectionName;

      // Update the state with the updated personalInfo
      updatedResume[sectionKey] = updatedSectionInfo;

      state.cvSections = updatedResume;

      return state;
    },

    //-------------Section操作--------------
    addNewSection: (state, action) => {
      const sectionKey = action.payload;

      const currentSectionType = state.currentSectionType;
      state.currentSectionType = [...currentSectionType, sectionKey];
    },
    deleteSection: (state, action) => {
      console.log(state.cvType);
      const currentSectionType = state.currentSectionType;

      const sectionKey = action.payload;

      const filteredArray = currentSectionType.filter(
        (item) => item !== sectionKey
      );
      state.currentSectionType = filteredArray;
    },

    //-------------Experience操作--------------
    addNewExperience: (state, action) => {
      const sectionKey = action.payload;
      const originalArray = state.cvSections[sectionKey].data;
      const lastItem = originalArray[originalArray.length - 1];
      const newItem = {
        ...lastItem, // 复制原始对象的所有属性
        id: lastItem.id + 1, // 将id的值加1
      };
      state.cvSections[sectionKey].data = [...originalArray, newItem];
    },
    deleteExperience: (state, action) => {
      const { sectionKey, itemId } = action.payload;
      const originalArray = state.cvSections[sectionKey].data;

      // 找到要删除的项目的索引
      const indexToRemove = originalArray.findIndex(
        (item) => item.id === itemId
      );

      if (indexToRemove !== -1) {
        // 创建一个新数组，不包括要删除的项目
        const newArray = [
          ...originalArray.slice(0, indexToRemove),
          ...originalArray.slice(indexToRemove + 1),
        ];

        // 更新状态
        state.cvSections[sectionKey].data = newArray;

        // 如果数组为空，添加一个新的经验项目
        if (newArray.length === 0) {
          const newItem = {
            id: 1, // 或者根据你的需求设置一个新的id
            // 其他属性根据你的需求设置
          };
          state.cvSections[sectionKey].data = [newItem];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCVData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCVData.fulfilled, (state, action) => {
        state.loading = false;

        //更新获取的值,会根据topicId获取不同身份值
        const responseData = action.payload;

        //根据topicId来获取不同身份值
        const topicId = localStorage.getItem('topicId');
        const localSaved = topicId
          ? JSON.parse(localStorage.getItem(`resume_localEdit${topicId}`))
          : null;

        //转换后端传来数据格式以匹配UI数据
        const structDataFucn = (responseData) => {
          const createSection = (sectionKey) => {
            const section = {
              sectionName: responseData.sectionName[sectionKey],
              data: responseData[sectionKey],
            };
            return section;
          };

          const sectionKeys = state.allSectionType;

          state.cvSections = sectionKeys.reduce((accumulator, currentKey) => {
            const section = createSection(currentKey);
            return { ...accumulator, [currentKey]: section };
          }, {});

          state.currentSectionType = responseData.currentSectionType;
        };

        // Step 1: 检查后端响应是否有有效值
        if (responseData && responseData?.timeStamp) {
          // Step 2: 如果后端响应中有有效值且更新了，比较时间戳
          if (localSaved) {
            if (responseData.timeStamp > localSaved?.timeStamp) {
              //目前是当本地时间戳更新的时候保留本地缓存的效果,这样可以保证在网络保存数据没有成功的前提下,防止用户数据丢失

              structDataFucn(responseData);
            } else {
              console.log('调用缓存');

              if (localSaved?.data) {
                localSaved.data?.cvSections &&
                  (state.cvSections = localSaved.data.cvSections);
                localSaved.data?.currentSectionType &&
                  (state.currentSectionType =
                    localSaved.data.currentSectionType);
              }
            }
          } else {
            //存在有效后端数据,没有本地缓存,直接使用后端数据
            structDataFucn(responseData);
          }
        } else {
          // 后端响应中没有有效值，无法获取更新的数据
          if (localSaved) {
            // console.log('后端没有有效值,但有缓存');
            state.cvSections = localSaved?.data?.cvSections;
          }
        }
      })
      .addCase(fetchCVData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(switchUserType, (state, action) => {
        // 根据用户身份类型切换的额外逻辑
        const newUserType = action.payload; // 获取切换后的用户身份类型

        // // 根据新的用户身份类型进行不同的处理
        // if (newUserType === 'student') {
        //   // 如果切换后是学生身份
        //   // 重新初始化某些状态
        //   state.someState = initialStateForStudent; // 根据学生身份的初始值重新设置状态
        // } else {
        //   // 如果切换后是工作身份
        //   // 重新初始化某些状态
        //   state.someState = initialStateForWork; // 根据工作身份的初始值重新设置状态
        // }
      });
  },
});

// 导出 action creators...
export const {
  updateField,
  updateSectionName,
  addNewSection,
  deleteSection,
  addNewExperience,
  deleteExperience,
} = cvDataSlice.actions;

// 从 Redux store 中选择简历状态...
export const selectCvData = (state) => state.cvData.cvSections;
export const selectCurrentSectionType = (state) =>
  state.cvData.currentSectionType;
export const selectAllSectionType = (state) => state.cvData.allSectionType;
export const isLoading = (state) => state.cvData.loading;

export default cvDataSlice.reducer;
