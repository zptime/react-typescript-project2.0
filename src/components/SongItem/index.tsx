/*
 * 歌曲列表Item组件
 */
import React, { MouseEventHandler } from 'react';

// import downloadPng from '@/assets/imgs/download_icon.png'
import './songItem.scss'


interface IProps{
  title: string;
  rank?: number;
  onClick?: MouseEventHandler
  showDownload?: boolean
}

class SongItem extends React.Component<IProps> {
  public render() {
    const { title, rank, onClick } = this.props;

    return (
      <div className="song-item" onClick={onClick}>
        { rank !== undefined ? <span className="song-item__index">{rank}</span> : null }
        {/* { showDownload && <img src={downloadPng} className="song-item__download-icon"/> } */}
        <div className={ `one-line-ellipsis ${rank !== undefined ? 'song-item__title song-item__title--has-rank'
          : 'song-item__title song-item__title--no-rank'}`}>
          {title}
        </div>
      </div>
    )
  }
}

export default SongItem
