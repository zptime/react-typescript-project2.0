/*
 * 歌手信息页面：歌手简介、歌曲列表
 */
import Api from '@/api'
import { ISong } from '@/api/api'
import Drawer from '@/components/Drawer'
import SongList from '@/components/SongList'
import * as React from 'react'
import { RouteComponentProps } from "react-router-dom"
import './singerInfo.scss'

import { HeaderAction, setHeader } from '@/redux/actions'
import { IHeaderState } from '@/redux/reducers/header'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IRouteParams {
  singerId: string // 此处必须先定义
}

// type Props = RouteComponentProps<{id: string}>;
// 我们需要获取有关当前路径的信息，所以将Props声明为RouteComponentProps的一个“特例”，类型参数{id: string}表明我们希望从路径中取得一个名叫id类型为string的参数。要指出的是，当我们像这样写定一个组件的props的类型为一种RouteComponentProps时，一般来说，这个组件就只能用在Route匹配规则里面了。
interface IProps extends RouteComponentProps<IRouteParams>, ReturnType<typeof mapDispatchToProps> {
}

// IState用于定义state的属性
interface IState {
  bg: string
  bgdesc: string
  songs: ISong[]
}

class SingerInfo extends React.Component<IProps, IState> {
  private frameId: number | null = null;

  constructor(props: IProps){
    super(props)
    this.state = {
      bg: '',
      bgdesc: '',
      songs: []
    }
  }

  public async componentDidMount(){
    const { setSingerHeader, match: { params: { singerId } }, location: { state: { title } } } = this.props
    setSingerHeader({
      isShow: true,
      title,
    });

    const { data: { info: { imgurl, intro }, songs: { list }}}  = await Api.getSingerInfo({singerId})
    this.setState({ bg: imgurl.replace('{size}', '400') })
    this.setState({ bgdesc: intro })
    this.setState({ songs: list })
  }

  public setHeaderBarStyle: React.UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    if (this.frameId === null) {
      this.frameId = window.requestAnimationFrame(() => {
        const { setSingerHeader, location: { state: { title } } } = this.props;
        const { scrollTop } = target;
        let opacity;
        if (scrollTop <= 200) {
          opacity = scrollTop / 200;
        } else {
          opacity = 1;
        }
        setSingerHeader({
          isShow: true,
          title,
          bg: `rgba(43, 162, 251, ${opacity})`
        });
        this.frameId = null;
      });
    };
  }

  public render(){
    return (
      <div className="page" onScroll={this.setHeaderBarStyle}>
        <div className="song-info__bg" style={{ backgroundImage: `url(${this.state.bg})`}}/>
        <Drawer text={this.state.bgdesc}/>
        <div className="div-line"/>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch<HeaderAction>) {
  return {
    setSingerHeader(payload: IHeaderState) {
      dispatch(setHeader(payload));
    }
  }
}

export default connect(null, mapDispatchToProps)(SingerInfo)
