import * as React from 'react'

import Api from '@/api'
import { IBanner, ISong } from '@/api/api'
import SongList from '@/components/SongList'
import Swiper from '@/components/Swiper'

interface IProps {
  banners: IBanner[],
  songs: ISong[]
}

interface IState {
  banners: IBanner[],
  songs: ISong[]
}

class NewSong extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      banners: [],
      songs: []
    }
  }

  async componentDidMount() {
    const { banners, songs } = this.props;
    if ( !banners || !songs) {
      this.setData();
    }
  }

  // 获取数据
  async setData() {
    try {
      // 如果需要自定义error提示，则在此进行catch
      const { data: { banner, data } } = await Api.getNewSong(true);
      this.setState({ banners: banner })
      this.setState({ songs: data})
    } catch (e) {
      // updateError(e);
    }
  }

  render() {

    return (
      <div>
        <Swiper banners={this.state.banners} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default NewSong;
