export const saveLocalEdit = (documentType, editData) => {
  const localEdit = {
    timeStamp: new Date().getTime(),
    data: editData,
  };
  // console.log('存入缓存');
  const topicId = localStorage.getItem('topicId');
  localStorage.setItem(
    `${documentType}_localEdit${topicId}`,
    JSON.stringify(localEdit)
  );
};
