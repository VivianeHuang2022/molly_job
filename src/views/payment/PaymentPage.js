import React, { useState } from 'react';
import { Tabs } from 'antd';
import PlanCard from './plancards/PlanCard';
import styles from './payment.module.css'; // Import CSS module
import { getLabels } from '../local';

const PlanCardsContainer = () => {
  const texts = getLabels();
  const plans = texts.plans;
  const [activeTab, setActiveTab] = useState('monthly');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

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

  //年月的tab bar items 为后续留拓展
  // const tabItems = Object.entries(plans.pricingType).map(([key, value]) => ({
  //   label: key.toUpperCase(), // 使用 value 作为标签
  //   key: key, // 使用 key 作为键
  //   children: <div className={styles.cards}>{renderPlans()}</div>,
  // }));

  return (
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
  );
};
// const tabBarStyle = {
//   // backgroundColor: 'lightblue',
//   // 添加其他您想要修改的样式属性
// };
export default PlanCardsContainer;
