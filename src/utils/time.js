export const realtTime = (timestampInSeconds) => {
  const date = new Date(timestampInSeconds); // 转换为毫秒

  console.log(timestampInSeconds, date.toISOString().substring(0, 10));
  // 格式化日期为 "YYYYMMDDHH:mm" 格式
  const formattedDate =
    date.getFullYear() +
    '年' +
    (date.getMonth() + 1 < 10 ? '0' : '') +
    (date.getMonth() + 1) +
    '月' +
    (date.getDate() < 10 ? '0' : '') +
    date.getDate() +
    '日' +
    (date.getHours() < 10 ? '0' : '') +
    date.getHours() +
    ':' +
    (date.getMinutes() < 10 ? '0' : '') +
    date.getMinutes();
  return formattedDate;
};
