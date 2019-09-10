// 新歌--轮播组件
import * as React from 'react'

import { ISong } from '@/api/api'
import SongItem from '@/components/SongItem'
import { getSong, setPlayer, setPlayList, setPlayListIndex } from '@/redux/actions';
import { IStoreState } from '@/redux/store';
import { CancelToken } from 'axios';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

interface IProps extends IStoreProps, IDispatchProps {
  songs: ISong[];
}

class SongList extends React.PureComponent<IProps> {
  // NOTE: 重复逻辑，使用hooks api可以较好解决。暂时这样写
  public playMusic = (song: ISong, index: number) => {
    const { onGetSong, songHash, onSetPlayer, pause, songs } = this.props;
    if (song.hash === songHash) {
      // 如果是点击当前正在播放的歌曲，则暂停或者播放歌曲
      onSetPlayer(!pause);
    } else {
      onGetSong(song.hash);
      this.setSongList(index, songs);
    }
  }

  public setSongList = (index: number, songs: ISong[]) => {
    const { playList, onSetPlayList, onSetPlayListIndex } = this.props;
    onSetPlayListIndex(index);
    if (playList !== songs) {
      onSetPlayList(songs);
    }
  }

  public render() {
    const { songs } = this.props;

    return (
      <div>
        {
          songs.map((song,index) => (
            <SongItem title={song.filename} key={index + song.hash} onClick={this.playMusic.bind(this, song, index)}/>
          ))
        }
      </div>
    )
  }
}

// NOTE: 定义map接口不如使用ReturnType
interface IStoreProps {
  songHash: string | undefined;
  pause: boolean | undefined;
  playList: ISong[] | undefined;
}

const mapStateToProps = (state: IStoreState): IStoreProps => {
  const { audio: { songHash }, player: { pause }, playList: { playList } } = state;
  return {
    songHash,
    pause,
    playList
  }
};

interface IDispatchProps {
  onGetSong: (songHash: string, token?: CancelToken) => void;
  onSetPlayList: (songs: ISong[]) => void;
  onSetPlayListIndex: (index: number) => void;
  onSetPlayer: (pause: boolean) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>): IDispatchProps => {
  return {
    onGetSong(songHash: string, token?: CancelToken) {
      dispatch(getSong(songHash, token));
    },
    onSetPlayList(songs: ISong[]) {
      dispatch(setPlayList(songs));
    },
    onSetPlayListIndex(index: number) {
      dispatch(setPlayListIndex(index));
    },
    onSetPlayer(pause: boolean) {
      dispatch(setPlayer({ pause }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);

// export default SongList
