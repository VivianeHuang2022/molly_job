import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { updateField} from '../../../../redux/cvDataSlice';


const PersonalInfoPage = ({ cvData, labels, styles }) => {
  const { firstName, surname, userTel, userEmail, linkedIn, sectionName } =
    labels;

  // 获取 labels 对象的所有键
  const allLabelKeys = Object.keys(labels);
  const sectionKey = 'personalInfo';

  // 过滤掉键为 'sectionName' 的项
  const labelKeys = allLabelKeys.filter((key) => key !== 'sectionName');
  const dispatch = useDispatch(); // 获取 dispatch 函数

  // 定义更新 Redux state 的函数
  const updateFieldFunc = (sectionName, title, newValue) => {
    dispatch(
      updateField({
        sectionName: sectionKey,
        title: title,
        newValue: newValue,
      })
    );
  };

  const PersonalInfoInput = ({ label, initialValue, title }) => {
    return (
      <div className={styles.inputContainer}>
        <p>{label}</p>
        <Input
          placeholder={label}
          defaultValue={initialValue}
          onChange={(e) => updateFieldFunc(sectionKey, title, e.target.value)}
        />
      </div>
    );
  };

  // 创建多个 PersonalInfoInput 组件，并放入一个数组中
  const PersonalInfoInputs = labelKeys.map((key, index) => {
    const title = labelKeys[index];

    return (
      <PersonalInfoInput
        sectionKey={sectionKey}
        key={index}
        label={labels[title]}
        initialValue={cvData['personalInfo'][title]}
        title={title}
      />
    );
  });

  return (
    <div>
      <h1>{sectionName}</h1>
      {PersonalInfoInputs}
      <button
        onClick={() => updateFieldFunc(sectionName, 'firstName', 'new value')}
      >
        updateFieldFunc
      </button>
    </div>
  );
};

export default PersonalInfoPage;
