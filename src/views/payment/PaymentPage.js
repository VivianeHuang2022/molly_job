import React, { useState, useEffect } from 'react';
// import { Tabs } from 'antd';
import PlanCard from './plancards/PlanCard';
import styles from './payment.module.css'; // Import CSS module
import { getLabels } from '../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { getOrderPrice } from '../../utils/api'

const PlanCardsContainer = () => {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const texts = getLabels(currentLanguage);
  const [activeTab] = useState('times');
  const [plans, setPlans] = useState(texts.plans);


  useEffect(() => {
    const fetchOrderPriceAndUpdatePlans = async () => {
      try {
        // 假设getOrderPrice返回一个Promise对象
        console.log(plans);

        //获取全部语言的价格到本地
        const response = await getOrderPrice();
        //不同语言价格不同
        // 假设response.data包含我们需要的数据
        const {data} = response;
  
        const plansCopy = JSON.parse(JSON.stringify(plans));
        updateFeaturesByOrderType(data, plansCopy);
        setPlans(plansCopy);
      } catch (error) {
        // 捕获异步操作中的错误
        console.error('Error fetching order prices:', error);
        // 可以根据错误类型进行更详细的错误处理
      }
    }
  
    fetchOrderPriceAndUpdatePlans();
  }, [plans]); // 依赖项中添加plans，以便在plans变化时重新请求

const updateFeaturesByOrderType=(orders, plans) => {
  orders.forEach(order => {
    // 遍历每个订单
    Object.keys(plans.paymentType).forEach(planKey => {
      const plan = plans.paymentType[planKey];
      // 查找与orderType匹配的计划
      if (plan.label === order.orderType) {
        // 更新features
        plan.features.forEach(feature => {
          // 找到特定的features项并更新它
          if (feature.type === 'generationCounts') {
            feature.text = `${order.generateTimes} ${feature.text}`;
          }
        });
        // 更新pricing.monthly，保留"¥"标识符
        plan.pricing.monthly = `${plans.priceSymbol}${order.amount}`;
      }
    });
  });
}

  // Render plans based on selected tab
  const renderSinglePlan = (planType) => {
    
    const selectedPlan = plans.paymentType[planType];
    if (selectedPlan) {
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



