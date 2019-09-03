/*
 * 顶部tab组件
 */
import { HeaderAction, setHeader } from '@/redux/actions/header';
import { IHeaderState } from '@/redux/reducers/header';
import { IRoute, routeWithSubRoutes } from '@/router';
import MaterialTab from '@material-ui/core/Tab';
import MaterialTabs from '@material-ui/core/Tabs';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { Dispatch } from 'redux';
import './tab.scss';

interface IState {
  value: string;
}

interface IProps extends RouteComponentProps, ReturnType<typeof mapDispatchToProps> {
  routes: IRoute[];
}

// NOTE: 因为react里面没有keep-alive来保持页面状态。 https://github.com/facebook/react/issues/12039
// 只维护tab状态，以及设置title
class Tab extends React.Component<IProps, IState> {

  public state: IState = {
    value: 'newsong',
  };

  constructor(props: IProps) {
    super(props);
    const { location } = this.props;
    const value = location.pathname.replace('/tab/', '');
    this.state.value = value;
  }

  public componentDidMount() {
    const { setTabHeader } = this.props;
    setTabHeader({
      isShow: false
    });
  }

  public onChangeTab = (event: React.ChangeEvent, value: string) => {
    const { history } = this.props;
    this.setState({
      value
    });
    history.push(`/tab/${value}`, {
      from: 'fromtest'
    });
  }

  public render() {
    const { value } = this.state;
    const { routes } = this.props;
    return (
      <div className="page">
        <MaterialTabs variant="fullWidth" value={value} textColor="primary" indicatorColor="primary"
          onChange={this.onChangeTab}>
          <MaterialTab value="newsong" label="新歌"/>
          <MaterialTab value="rank" label="排行"/>
          <MaterialTab value="songlist" label="歌单"/>
          <MaterialTab value="singer" label="歌手"/>
        </MaterialTabs>
        <div className="tab-container">
          {
            routes.map((route, i) => routeWithSubRoutes(route, i))
          }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<HeaderAction>) {
  return {
    setTabHeader(payload: IHeaderState) {
      dispatch(setHeader(payload))
    }
  }
}

// 向tab组件注入history对象
export default withRouter(connect(null, mapDispatchToProps)(Tab));
