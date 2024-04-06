import axios from "axios";

export const registerRequset = async (request) => {
  try {
    const response = await axios({
      method: "post",
      url: "/api/Register/RegisterByEamil",
      data: request,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginRequset = async (request) => {
  try {
    const response = await axios({
      method: "post",
      url: "api/Login/LoginByEmail",
      data: request,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 5000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getVerificationCode = async (request) => {
  try {
    const response = await axios({
      method: "post",
      url: "api/VerificationCode/SendVerificationCode",
      data: request,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordRequest = async (request) => {
  try {
    const response = await axios({
      method: "post",
      url: "api/ResetPassword/ResetPasswordByEmail",
      data: request,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadResumePost = async (request, uId, typeId) => {
  const postUrl = `/api/UploadResumePost/UploadResumeFile?uId=${uId}&${typeId}`;
  console.log(postUrl);
  try {
    const response = await axios({
      method: "post",
      url: postUrl,
      data: request,
      headers: {
        "Content-Type": "multipart/form-data",
        accept: "*/*",
        //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};



export const switchCoverLetterImg = async (uId, countId, lan) => {
  const postUrl = `/api/CoverLetter/CreateCoverLetterDE?uId=${uId}&countId=${countId}&lan=${lan}`;
  try {
    const response = await axios({
      method: "get",
      url: postUrl,
      responseType: "blob", // Important
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: "*/*",
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

//when click generate button, call open ai api
export const createStdCoverLetter = async (dataGroup) => {
  const postUrl = `/api/CoverLetter/CreateStdCoverLetter`;
  try {
    const response = await axios({
      method: "post",
      url: postUrl,
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: "*/*",
      },
      timeout: 20000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};
//
export const createJobCoverLetter = async (dataGroup) => {
  const postUrl = `/api/CoverLetter/CreateStdCoverLetter`;
  try {
    const response = await axios({
      method: "post",
      url: postUrl,
      responseType: "blob", // Important
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: "*/*",
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};


/*-------------Resume----------------*/
//更新简历数据
export const updateCvData = async (dataGroup) => {
  const postUrl = `api/UploadResumePost/UploadResumeFile`;

  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      data: dataGroup,
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: '*/*',
      },
      timeout: 5000,
    });

    return response.data;
  } catch (error) {
    console.error('更新简历失败：', error);
    return null;
  }
};

/*-----------CoverLetter-------------*/
//获取生成次数
export const fetchRemainingCounts = async () => {
  try {
    const postUrl = `api/payment/remainingCounts`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取生成次数失败：', error);
    throw error;
  }
};

// 生成文档
export const generateCoverLetter = async (uId, countId, lan) => {
  const postUrl = `/api/CoverLetter/CreateCoverLetterDE?uId=${uId}&countId=${countId}&lan=${lan}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      responseType: 'blob', // Important
      headers: {
        accept: '*/*',
      },
      timeout: 10000,
    });
    console.log(response);
    return response;
  } catch (error) {
    // 如果生成文档失败，则返回 null
    console.error('生成文档失败：', error);
    return null;
  }
};

//获取生成后的预览图片
export const getCoverLetterImg = async (uId, countId, lan) => {
  const postUrl = `/api/CoverLetter/GetCoverLetterImg?uId=${uId}&countId=${countId}&lan=${lan}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      responseType: 'blob', // Important
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

//下载申请信pdf
export const downloadCoverLetterPdf = async (uId, countId, lan) => {
  const postUrl = `/api/CoverLetter/DownloadCoverLetterPdf?uId=${uId}&countId=${countId}&lan=${lan}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      responseType: 'blob', // Important
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

/*-----------Payment-------------*/
//获取二维码图片
export const fetchQRCodeImage = async (paymentType) => {
  try {
    const postUrl = `api/payment/fetchQRCodeImage`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      params: { paymentType },
      headers: {
        Accept: 'image/jpeg',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      responseType: 'arraybuffer',
    });

    // Convert binary data to base64 encoded string
    const imageBase64String = Buffer.from(response.data, 'binary').toString(
      'base64'
    );
    const imgSrc = `data:image/jpeg;base64,${imageBase64String}`;

    return imgSrc;
  } catch (error) {
    // console.error('获取二维码失败：', error);
    const errormessage = {
      status: 0,
      message: error.message || '获取二维码失败。',
    };
    return errormessage;
  }
};

// 获取支付结果
export const fetchOrderStatus = async (planType) => {
  try {
    const postUrl = `api/orders/${planType}/status`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    });

    return response.data.status;
  } catch (error) {
    console.error('获取订单状态失败：', error);
    throw error;
  }
};

//获取支付价格
export const fetchPlanPrice = async (lan) => {
  try {
    const postUrl = `api/payment/price?lan=${lan}`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取支付价格失败：', error);
    throw error;
  }
};




//20240406 add api
/*-------------公共模块----------------*/
const authToken = localStorage.getItem('token');
const BASE_URL = 'api/'; // API的基本URL
const initTopicId = 1; // 不传类型时，默认为学生

// 通用请求函数，根据HTTP方法和URL构建请求
const apiRequest = async (method, url, data = null, config = {}) => {
  const apiName = `${method.toUpperCase()} ${BASE_URL}${url}`; // 获取 API 的名称
  try {
    const headers = {
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...(config.headers || {}),
    };

    if (config.contentType) {
      headers['Content-Type'] = config.contentType;
    } else {
      headers['Content-Type'] = 'application/json';
    }

    const response = await axios({
      method,
      url: BASE_URL + url,
      data,
      ...config, // 允许传递额外的配置，如responseType
      headers,
      timeout: 10000, // 设置请求超时时间为10秒
    });
    return response.data; // 返回响应数据
  } catch (error) {
    console.error(`请求失败(${apiName}): ${error}`);
    throw error;
  }
};

/**
 * 封装GET请求。
 * @param {string} url - 地址。
 * @param {Object} params - 查询参数,用于根据查询参数过滤数据
 * @param {string} responseType -指定服务器响应的数据类型。这里默认为“json”
 
常见的值包括：
"arraybuffer"：表示服务器响应将作为一个 ArrayBuffer 返回。
"blob"：表示服务器响应将作为一个 Blob 对象返回。
"document"：表示服务器响应将作为一个 Document 对象返回（例如，XML 文档）。
"json"：表示服务器响应将作为一个 JSON 对象返回。
"text"：表示服务器响应将作为一个字符串返回。
 */
const get = (url, params, responseType = 'json') => {
  return apiRequest('get', url, null, { params, responseType }); // 传递查询参数和响应类型
};

/**
 * 封装POST请求。
 * @param {string} url - 地址。
 * @param {number} data - 数据组。
 * @param {string} contentType -指定发送请求时请求体的数据类型。这里默认'application/json'
 
"application/json"：表示请求体中包含 JSON 数据。
"multipart/form-data"：表示请求体中包含表单数据，通常用于上传文件等操作。
"application/x-www-form-urlencoded"：表示请求体中包含 URL 编码的表单数据，通常在提交表单时使用。
 */
const post = (url, data, contentType = 'application/json') => {
  return apiRequest('post', url, data, { contentType });
};

/*-------------编辑模块----------------*/

/**
 * 创建 Cover Letter。
 * @param {Object} dataGroup - 数据组。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const createCoverletter = async (dataGroup, topicId = initTopicId) => {
  return post(`createCoverletter/topicId=${topicId}`, dataGroup);
};

/**
 * 创建 Recommendation。
 * @param {Object} dataGroup - 数据组。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const createRecommendation = async (
  dataGroup,
  topicId = initTopicId
) => {
  return post(`recommendation/topicId=${topicId}`, dataGroup);
};

/**
 * 创建简历。
 * @param {Object} dataGroup - 数据组。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const createResume = async (dataGroup, topicId = initTopicId) => {
  return post(`resume/topicId=${topicId}`, dataGroup);
};

/**
 * 获取 Cover Letter最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getCoverletter = async (topicId = initTopicId) => {
  return get(`getCoverletter/topicId=${topicId}`);
};

/**
 * 获取 Recommendation最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getRecommendation = async (topicId = initTopicId) => {
  return get(`recommendation/topicId=${topicId}`);
};

/**
 * 获取 简历最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getResume = async (topicId = initTopicId) => {
  return get(`resume/topicId=${topicId}`);
};

/*-----------生成模块-------------*/

/**
 * 获取生成文件状态。
 * @param {string} countId - 模板类型。
 * @param {string} lan - 选择生成的语言。
 * @param {string} documentType - 文件类型。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getDocumentStatus = async (
  countId,
  lan,
  documentType,
  topicId = initTopicId
) => {
  return get(
    `getDocumentStatus/documentType=${documentType}/countId=${countId}/lan=${lan}/topicId=${topicId}`,
    null,
    'text'
  );
};

/**
 * 获取生成文件的图片。
 * @param {string} countId - 模板类型。
 * @param {string} lan - 选择生成的语言。
 * @param {string} documentType - 文件类型。
 * @param {number} [topicId=1] - 身份类型，默认为学生。。
 */
export const getDocumentImg = async (
  countId,
  lan,
  documentType,
  topicId = initTopicId
) => {
  return get(
    `getDocumentImg/documentType=${documentType}/countId=${countId}/lan=${lan}/topicId=${topicId}`,
    null,
    'blob'
  );
};

/**
 * 下载生成的PDF文件。
 * @param {string} countId - 模板类型。
 * @param {string} lan - 选择生成的语言。
 * @param {string} documentType - 文件类型。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const downloadDocumentPdf = async (
  countId,
  lan,
  documentType,
  topicId = initTopicId
) => {
  return get(
    `downloadDocumentPdf/documentType=${documentType}/countId=${countId}/lan=${lan}/topicId=${topicId}`,
    null,
    'blob'
  );
};


