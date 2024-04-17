import { checkJWT } from "./api";
export const checkLogin = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          return false
        } 
        else {
          try {
            // console.log(jwtToken)
            const response = await checkJWT(jwtToken);
            if (response.status === 200 && response.data.code === 0) {
            //   localStorage.setItem("jwtToken", response.data.jwtToken);
              return true;
            } else {
              return false;
            }
          } catch (error) {
            // 处理错误情况，比如API调用失败
            return false;
          }
        }
    
  };