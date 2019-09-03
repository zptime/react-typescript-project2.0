import * as React from 'react'
import goBackPng from '@/assets/imgs/goback_icon.png';
import { IHeaderState } from '@/redux/reducers/header';
import { IStoreState } from '@/redux/store';
import './headerBar.scss'

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

interface IProps {
  header: IHeaderState;
  classes?: string;
  onClick?: () => void;
}

export function HeaderBar({ header, onClick, classes = '' }: IProps) {
  if (!header.isShow) {
    return null;
  }

  return (
    <div className={`header-bar one-line-ellipsis ${classes}`} style={{ background: header.bg }}>
      <img src={goBackPng} className="header-bar__back-icon" onClick={onClick}/>
      {header.title}
    </div>
  )
}

function mapStateToProps(state: IStoreState) {
  const { header } = state;
  return {
    header
  };
}

interface IRouteHeaderProps extends RouteComponentProps {
  header: IHeaderState;
}

function RouteHeaderBar({ history, header }: IRouteHeaderProps) {
  return <HeaderBar header={header} onClick={() => history.goBack()}/>
}

const HeaderBarContainer = connect(mapStateToProps)(withRouter(RouteHeaderBar));

export default HeaderBarContainer;

