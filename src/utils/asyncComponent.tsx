/*
 * 异步加载组件
 */
import NetWorkErrorHint from '@/components/Error/NetworkError/NetworkError';
import Loading from '@/components/Loading/Loading';
import React from 'react';

interface IState {
  loading: boolean;
  loadFail: boolean;
}

/**
 * @description HOC 异步加载组件
 * @export
 * @param {() => Promise<any>} asyncImport 异步加载组件函数
 * @param {string} [componentName='default'] 需要加载的组件名
 * @returns
 */
export default function asyncComponent(asyncImport: () => Promise<any>, componentName: string = 'default') {
  class AsyncComponent extends React.Component<any, IState> {

    private component: any;

    constructor(props: any) {
      super(props);
      this.state = {
        loadFail: false,
        loading: true,
      }
    }

    public componentDidMount() {
      this.loadAsyncComponent();
    }

    public loadAsyncComponent = async () => {
      try {
        // reset
        const { loading, loadFail } = this.state;
        if (!(loading && !loadFail)) {
          this.setState({
            loadFail: false,
            loading: true,
          });
        }

        const module = await asyncImport();
        this.component = module[componentName];

        this.setState({
          loadFail: false,
          loading: false,
        });
      } catch (e) {
        this.setState({
          loadFail: false,
          loading: false,
        });
      }
    }

    public render() {
      const { loading, loadFail } = this.state;
      if (loadFail) {
        return <NetWorkErrorHint clickHandler={this.loadAsyncComponent}/>;
      }
      // TODO: 这里以后可以加上异步加载动画
      return loading ? <Loading/> : <this.component {...this.props}/>
    }
  }

  return AsyncComponent;
}


