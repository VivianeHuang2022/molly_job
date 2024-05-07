//mock data
const generateCountHistory = [
  {
    key: '1',
    action: 'increment',
    count: 100,
    timestamp: "2024-04-11 21:18:35.33",
    // timestamp: 1648780800000,
    // doucumentType: 'coverletter',
    // planType: 'pro',
    actionType:"Pro"
  },
  {
    key: '2',
    action: 'decrement',
    count: 1,
    timestamp: '2024-04-11 21:18:35.33',
    // doucumentType: 'coverletter',
    // planType: 'pro',
    actionType:"coverletter"
  },
  {
    key: '3',
    action: 'increment',
    count: 50,
    timestamp: '2024-04-11 21:18:35.33',
    // doucumentType: 'coverletter',
    // planType: 'pro',
    actionType:"Standard"
  },
  // 更多的历史记录...
];

export default generateCountHistory;
