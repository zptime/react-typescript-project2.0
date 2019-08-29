/*
 * 加载组件
 */
import loadingSVG from '@/assets/imgs/loading.svg';
import React from 'react';
import './loading.scss';

interface IProps {
  text?: string;
}

export default function Loading({ text = '正在加载' }: IProps) {
  return (
    <div className="loading">
      <img src={loadingSVG} className="loading__img"/>
      <p className="loading__text">{text}</p>
    </div>
  );
}
