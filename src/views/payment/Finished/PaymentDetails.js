import React from 'react';
import { ParagraphComp } from '../../../components/Typography';

const PaymentInfoItem = ({ label, value }) => {
  // 如果value为空，则不渲染该项
  if (!value) return null;

  return (
    <ParagraphComp>
      {label}: {value}
    </ParagraphComp>
  );
};

const PaymentDetails = ({ paymentInfo, detailTexts }) => {
  return (
    <div>
      <PaymentInfoItem
        label={detailTexts.orderType}
        value={paymentInfo?.plan}
      />
      <PaymentInfoItem
        label={detailTexts.generateCount}
        value={paymentInfo?.generateCount}
      />
      <PaymentInfoItem
        label={detailTexts.orderAmount}
        value={paymentInfo?.orderAmount}
      />
      <PaymentInfoItem
        label={detailTexts.orderId}
        value={paymentInfo?.orderId}
      />
    </div>
  );
};

export default PaymentDetails;
