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
    // 更新本地存储的语言
    localStorage.setItem('Lan', currentLanguage === 'CN' ? 'EN' : 'CN');
  };

  // 切换用户身份的函数
  const toggleUserType = () => {
    // 发送用户身份切换的 action 到 Redux store
    dispatch(
      switchUserType(currentUserType === 'student' ? 'work' : 'student')
    );
    localStorage.setItem('topicId', currentUserType === 'student' ? 2 : 1);
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
