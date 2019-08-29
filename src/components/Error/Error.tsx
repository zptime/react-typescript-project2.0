/*
 * 错误页面
 */
import networkErrorPng from '@/assets/imgs/network_error.png';
import React from 'react';
import './error.scss';

export interface IProps {
  img?: string;
  title?: string;
  clickHandler?: () => any;
}

export default function ErrorHint({ img = networkErrorPng,
  title = '点击此重新加载', clickHandler, ...props }: IProps) {
  return (
    <div {...props} className="error">
      <img src={img} className="error__icon"/>
      <p className="error__title" onClick={clickHandler}>{title}</p>
    </div>
  );
}

