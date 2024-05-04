import React, { useState, useEffect } from 'react';
// import { Tabs } from 'antd';
import PlanCard from './plancards/PlanCard';
import styles from './payment.module.css'; // Import CSS module
import { getLabels } from '../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { getOrderPrice, 
  // getOrderPrice_MOCK 
} from '../../utils/api';

const PlanCardsContainer = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const texts = getLabels(currentLanguage);
  const [activeTab] = useState('times');
  const plans = texts.plans;
  const [response, setResponse] = useState([]);
  const fetchOrderPriceAndUpdatePlans = async () => {
    try {
      //获取全部语言的价格到本地
      const response = await getOrderPrice();
      console.log(response)
      if (response) {
        setResponse(response);
      }
    } catch (error) {
      // 捕获异步操作中的错误
      console.error('Error fetching order prices:', error);
      // 可以根据错误类型进行更详细的错误处理
    }
  };

  useEffect(() => {
    fetchOrderPriceAndUpdatePlans();
  }, []);
  // Render plans based on selected tab
  const renderSinglePlan = (planType) => {
    const selectedPlan = plans.paymentType[planType];
    if (response.length>0) {
      const selectOrder = response.find(
        (order) => order.orderLabel === planType
      );
      return (
        <PlanCard
          key={planType}
          //pricing={selectOrder.amount[currentLanguage]}
          pricing={selectOrder.amount}
          title={selectedPlan.label}
          info={selectedPlan.info}
          features={selectedPlan.features}
          planType={planType}
          priceSymbol={plans.priceSymbol}
          time={plans.pricingType[activeTab]}
          timesNum={selectOrder.generateTimes}
        />
      );
    } else {
      return (
        <PlanCard
          key={planType}
          pricing={selectedPlan.pricing[activeTab]}
          title={selectedPlan.label}
          info={selectedPlan.info}
          features={selectedPlan.features}
          planType={planType}
          priceSymbol={plans.priceSymbol}
          time={plans.pricingType[activeTab]}
          timesNum={selectedPlan.pricing.timesNum}
        />
      );
    }
  };

  const renderPlans = () => {
    return Object.keys(plans.paymentType).map((planType) => {
      return renderSinglePlan(planType);
    });
  };

  return (
    <div className={styles.paymenContainerOueter}>
      <div className={styles.paymentContainer}>
        <div className={styles.cards}>{renderPlans()}</div>
      </div>
    </div>
  );
};

export default PlanCardsContainer;
