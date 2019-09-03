// import Tab from '@material-ui/core/Tab'
// import Tabs from '@material-ui/core/Tabs'
import * as React from 'react'
// import { Link } from "react-router-dom"
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
  // const [value, setValue] = React.useState(0)

  // function handleChange(event: React.ChangeEvent, newValue: number) {
  //   setValue(newValue)
  // }

  if (!header.isShow) {
    return null;
  }

  return (
    // <div className="header-bar">
    //   <Tabs
    //     variant="fullWidth"
    //     value={value}
    //     indicatorColor="primary"
    //     textColor="primary"
    //     onChange={handleChange}
    //   >
    //     <Tab label="新歌" component={Link} to="/tab/newsong"/>
    //     <Tab label="排行" component={Link} to="/tab/rank"/>
    //     <Tab label="歌单" component={Link} to="/tab/songlist"/>
    //     <Tab label="歌手" component={Link} to="/tab/singer"/>
    //   </Tabs>
    // </div>
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

