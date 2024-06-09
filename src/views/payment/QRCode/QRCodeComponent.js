import React, { useState, useEffect } from "react";
import styles from "./QRCode.module.css";
import CountdownTimer from "../../../components/CountdownTimer";

import { ImageWithOverlay } from "../../../components/ImageWithOverlay";

import { Image } from "antd";

const QRCodeComponent = ({
  texts,
  Paragraph,
  qrCodeImage,
  min,
  fetchQRCode,
}) => {
  const QR_CODE_TIME = min * 60;

  const [countdown, setCountdown] = useState(QR_CODE_TIME); // 倒计时
  const [expired, setExpired] = useState(false); // 标记二维码是否已过期

  useEffect(() => {
    // 创建定时器，每秒减少一秒的倒计时时间
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval); // 组件卸载时清除定时器，避免内存泄漏
  }, []);

  useEffect(() => {
    // 监测倒计时是否达到零，若达到则标记二维码为已过期状态
    if (countdown <= 0) {
      setExpired(true);
    }
  }, [countdown]);

  const refreshImage = () => {
    // 重置倒计时时间并取消过期状态标记
    setCountdown(QR_CODE_TIME);
    setExpired(false);
    // 刷新二维码需要重新fetch二维码
    fetchQRCode();
  };

  return (
    <div className={styles.qrcodeContainer}>
      <div>
        <div className={styles.qrcodeTitle}>
          <Paragraph>
            {/* 根据二维码是否过期动态显示不同的文本 */}
            {!expired && texts.QRCode.title.scanQRCode}
            {expired && texts.QRCode.title.expired}
          </Paragraph>
        </div>

        {/* 渲染二维码显示组件 */}
        <div className={styles.qrcodeWrapper}>
          {expired ? (
            <ImageWithOverlay
              styles={styles}
              qrCodeImage={qrCodeImage}
              expired={true}
              refreshImage={refreshImage}
              onClick={refreshImage}
              buttonText={texts.QRCode.buttonLabel}
            />
          ) : (
            <Image src={qrCodeImage} preview={false} alt="QR Code" />
          )}
        </div>

        <div className={styles.timer}>
          {/* 若二维码未过期，则渲染倒计时组件 */}
          {!expired && (
            <CountdownTimer
              countdown={countdown}
              texts={texts}
              timer={texts.QRCode.timer}
              Paragraph={Paragraph}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeComponent;
