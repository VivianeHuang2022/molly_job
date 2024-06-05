import axios from 'axios';

export const registerRequset = async (request) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/Register/RegisterByEamil',
      data: request,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
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
      method: 'post',
      url: 'api/Login/LoginByEmail',
      data: request,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
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
      method: 'post',
      url: 'api/ResetPassword/SendVerificationCode',
      data: request,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
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
      method: 'post',
      url: 'api/ResetPassword/ResetPasswordByEmail',
      data: request,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
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
      method: 'post',
      url: postUrl,
      data: request,
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: '*/*',
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

export const downloadResumePDF = async (request, topicId) => {
  const postUrl = `/api/Resume/DownloadResume?topicId=${topicId}`;
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      data: request,
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: `Bearer ${jwtToken}`, // 例如：在这里放置Bearer token (如果需要)
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const checkJWT = async (JWT) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'api/Profile/CheckJWT',
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: `Bearer ${JWT}`, // 例如：在这里放置Bearer token (如果需要)
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

//when click generate button, call open ai api
export const postStdCoverLetterDataGroup = async (dataGroup) => {
  const postUrl = `/api/CoverLetter/PostStdCoverLetterDataGroup`;
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      data: dataGroup,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: `Bearer ${jwtToken}`, // 例如：在这里放置Bearer token (如果需要)
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

//when click generate button, call open ai api
export const createStdCoverLetter = async (dataGroup) => {
  const postUrl = `/api/CoverLetter/CreateStdCoverLetter`;
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
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
      method: 'post',
      url: postUrl,
      responseType: 'blob', // Important
      data: dataGroup,
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
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const postUrl = `api/Profile/GetUserTotalTimes`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response;
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
export const fetchQRCodeImage = async (orderLabel) => {
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const postUrl = `api/WeixinPay/CreateOrder`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      params: { orderLabel },
      headers: {
        Accept: 'image/jpeg',
        Authorization: `Bearer ${jwtToken}`,
      },
      responseType: 'json',
    });

    // Convert binary data to base64 encoded string
    // const imageBase64String = Buffer.from(response.data, 'binary').toString(
    //   'base64'
    // );
    // const imgSrc = `data:image/jpeg;base64,${imageBase64String}`;

    return response;
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
export const fetchOrderStatus = async (orderNumber) => {
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const postUrl = `api/WeixinPay/CheckOrderStatus?orderNumber=${orderNumber}`;
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data;
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

//获取支付价格
export const getOrderPrice = async () => {
  try {
    const postUrl = `api/WeixinPay/GetOderPrice`;
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取支付价格失败：', error);
    throw error;
  }
};

export const getOrderPrice_MOCK = async () => {
  try {
    const postUrl = `https://mock.apifox.com/m2/4308331-3951008-default/167972066`;
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取支付价格失败：', error);
    throw error;
  }
};

//获取生成次数增删历史
export const getGenerateCountHistory = async () => {
  try {
    const postUrl = `api/Profile/GetUserCountHistory`;
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取支付价格失败：', error);
    throw error;
  }
};

export const getGenerateCountHistory_MOCK = async () => {
  try {
    const postUrl = `https://mock.apifox.com/m2/4308331-3951008-default/167979554`;
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('获取支付价格失败：', error);
    throw error;
  }
};

//20240416 api
/*-------------公共模块----------------*/
const authToken = localStorage.getItem('jwtToken');
const BASE_URL = 'api'; // API的基本URL
const initTopicId = 1; // 不传类型时，默认为学生

/*-------------编辑模块----------------*/

/**
 * 创建 Cover Letter。
 * @param {Object} dataGroup - 数据组。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const createCoverletter = async (dataGroup, topicId = initTopicId) => {
  const postUrl = `${BASE_URL}/createCoverletter/topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      responseType: 'blob', // Important
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
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
  const postUrl = `${BASE_URL}/Recommendation/PostRecommendationDataGroup?topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      responseType: 'json', // Important
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateRecommendation = async (
  dataGroup,
  topicId = initTopicId
) => {
  const postUrl = `${BASE_URL}/Recommendation/PostRecommendationDataGroup?topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      responseType: 'json', // Important
      data: dataGroup,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * 创建简历。
 * @param {Object} dataGroup - 数据组。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const createResume = async (dataGroup, topicId = initTopicId) => {
  const postUrl = `${BASE_URL}/Resume/PostStdResumeDataGroup?topicId=${topicId}`;
   const jwtToken = localStorage.getItem('jwtToken');
  try {
    const response = await axios({
      method: 'post',
      url: postUrl,
      responseType: 'json', // Important
      data: dataGroup,
      headers: {
        //'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: jwtToken ? `Bearer ${jwtToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * 获取 Cover Letter最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getCoverletter = async (topicId = initTopicId) => {
  const postUrl = `${BASE_URL}/CoverLetter/GetStdCoverLetterDataGroup`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const getRegisterVerificationCode = async (request) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'api/Register/SendVerificationCode',
      data: request,
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
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

/**
 * 获取 Recommendation最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getRecommendation = async (topicId = initTopicId) => {
  const postUrl = `${BASE_URL}/Recommendation/GetRecommendationDataGroup?topicId=${topicId}`;
  const jwtToken = localStorage.getItem('jwtToken');
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      // responseType: 'application/json', // Important
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${jwtToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getRecommendation_MOCK = async (topicId = initTopicId) => {
  const postUrl = `https://mock.apifox.com/m2/4308331-3951008-default/168725474`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      // responseType: 'application/json', // Important
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

/**
 * 获取 简历最新数据。
 * @param {number} [topicId=1] - 身份类型，默认为学生。
 */
export const getResume = async (topicId = initTopicId) => {
  const postUrl = `${BASE_URL}/Resume/GetResumeDataGroup?topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      // responseType: 'blob', // Important
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getResume_MOCK = async (topicId = initTopicId) => {
  const postUrl = `https://mock.apifox.com/m2/4308331-3951008-default/168294019`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      // responseType: 'blob', // Important
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
        // Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });
    return response;
  } catch (error) {
    throw error;
  }
};

/*-----------生成模块-------------*/

/**
 * 获取生成文件状态,这个会调用AI接口
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
  const postUrl = `${BASE_URL}/${documentType}/getDocumentStatus?countId=${countId}&lan=${lan}&topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      headers: {
        Accept: 'application/json',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
    });

    return response;
  } catch (error) {
    console.error('获取文档生成状态失败：', error);
    throw error;
  }
};
/**



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
  const postUrl = `${BASE_URL}/${documentType}/getDocumentImg/?countId=${countId}&lan=${lan}&topicId=${topicId}`;

  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      responseType: 'json', // Important
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};

// export const downloadDocumentPdf = async (
//   countId,
//   lan,
//   documentType,
//   topicId = initTopicId
// ) => {
//   return get(
//     `${documentType}/downloadDocumentPdf?countId=${countId}&lan=${lan}&topicId=${topicId}`,
//     null,
//     'blob'
//   );
// };
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
  const postUrl = `${BASE_URL}/${documentType}/downloadDocumentPdf?countId=${countId}&lan=${lan}&topicId=${topicId}`;
  try {
    const response = await axios({
      method: 'get',
      url: postUrl,
      responseType: 'blob', // Important
      headers: {
        // 'Content-Type': 'multipart/form-data',
        accept: '*/*',
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      timeout: 10000,
      // ... 其他配置
    });

    return response;
  } catch (error) {
    throw error;
  }
};
