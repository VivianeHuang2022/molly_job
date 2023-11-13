import React,{useState} from 'react'
import texts from '../../../texts'
// import QInput from '../../../../components/QInput/QInput'
import style from './JobPage.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { updateFormData, dataSaveHandle } from '../../../../redux/slice';
import { PlusCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function JobPage3() {
  // const dispatch = useDispatch();
  // const formData = useSelector((state) => state.formDataQP3);
  const [checkedStates, setCheckedStates] = useState(new Array(10).fill(false));

  // const handleInputChange = (name, value) => {
  //   dispatch(updateFormData({ pNum: 3, payload: { [name]: value } }));
  //   dataSaveHandle(name, value, 3);
  // };

  const handleToggle = index => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page3.Q_title}</div>
      {/* Other QInput components can go here */}
      {texts.GeberalQ.JobPage.Page3.Skills.map((skill, index1)=>(
        <div key={index1}>
          {skill.map((item, index2)=>(
            <ToggleButton 
            key={item}
            title={item}
            isChecked={checkedStates[getIndex(index1,index2)]}
            onClick={() => handleToggle(getIndex(index1,index2))}
          />
          ))}
        </div>
      ))}
    </div>
  );
}

const ToggleButton = ({ title, isChecked, onClick }) => (
  <div className={style.buttonBox} onClick={onClick}>
    <button className={style.buttonStyle}>{title}</button>
    {isChecked ? 
      <CheckCircleOutlined style={{ color: "green" }} /> : 
      <PlusCircleOutlined />}
  </div>
);

function getIndex(inx1, inx2) {
  switch (inx1) {
    case 0:
      return inx2;
    case 1:
      return 3+inx2;
    case 2:
      return 5+ inx2
    case 3:
      return 8 + inx2
    default:
      return inx2
  }
}










// export default function JobPage3() {

//   const dispatch = useDispatch();

//   var formData = useSelector((state) => state.formDataQP3); 

//   // 使用 dispatch 更新 Redux Store
//   const handleInputChange = (name, value) => {
//     dispatch(updateFormData({pNum:3, payload: { [name]: value }}));
//     dataSaveHandle(name, value, 3)
//   };
//   return (
//     <div className={style.container}>
//       <div className={style.title}>{texts.GeberalQ.JobPage.Page3.Q_title}</div>
//       {/* <QInput 
//         title={texts.GeberalQ.JobPage.Page3.TOP1} 
//         placeholder={texts.GeberalQ.JobPage.Page3.TOP1_PH}
//         value = {formData.top1||''}
//         onChange={(e)=>handleInputChange('top1',e.target.value)}
//       />
//       <QInput 
//         title={texts.GeberalQ.JobPage.Page3.TOP2} 
//         placeholder={texts.GeberalQ.JobPage.Page3.TOP2_PH}
//         value = {formData.top2||''}
//         onChange={(e)=>handleInputChange('top2',e.target.value)}
//       />
//       <QInput 
//         title={texts.GeberalQ.JobPage.Page3.TOP3} 
//         placeholder={texts.GeberalQ.JobPage.Page3.TOP3_PH}
//         value = {formData.top3||''}
//         onChange={(e)=>handleInputChange('top3',e.target.value)}
//       /> */}
//     </div>
//   )
// }
