export const getMenuItems = (texts) => {
  return [
    {
      key: 'coverletter',
      label: texts.homeTexts.coverletterTxt,
    },
    {
      key: 'recommendation',
      label: texts.homeTexts.recommendationTxt,
    },
    {
      key: 'resume',
      label: texts.homeTexts.resumeTxt,
    },
    {
      key: 'payment',
      label: texts.homeTexts.paymentTxt,
    },
  ];
};

const handleLogout = () => {
  // 清除本地存储中的令牌
  localStorage.removeItem('jwtToken');

  // 重定向到登录页面或主页
  window.location.href = '/login'; // 假设登录页面的路径是 '/login'
};
export const profileItems = [
  {
    key: 'generateCounts_history',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#/generateCounts_history"
      >
        History
      </a>
    ),
  },
  {
    key: 'about',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#/About">
        About
      </a>
    ),
  },
  {
    key: 'logout',
    label: (
      <a
        target="_blank"
        onClick={handleLogout}
        rel="noopener noreferrer"
        href="/"
      >
        Logout
      </a>
    ),
  },
];
