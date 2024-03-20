import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Count',
    key: 'count',
    render: (text, record) => (
      <span>
        {record.action === 'increment' ? '+' : '-'}
        {record.count}
      </span>
    ),
  },
  {
    title: 'Time',
    dataIndex: 'timestamp',
    key: 'time',
    render: (timestamp) => new Date(timestamp).toLocaleString(),
    sorter: (a, b) => b.timestamp - a.timestamp, //实际这行应该用不到，都是按时间顺序排列的吧
    defaultSortOrder: 'ascend',
  },
];

const HistoryComp = ({ remainingCounts, generateCountHistory }) => {
  return (
    <div>
      <h1>Generate Counts History</h1>
      <h2>Remaining Counts: {remainingCounts}</h2>
      <Table columns={columns} dataSource={generateCountHistory} />
    </div>
  );
};

export default HistoryComp;
