import React from 'react';
import {
  Table,
  // Button
} from 'antd';

import { ColumnShow, CountComp } from '../../../components/Column/ColumnShow';
import styles from './history.module.css';

import { getLabels } from '../../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../../redux/slices/languageSlice';
import { Link } from 'react-router-dom';

const HistoryComp = ({ remainingCounts, generateCountHistory }) => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const { historyTexts } = texts;

  const columns = [
    {
      title: <ColumnShow content={historyTexts.count} />,
      key: 'count',
      dataIndex: 'count',
      render: (text, record) => {
        const actionType = record.actionType;
        let actionTypeText;
        switch (actionType) {
          case 'coverletter':
            actionTypeText = historyTexts.coverletter;
            break;
          case 'recommendation':
            actionTypeText = historyTexts.recommendation;
            break;
          case 'pro':
            actionTypeText = historyTexts.pro;
            break;
          case 'superPro':
            actionTypeText = historyTexts.superPro;
            break;
          case 'standard':
            actionTypeText = historyTexts.standard;
            break;
          default:
            // 这里可以什么都不做，或者添加一些默认行为,不加default会触发提示Expected a default case  default-case
            break;
        }
        return (
          <span>
            {record.action === 'increment'
              ? `${historyTexts.payment} ${actionTypeText}  +`
              : `  ${historyTexts.generate} ${actionTypeText} -`}
            <CountComp content={record.count} />
          </span>
        );
      },
    },
    {
      title: <ColumnShow content={historyTexts.time} />,
      dataIndex: 'timestamp',
      key: 'time',
      render: (timestamp) => (
        <ColumnShow content={timestamp} />
        // <ColumnShow content={new Date(timestamp).toLocaleString()} />
      ),
      sorter: (a, b) => b.timestamp - a.timestamp,
      defaultSortOrder: 'ascend',
    },
  ];
  return (
    <div className={styles.container}>
      <h1>
        {historyTexts.remainingCounts} {remainingCounts}
      </h1>
      <h2>{historyTexts.generateCountsHistory}</h2>
      <Table
        columns={columns}
        scroll={{ x: 200 }}
        headerRowStyle={{ display: 'none' }}
        dataSource={generateCountHistory}
        rowKey="key"
      />

      <Link to="/layout" className={styles.returnButton}>
        {historyTexts.buttonBack}
      </Link>
    </div>
  );
};

export default HistoryComp;
