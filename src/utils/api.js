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
