export const saveLocalEdit = (documentType, topicId, editData) => {
  const localEdit = {
    timeStamp: new Date().getTime(),
    data: editData,
  };
  console.log('存入缓存');
  localStorage.setItem(
    `${documentType}_localEdit${topicId}`,
    JSON.stringify(localEdit)
  );
};
