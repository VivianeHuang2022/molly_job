import React, { useEffect, useState } from 'react';
import HistoryComp from './HistoryComp';

import {
  getGenerateCountHistory,
  // getGenerateCountHistory_MOCK,
  fetchRemainingCounts,
} from '../../../utils/api';

const GenerateCountHistory = () => {
  const [response, setResponse] = useState([]);
  const [counts, setCounts] = useState('-');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const fetchedResponse = await getGenerateCountHistory();

        if (fetchedResponse.msg.length > 0) {
          setResponse(fetchedResponse.msg);
        }
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    const fetchCount = async () => {
      try {
        const fetchedCount = await fetchRemainingCounts();
        setCounts(fetchedCount.data.msg.remainingCount);
      } catch (error) {}
    };
    fetchCount();
    fetchHistory();
  }, []); // 空依赖数组确保这个effect仅在组件挂载时运行一次
  // console.log(counts);
  return (
    <div>
      <HistoryComp
        generateCountHistory={response}
        // 如果HistoryComp组件需要remainingCounts，可以如下传递：
        remainingCounts={counts}
      />
    </div>
  );
};

export default GenerateCountHistory;
