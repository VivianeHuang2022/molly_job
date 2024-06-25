export const validateFields = (formData, topicId) => {
  // 根据身份topicId定义不同的允许为空的字段数组
  const allowedEmptyFieldsByTopicId = {
    1: [
      //page1 四个都是必填项 无需跳过
      //page2
      'currentGPA',
      //page3 这页都是非必填
      'getAwards',
      'getCompetitions',
      'getConference',
      'getProject',
      'getSkills',
      'internCompany',
      'internRole',
      //page4
      'profName',
      'profResearch',
      //page5
      'userAddress',
      'ideaArea',
      'careerOrGoal',
    ],
    2: [],
  };

  // 获取当前topicId对应的允许为空的字段数组
  const allowedEmptyFields = allowedEmptyFieldsByTopicId[topicId] || [];

  // 检查formData中的每个字段
  for (const field in formData) {
    // 检查字段是否为空
    if (
      formData[field] === '' ||
      formData[field] === null ||
      formData[field] === undefined
    ) {
      // 如果字段不允许为空，返回false
      if (!allowedEmptyFields.includes(field)) {
        console.error(`Field ${field} is empty but is not allowed to be.`);
        alert(`Field ${field} is empty.`);
        return false;
      }
    }
  }
  // 如果所有不允许为空的字段都通过了检查，返回true
  return true;
};
