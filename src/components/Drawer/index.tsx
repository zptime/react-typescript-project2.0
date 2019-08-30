/*
 * 文字介绍组件
 */
import openIconPng from '@/assets/imgs/open_icon.png';
import React from 'react';
import './drawer.scss';

interface IProps {
  text: string;
}

interface IState {
  open: boolean;
}

// React.PureComponent vs React.Component
// https://segmentfault.com/a/1190000008402834
// 当组件的props或者state发生变化的时候：React会对组件当前的Props和State分别与nextProps和nextState进行比较，当发现变化时，就会对当前组件以及子组件进行重新渲染，否则就不渲染。有时候为了避免组件进行不必要的重新渲染，我们通过定义shouldComponentUpdate来优化性能。
// shouldComponentUpdate通过判断props.color和state.count是否发生变化来决定需不需要重新渲染组件，当然有时候这种简单的判断，显得有些多余和样板化，于是React就提供了PureComponent来自动帮我们做这件事，这样就不需要手动来写shouldComponentUpdate了
export default class Drawer extends React.PureComponent<IProps, IState> {

  public state: IState = {
    open: false,
  }

  public toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    })
  }

  public render() {
    const { text } = this.props;
    const { open } = this.state;
    return (
      <div className='drawer'>
        <img className={open ? 'drawer__icon drawer__icon--open' : 'drawer__icon drawer__icon--close'} src={openIconPng} onClick={this.toggleDrawer}/>
        <div className={open ? 'drawer__text drawer__text--open' : 'drawer__text drawer__text--close'}>
          {text}
        </div>
      </div>
    );
  }
}
