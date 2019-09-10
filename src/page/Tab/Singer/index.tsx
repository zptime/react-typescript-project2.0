import arrowIconPng from '@/assets/imgs/arrow_icon.png'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './singer.scss'

const list = [
  [{ txt: '热门歌手', id: 88 }],
  [{ txt: '华语男歌手', id: 1 }, { txt: '华语女歌手', id: 2 }, { txt: '华语组合', id: 3 }],
  [{ txt: '日韩男歌手', id: 4 }, { txt: '日韩女歌手', id: 5 }, { txt: '日韩组合', id: 6 }],
  [{ txt: '欧美男歌手', id: 7 }, { txt: '欧美女歌手', id: 8 }, { txt: '欧美组合', id: 9 }],
];

interface IState {
  val: number
}

class Singer extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      val: 0
    };
  }

  public componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);

    // 输出 0 0 2 3
    // 1、第一次和第二次都是在 react 自身生命周期内，触发时 isBatchingUpdates 为 true，所以并不会直接执行更新 state，而是加入了 dirtyComponents，所以打印时获取的都是更新前的状态 0。
    // 2、两次 setState 时，获取到 this.state.val 都是 0，所以执行时都是将 0 设置成 1，在 react 内部会被合并掉，只执行一次。设置完成后 state.val值为 1。
    // 3、setTimeout 中的代码，触发时 isBatchingUpdates 为 false，所以能够直接进行更新，所以连着输出 2，3。
  }

  public render() {
    return (
      <div>
        {
          list.map( (itemArr, index) => {
            return (
              <div key={index} className="group">
                {
                  itemArr.map( (item) => (
                    <Link key={item.id} to={
                      {
                        pathname: `/singer/list/${item.id}`,
                        state: { title: item.txt }
                      }
                    }>
                      <div className="group-item">
                        {item.txt}
                        <img src={arrowIconPng} className="group-item__right-icon"/>
                      </div>
                    </Link>
                  ))
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Singer;
