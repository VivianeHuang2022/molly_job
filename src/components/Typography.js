// TypographyComponents.js
import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export const ParagraphComp = ({ children }) => {
  return <Text>{children}</Text>;
};

export const SecParagraphComp = ({ children }) => {
  return <Text type="secondary">{children}</Text>;
};

export const TitleComp = ({ level, children }) => {
  return <Title level={level}>{children}</Title>;
};

export const MidTitleComp = ({ level, children }) => {
  return <Title level={4}>{children}</Title>;
};

export const NoticeParagraphComp = ({ children }) => {
  return <Text mark>{children}</Text>;
};
