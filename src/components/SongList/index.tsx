// 新歌--轮播组件
import * as React from 'react'

import { ISong } from '@/api/api'
import SongItem from '@/components/SongItem'

interface IProps{
  songs: ISong[]
}

class SongList extends React.Component<IProps> {
  render() {
    const { songs } = this.props;

    return (
      <div>
        {
          songs.map((song) => (
            <SongItem title={song.filename} key={song.hash} />
          ))
        }
      </div>
    );
  }
}

export default SongList;
