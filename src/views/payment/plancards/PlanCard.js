import React from 'react';
import styles from './PlanCard.module.css';
import { listIcon } from './icon';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../../components/Button';

const PlanCard = ({
  pricing,
  title,
  info,
  features,
  planType,
  time,
  priceSymbol,
  timesNum,
}) => {
  console.log(pricing);
  const navigate = useNavigate();

  const paymentData = {
    planType,
  };

  const handleChoosPlan = (paymentData) => {
    //得到后端返回的二维码信息 展示二维码页面
    navigate('/payment/qr', { state: { planType: paymentData.planType } });
    // console.log(planType);
  };

  return (
    <article className={`${styles.plan} ${styles.card}`}>
      <div className={styles.inner}>
        <span className={styles.pricing}>
          {priceSymbol} {pricing}
          <span className={styles.time}>
            / {timesNum}
            {time}
          </span>
        </span>
        <TitleComponent title={title} />
        <InfoComponent info={info} />
        <FeaturesListComponent features={features} />
        <ButtonComponent onClick={() => handleChoosPlan(paymentData)} />
      </div>
    </article>
  );
};

/*-------展示组件--------*/
const TitleComponent = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

const InfoComponent = ({ info }) => {
  return (
    <div className={styles.infoContainer}>
      <p className={styles.info}>{info}</p>
    </div>
  );
};

const FeaturesListComponent = ({ features }) => {
  return (
    <ul className={styles.features}>
      {features.map((feature, index) => (
        <li key={index} className={styles.feature}>
          <span className={styles.icon}>{listIcon}</span>
          <span>
            <span className={styles.firstWord}>
              {getFirstWord(feature.text)}
            </span>{' '}
            <span>{feature.text.substr(feature.text.indexOf(' ') + 1)}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

const ButtonComponent = ({ onClick }) => {
  return (
    <div>
      <PrimaryButton
        className={styles.button}
        onClick={onClick}
        label="Choose plan"
      />
    </div>
  );
};

// 函数用于获取首个单词
function getFirstWord(text) {
  if (typeof text !== 'string' || text.length === 0) return '';
  return text.split(' ')[0];
}

export default PlanCard;
