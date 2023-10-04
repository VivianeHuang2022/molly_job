// 生成一个独一无二的 uId
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  // 检查是否已经存在 uId，如果不存在则生成一个并存储在 localStorage 中
  function ensureUniqueId() {
    let uId = localStorage.getItem('uId');
    if (!uId) {
      uId = generateUniqueId();
      localStorage.setItem('uId', uId);
    }
    return uId;
  }
  
  // 使用 ensureUniqueId 获取或生成 uId
  const uniqueId = ensureUniqueId();
  
  export default uniqueId

  