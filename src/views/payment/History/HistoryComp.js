import React from 'react';
import { Table } from 'antd';

import { ColumnShow, CountComp } from '../../../components/Column/ColumnShow';
import styles from './history.module.css';

const columns = [
  {
    title: <ColumnShow content="Count" />,
    key: 'count',
    dataIndex: 'count',
    render: (text, record) => (
      <span>
        {record.recordType}
        {record.action === 'increment' ? ' payment +' : ' generate -'}
        <CountComp content={record.count} />
      </span>
    ),
  },
  {
    title: <ColumnShow content="Time" />,
    dataIndex: 'timestamp',
    key: 'time',
    render: (timestamp) => (
      <ColumnShow content={new Date(timestamp).toLocaleString()} />
    ),
    sorter: (a, b) => b.timestamp - a.timestamp,
    defaultSortOrder: 'ascend',
  },
];

const HistoryComp = ({ remainingCounts, generateCountHistory }) => {
  return (
    <div className={styles.container}>
      <h1>Remaining Counts: {remainingCounts}</h1>
      <h2>Generate Counts History:</h2>
      <Table
        columns={columns}
        scroll={{ x: 200 }}
        headerRowStyle={{ display: 'none' }}
        dataSource={generateCountHistory}
      />
    </div>
  );
};

export default HistoryComp;
