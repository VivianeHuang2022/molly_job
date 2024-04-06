// 假设这是检查本地缓存的函数
export const hasLocalData = (dataType) => {
  const jsonString = localStorage.getItem(dataType);
  const data = jsonString ? JSON.parse(jsonString) : null;
  // 返回布尔值表示是否有本地数据
  return data ? data.isEdit : true;
};

export const editState = (stateType, isEdit) => {
  const timeStamp = Date.now();
  const state = {
    timeStamp: timeStamp,
    isEdit: isEdit,
  };
  localStorage.setItem(`${stateType}`, JSON.stringify(state));
};
