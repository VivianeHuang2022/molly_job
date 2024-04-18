import React, { useState, useEffect } from 'react';
// import { Tabs } from 'antd';
import PlanCard from './plancards/PlanCard';
import styles from './payment.module.css'; // Import CSS module
import { getLabels } from '../local';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from '../../redux/slices/languageSlice';
import { getOrderPrice } from '../../utils/api'

const PlanCardsContainer = () => {
  const texts = getLabels(useSelector(selectCurrentLanguage));
  const [activeTab] = useState('monthly');
  const [plans, setPlans] = useState(texts.plans);

  // const handleTabChange = (key) => {
  //   setActiveTab(key);
  // };

  // Render plans based on selected tab
  const renderSinglePlan = (planType) => {
    

    const selectedPlan = plans.paymentType[planType];
    //console.log(selectedPlan)
    if (selectedPlan) {
      return (
        <PlanCard
          key={planType}
          pricing={selectedPlan.pricing[activeTab]}
          // pricing={price}
          title={selectedPlan.label}
          info={selectedPlan.info}
          features={selectedPlan.features}
          time={plans.pricingType[activeTab]}
          planType={planType}
          planTimeType={activeTab}
        />
      );
    }
  };

  const renderPlans = () => {
    return Object.keys(plans.paymentType).map((planType) => {
      return renderSinglePlan(planType);
    });
  };

  //const deepCopy = _.cloneDeep(plans.paymentType);

  useEffect(()=>{
    var response = getOrderPrice()
    response.then(data=>{
      const plansCopy = JSON.parse(JSON.stringify(plans));
      updateFeaturesByOrderType(data, plansCopy);
      // 使用更新后的副本设置plans状态
      setPlans(plansCopy);
      //console.log(plans)
    })
    
  },[]);

  return (
    <div className={styles.paymenContainerOueter}>
      <div className={styles.paymentContainer}>
        <div className={styles.cards}>{renderPlans()}</div>

        {/* <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        items={tabItems}
        centered
        tabBarStyle={tabBarStyle}
      /> */}
      </div>
    </div>
  );
};
// const tabBarStyle = {
//   // backgroundColor: 'lightblue',
//   // 添加其他您想要修改的样式属性
// };
export default PlanCardsContainer;

function updateFeaturesByOrderType(orders, plans) {
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
        plan.pricing.monthly = `¥${order.amount}`;
      }
    });
  });
}


