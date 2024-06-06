export const validateFields = (formData) => {
  const allowedEmptyFields = [
    'userAddress',
    'ideaArea',
    'careerOrGoal',
    //page2
    'currentGPA',
    //page3
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
  ];
  console.log(formData);

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
