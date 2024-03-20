import HistoryComp from './HistoryComp';
import generateCountHistory from './generateCountHistory';

const GenerateCountHistory = () => {
  const remainingCounts = 1;
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
