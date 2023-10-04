// ModalComponent.js
import React from "react";
import styles from "./Modal.module.css";
import InterviewIcon from "../../assets/images/interview_icon.PNG";
import UploadIcon from "../../assets/images/upload_icon.PNG";
import texts from "../texts";
import { useNavigate } from "react-router-dom";
import uniqueId from "./GenerateUId";
import { uploadResumePost } from "../../utils/api";

function ModalComponent({id}) {
  const uId = uniqueId;
  const fileInputRef = React.createRef();
  const navigate = useNavigate();
  const handleJumpToHome = (id) => {
    navigate(`/home/${id}`);
  };

  const handleUplodResumeAndJump = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (id,event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uId', uId);
    try {
      const result = await uploadResumePost(formData)
      if(result.status===200)
      {
        alert(result.data.msg)
        navigate(`/home/${id}`);
      }
    } catch (error) {
      if (error.response) {
        if(error.response.status===404&error.response.data.code===1008){
          alert(error.response.data.msg);
        }
        else{
          alert(`Error:${error.message}`)
        }
    } else {
      alert(`Error:${error.message}`)
    }
    }


    // try {
    //   // 你的后端API端点
    //   const response = await axios.post('/your-backend-endpoint', formData);
    //   console.log('File uploaded successfully:', response.data);
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    // }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.titleContainer}>
          Update your info or let's Chat!
        </div>
        <div className={styles.contentContainer}>
          <div onClick={() => handleJumpToHome()}>
            <img className={styles.imgIcon} src={InterviewIcon} alt="i_icon" />
            <div className={styles.subTitle}>
              {texts.modalTexts.interviewTitle}
            </div>
            <div className={styles.contentStyle}>
              {texts.modalTexts.interviwContent}
            </div>
          </div>
          <div onClick={() => handleUplodResumeAndJump(id)}>
            <img className={styles.imgIcon} src={UploadIcon} alt="u_icon" />
            <div className={styles.subTitle}>
              {texts.modalTexts.uploadTitle}
            </div>
            <div className={styles.contentStyle}>
              {texts.modalTexts.uploadContent}
            </div>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(event)=>handleFileChange(id,event)}
            />
          </div>
        </div>
        {/* <button onClick={closeModal}>关闭</button> */}
      </div>
    </div>
  );
}

export default ModalComponent;
