/*
 * 歌手信息页面：歌手简介、歌曲列表
 */
import Api from '@/api'
import { IRankInfo, ISong } from '@/api/api'
import SongItem from '@/components/SongItem'
import * as React from 'react'
import { RouteComponentProps } from "react-router-dom"
import './rankInfo.scss'

interface IRouteParams {
  id: string
}

interface IProps extends RouteComponentProps<IRouteParams> {
  rankInfo: IRankInfo
}

// IState用于定义state的属性
interface IState {
  bg: string
  updateTime: string
  songs: ISong[]
}

class RankInfo extends React.Component<IProps, IState> {
  private frameId: number | null = null;

  constructor(props: IProps){
    super(props)
    this.state = {
      bg: '',
      songs: [],
      updateTime: '',
    }
  }

  public async componentDidMount(){
    const { match: { params: { id } }} = this.props
    const { data: { info: { banner7url }, songs: { list }}}  = await Api.getRankInfo({rankid: Number(id)})
    this.setState({ bg: banner7url.replace('{size}', '400') })
    this.setState({ updateTime: this.getToday(new Date())})
    this.setState({ songs: list })
  }

  // 泛型传入currentTarget类型
  public setHeaderBarStyle: React.UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    if (this.frameId === null) {
      this.frameId = window.requestAnimationFrame(() => {
        // const { setHeader } = this.props;
        const { scrollTop } = target;
        let opacity;
        if (scrollTop <= 200) {
          opacity = scrollTop / 200;
        } else {
          opacity = 1;
        }
        // setHeader({
        //   bg: `rgba(43, 162, 251, ${opacity})`
        // });
        console.log(opacity)
        this.frameId = null;
      });
    };
  }

  public getToday(time: Date){
    const year = time.getFullYear()
    let month: number | string = time.getMonth() + 1
    let date: number | string = time.getDate()
    if(month < 10) {
      month = '0' + month
    }
    if(date < 10) {
      date = '0' + date
    }
    return `${year}-${month}-${date}`
  }

  public render(){
    return (
      <div className="page" onScroll={this.setHeaderBarStyle}>
        <div className="rank-bg" style={{ backgroundImage: `url(${this.state.bg})`  }}>
          <div className="rank-bg__title">上次更新时间：{this.state.updateTime}</div>
        </div>
        <div className="song-list">
          {
            this.state.songs.map((song, i) => (
                <SongItem title={song.filename} key={song.hash} rank={i} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default RankInfo
