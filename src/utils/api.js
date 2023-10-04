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

export const uploadResumePost = async(request)=>{
    try {
        const response = await axios({
            method: 'post',      
            url: '/api/UploadResumePost/UploadResumeFile',  
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