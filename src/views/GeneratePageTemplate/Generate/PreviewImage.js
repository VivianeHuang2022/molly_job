import React, { useRef, useState, useCallback } from 'react';
import styles from './generate.module.css';
import { Carousel, Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ParagraphComp } from '../../../components/Typography';

const PreviewImage = ({
  onContidChange,
  chooseTemplateTexts,
  countId,
  imageFiles,
}) => {
  const [currentIndex, setCurrentIndex] = useState(countId);
  const [, setDirection] = useState('next'); // 控制轮播方向

  const mediaRef = useRef(null); // 引用主轮播图的 Carousel 组件

  // 使用 useCallback 来避免在每次渲染时都创建新的函数
  const onChange = useCallback(
    (current) => {
      setCurrentIndex(current);
      onContidChange(current);
    },
    [onContidChange]
  );

  const handleNext = useCallback(() => {
    setDirection('next');
    mediaRef.current.next(); // 控制主轮播图的切换
  }, [mediaRef]);

  const handlePrev = useCallback(() => {
    setDirection('prev');
    mediaRef.current.prev(); // 控制主轮播图的切换
  }, [mediaRef]);

  return (
    <div className={styles.carouselContainer}>
      <Space className={styles.buttonsContainer} size={20}>
        <Button onClick={handlePrev} icon={<LeftOutlined />}></Button>
        <ParagraphComp>
          {chooseTemplateTexts.title}: {chooseTemplateTexts.templateName}
          {currentIndex + 1}
        </ParagraphComp>
        <Button onClick={handleNext} icon={<RightOutlined />}></Button>
      </Space>
      <Carousel
        className={styles.carousel}
        initialSlide={currentIndex}
        dotPosition="bottom"
        autoplay={false}
        afterChange={onChange}
        ref={mediaRef} // 将 ref 绑定到主轮播图
      >
        {imageFiles.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img
              src={image}
              alt={`style ${index + 1}`}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PreviewImage;
