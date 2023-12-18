import axios from "axios";


export const registerRequset = async(request)=>{
    try {
        const response = await axios({
            method: 'post',      
            url: '/api/Register/RegisterByEamil',  
            data: request,       
            headers: {           
                'Content-Type': 'application/json',
                'accept': '*/*',
                //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
            },
            timeout: 5000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const loginRequset = async(request)=>{
    try {
        const response = await axios({
            method: 'post',      
            url: 'api/Login/LoginByEmail',  
            data: request,       
            headers: {           
                'Content-Type': 'application/json',
                'accept': '*/*',
                //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
            },
            timeout: 5000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const getVerificationCode = async(request)=>{
    try {
        const response = await axios({
            method: 'post',      
            url: 'api/VerificationCode/SendVerificationCode',  
            data: request,       
            headers: {           
                'Content-Type': 'application/json',
                'accept': '*/*',
                //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const resetPasswordRequest = async(request)=>{
    try {
        const response = await axios({
            method: 'post',      
            url: 'api/ResetPassword/ResetPasswordByEmail',  
            data: request,       
            headers: {           
                'Content-Type': 'application/json',
                'accept': '*/*',
                //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const uploadResumePost = async(request,uId,typeId)=>{
    const postUrl = `/api/UploadResumePost/UploadResumeFile?uId=${uId}&${typeId}`
    console.log(postUrl)
    try {
        const response = await axios({
            method: 'post',      
            url: postUrl,  
            data: request,       
            headers: {           
                'Content-Type': 'multipart/form-data',
                'accept': '*/*',
                //'Authorization': 'Bearer YOUR_TOKEN_HERE'  // 例如：在这里放置Bearer token (如果需要)
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const downloadCoverLetterPdf = async(uId,countId,lan)=>{
    const postUrl = `/api/CoverLetter/DownloadCoverLetterPdf?uId=${uId}&countId=${countId}&lan=${lan}`
    console.log(postUrl)
    try {
        const response = await axios({
            method: 'get',      
            url: postUrl,
            responseType: 'blob', // Important    
            headers: {           
                // 'Content-Type': 'multipart/form-data',
                'accept': '*/*',
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const getCoverLetterImg = async(uId,countId,lan)=>{
    const postUrl = `/api/CoverLetter/GetCoverLetterImg?uId=${uId}&countId=${countId}&lan=${lan}`
    try {
        const response = await axios({
            method: 'get',      
            url: postUrl,
            responseType: 'blob', // Important    
            headers: {           
                // 'Content-Type': 'multipart/form-data',
                'accept': '*/*',
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const switchCoverLetterImg = async(uId,countId,lan)=>{
    const postUrl = `/api/CoverLetter/CreateCoverLetterDE?uId=${uId}&countId=${countId}&lan=${lan}`
    try {
        const response = await axios({
            method: 'get',      
            url: postUrl,
            responseType: 'blob', // Important    
            headers: {           
                // 'Content-Type': 'multipart/form-data',
                'accept': '*/*',
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const createStdCoverLetter = async(dataGroup)=>{
    const postUrl = `/api/CoverLetter/CreateStdCoverLetter`
    try {
        const response = await axios({
            method: 'post',      
            url: postUrl,
            data:dataGroup,    
            headers: {           
                // 'Content-Type': 'multipart/form-data',
                'accept': '*/*',
            },
            timeout: 20000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}

export const createJobCoverLetter = async(dataGroup)=>{
    const postUrl = `/api/CoverLetter/CreateStdCoverLetter`
    try {
        const response = await axios({
            method: 'post',      
            url: postUrl,
            responseType: 'blob', // Important
            data:dataGroup,    
            headers: {           
                // 'Content-Type': 'multipart/form-data',
                'accept': '*/*',
            },
            timeout: 10000,       
            // ... 其他配置
           });

           return response
    } catch (error) {
        throw error;
    }
}