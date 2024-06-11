import React from 'react';
import QInput from '../../../../components/QInput/QInput';
import style from './JobPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateJobData, jobDataSaveHandle } from '../../../../redux/slice'; // 导入你的 action
import { getLabels } from '../../../local';
import { selectCurrentLanguage } from '../../../../redux/slices/languageSlice';

export default function JobPage4() {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const dispatch = useDispatch();
  var formData = useSelector((state) => state.coverLetter.jobDataQP4);

  // 使用 dispatch 更新 Redux Store
  const handleInputChange = (name, value) => {
    dispatch(updateJobData({ pNum: 4, payload: { [name]: value } }));
    jobDataSaveHandle(name, value, 4);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{texts.GeberalQ.JobPage.Page4.Q_title}</div>
      <QInput
        title={texts.GeberalQ.JobPage.Page4.Q_Backgrund}
        type="text"
        size="50px"
        placeholder={texts.GeberalQ.JobPage.Page4.Q_Backgrund_PH}
        value={formData.background || ''}
        onChange={(e) => handleInputChange('background', e.target.value)}
      />
      <QInput
        title={texts.GeberalQ.JobPage.Page4.Q_Action}
        type="text"
        size="70px"
        placeholder={texts.GeberalQ.JobPage.Page4.Q_Action_PH}
        value={formData.action || ''}
        onChange={(e) => handleInputChange('action', e.target.value)}
      />
      <QInput
        title={texts.GeberalQ.JobPage.Page4.Q_Result}
        type="text"
        size="60px"
        placeholder={texts.GeberalQ.JobPage.Page4.Q_Result_PH}
        value={formData.result || ''}
        onChange={(e) => handleInputChange('result', e.target.value)}
      />
    </div>
  );
}
