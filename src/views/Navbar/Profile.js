import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import {
  switchLanguage,
  selectCurrentLanguage,
} from '../../redux/slices/languageSlice';
import {
  switchUserType,
  selectCurrentUserType,
} from '../../redux/slices/userTypeSlice';

const Profile = ({ profileItems }) => {
  // 从 Redux store 中获取当前语言状态
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const currentUserType = useSelector(selectCurrentUserType);

  // 切换语言的函数
  const toggleLanguage = () => {
    // 发送语言切换的 action 到 Redux store
    dispatch(switchLanguage(currentLanguage === 'CN' ? 'EN' : 'CN'));
  };

  // 切换用户身份的函数
  const toggleUserType = () => {
    // 发送用户身份切换的 action 到 Redux store
    dispatch(
      switchUserType(currentUserType === 'student' ? 'work' : 'student')
    );
    localStorage.setItem('topicId', currentUserType === 'student' ? 2 : 1);
    window.location.reload(); //0509 lily 在切换身份后重新刷新页面进行数据获取&组件UI数据更新(要重新刷新页面,加载时间较长,体验不算特别友好,由于没能解决formik表单同步刷新,暂时用这种方式实现)
  };

  // 根据当前语言状态，更新菜单项的文本
  const languageMenuItem = {
    key: 'toggle-language',
    label: `swith to ${currentLanguage === 'CN' ? 'English' : '中文'}`,
    onClick: toggleLanguage,
  };

  // 根据当前用户身份状态，更新菜单项的文本
  const userTypeMenuItem = {
    key: 'toggle-user-type',
    label: `Switch to ${currentUserType === 'student' ? 'Work' : 'Student'}`,
    onClick: toggleUserType,
  };

  // 将语言切换菜单项和用户身份切换菜单项添加到下拉菜单中
  const items = [languageMenuItem, userTypeMenuItem, ...profileItems];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <div>
        <Avatar
          size={50}
          icon={<UserOutlined />}
          style={{
            backgroundColor: 'black',
            cursor: 'pointer',
          }}
        />
      </div>
    </Dropdown>
  );
};

export default Profile;
