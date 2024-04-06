import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Profile = ({ items }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
    >
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
