import { useEffect } from 'react';
import HistoryComp from './HistoryComp';
import generateCountHistory from './generateCountHistory';

const GenerateCountHistory = () => {
  const remainingCounts = 1;
  useEffect(() => {
    document.title = 'Counts History';
  }, []);
  return (
    <div>
      <HistoryComp
        remainingCounts={remainingCounts}
        generateCountHistory={generateCountHistory}
      />
    </div>
  );
};

export default GenerateCountHistory;
