import { Spin } from 'antd';
import styles from './Comps.module.css';

export const LoadingIndicator = ({ isLoading }) => {
  return isLoading ? (
    <div className={styles.loadingIndicator}>
      <Spin />
    </div>
  ) : null;
};
