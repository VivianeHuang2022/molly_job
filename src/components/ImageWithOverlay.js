import React from 'react';
import { Image, Button } from 'antd';

export const ImageWithOverlay = ({
  styles,
  qrCodeImage,
  expired,
  refreshImage,
  buttonText,
}) => {
  return (
    <div className={styles.qrcodeWrapper}>
      <Image src={qrCodeImage} preview={false} alt="QR Code" />
      {expired && (
        <div className={styles.overlay}>
          <Button onClick={refreshImage}>{buttonText}</Button>
        </div>
      )}
    </div>
  );
};
