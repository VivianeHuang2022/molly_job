import React, { useRef, useState, useEffect } from 'react';
import styles from './CoverLetter.module.css';
import { Carousel, Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ParagraphComp } from '../../../components/Typography';

const PreviewImage = ({
  selectedLanguage,
  countId,
  onContidChange,
  chooseTemplateTexts,
}) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // 控制轮播方向

  const mediaRef = useRef(null); // 引用主轮播图的 Carousel 组件

  const onChange = (current) => {
    setCurrentIndex(current);
    onContidChange(current);
  };

  const handleNext = () => {
    setDirection('next');
    mediaRef.current.next(); // 控制主轮播图的切换
  };

  const handlePrev = () => {
    setDirection('prev');
    mediaRef.current.prev(); // 控制主轮播图的切换
  };

  useEffect(() => {
    const imagesContexts = {
      english: require.context(
        '../../../image/CoverLetterEnglish',
        false,
        /\.(jpg)$/
      ),
      german: require.context(
        '../../../image/CoverLetterGerman',
        false,
        /\.(jpg)$/
      ),
    };

    const files = imagesContexts[selectedLanguage]
      .keys()
      .map(imagesContexts[selectedLanguage]);

    setImageFiles(files);
  }, [selectedLanguage]);

  return (
    <div className={styles.carouselContainer}>
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
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>
      <Space className={styles.buttonsContainer} size={20}>
        <Button onClick={handlePrev} icon={<LeftOutlined />}></Button>
        <ParagraphComp>
          {chooseTemplateTexts.title}: {chooseTemplateTexts.templateName}
          {currentIndex + 1}
        </ParagraphComp>
        <Button onClick={handleNext} icon={<RightOutlined />}></Button>
      </Space>
    </div>
  );
};

export default PreviewImage;
