import React from 'react';
import ErrorImage from './errorImage';
import './styles/index.scss';

export interface ErrorBlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
}

const classPrefix = 'ygm-error-block';

const ErrorBlock: React.FC<ErrorBlockProps> = (props) => {
  let imageNode: React.ReactNode = ErrorImage;

  if (props.image) {
    imageNode = props.image;
  }

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-image`}>{imageNode}</div>

      <div className={`${classPrefix}-description`}>
        <div className={`${classPrefix}-description-title`}>{props.title}</div>
        <div className={`${classPrefix}-description-subtitle`}>{props.description}</div>
      </div>
    </div>
  );
};

ErrorBlock.defaultProps = {
  title: '頁面出點小問題',
  description: '請稍後再試',
};

export default ErrorBlock;