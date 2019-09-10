/*
 * 播放组件
 */
import { AudioAction, PlayerAction, nextSong, setAudio, setPlayer } from '@/redux/actions';
import { IAudioState } from '@/redux/reducers/audio';
import { IPlayerState } from '@/redux/reducers/player';
import { IStoreState } from '@/redux/store';
import Axios, { CancelToken } from 'axios';
// import getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { MouseEventHandler, ReactEventHandler, RefObject } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import './player.scss';

// const cssPrefix = 'player__';
// const styleModuleImportMap = {
//   // NOTE: scss的默认编译导出就是locals
//   locals: {
//     'player__toggle-icon': `${cssPrefix}player__toggle-icon`,
//     'player__toggle-icon--loading': `${cssPrefix}player__toggle-icon--loading`,
//     'player__toggle-icon--open': `${cssPrefix}player__toggle-icon--open`,
//     'player__toggle-icon--close': `${cssPrefix}player__toggle-icon--close`
//   }
// };

interface IProps extends ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps> {}

interface IState {
  open: boolean;
  // NOTE: 之后从redux获取
  // loading: boolean;
  // 是否暂停
  // pause: boolean;
}

class Player extends React.PureComponent<IProps, IState> {

  public state: IState = {
    open: true
  }

  public timer: number | null = null;

  public audioRef: RefObject<HTMLAudioElement> = React.createRef();

  public source = Axios.CancelToken.source();

  public toggleClass() {
    const { player: { loading } } = this.props;
    const { open } = this.state;

    let classNames = 'player__toggle-icon';
    if (loading) {
      classNames += ' player__toggle-icon--loading';
    } else {
      if (open) {
        classNames += ' player__toggle-icon--open';
      } else {
        classNames += ' player__toggle-icon--close';
      }
    }
    return classNames;
  }

  public toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  public togglePlay: MouseEventHandler = (event) => {
    event.stopPropagation();
    const { onSetPlayer, player: { pause } } = this.props;
    onSetPlayer({
      pause: !pause
    });
  }

  // NOTE: 如何在pause变化的时候得出响应，处理业务
  // 有空了解下 redux-observable
  public componentDidUpdate() {
    const { player: { pause }, audio: { songUrl } } = this.props;
    const audio: HTMLAudioElement | null = this.audioRef.current;
    // 判断songUrl确定有正在播放的歌曲
    if (audio && songUrl) {
      if (pause) {
        if(audio.play) {
          audio.pause();
        }
      } else {
        if(audio.pause) {
          audio.play();
        }
      }
    }
  }

  public showDetailPlayer: MouseEventHandler = () => {
    const { onSetPlayer, audio: { songUrl } } = this.props;
    if (!songUrl) {
      return;
    }
    onSetPlayer({
      showDetailPlayer: true
    });
  }

  public nextSong: ReactEventHandler = (event) => {
    event.stopPropagation();
    const { onNextSong, player: { loading } } = this.props;
    if (loading && this.source) {
      // 如果正在加载，则取消加载请求
      this.source.cancel('next song');
      this.source = Axios.CancelToken.source();
    }
    onNextSong(this.source.token);
  }

  // TODO: 如果被拖拽后需要调整播放拖拽后的进度
  public timeUpdate: ReactEventHandler = (event) => {
    // console.log(event);
    const audio = event.currentTarget as HTMLAudioElement;
    if (!this.timer) {
      this.timer = requestAnimationFrame(() => {
        const { currentTime } = audio;
        const { onSetAudio, audio: { changeProgress, currentLength } } = this.props;
        if (changeProgress) {
          // 被拖动了进度条
          onSetAudio({
            changeProgress: false
          });
          audio.currentTime = currentLength as number;
        } else {
          console.log(currentTime);
          onSetAudio({
            currentLength: currentTime
          });
        }
        this.timer = null;
      });
    }
  }

  public render() {
    const { open } = this.state;
    const { player: { pause }, audio: { imgUrl, title, singer, songUrl } } = this.props;

    return (
      <div className={ open ? 'player player--open' : 'player player--close'}>
        {/* NOTE: 在runtime的时候决定css https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution */}
        {/* <div onClick={this.toggleOpen} className={getClassName(this.toggleClass(), styleModuleImportMap)}/> */}
        <div className="player__box" onClick={this.showDetailPlayer}>
          <img className="player__box-img" src={imgUrl}/>
          <span className="player__box-next" onClick={this.nextSong}/>
          <span className={!pause ? 'player__box-pause' : 'player__box-play'} onClick={this.togglePlay}/>
          <div className="player__box-info">
            <p className="player__box-info-title one-line-ellipsis">{title}</p>
            <p className="player__box-info-singer one-line-ellipsis">{singer}</p>
          </div>
        </div>
        <audio ref={this.audioRef} id='player__audio' src={songUrl} autoPlay={true} onTimeUpdate={this.timeUpdate}
          onEnded={this.nextSong} onError={this.nextSong}/>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  const { player, audio } = state;
  return {
    player,
    audio
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<IStoreState, null, PlayerAction | AudioAction>) {
  return {
    onSetPlayer(payload: IPlayerState) {
      dispatch(setPlayer(payload));
    },
    onSetAudio(payload: IAudioState) {
      dispatch(setAudio(payload));
    },
    onNextSong(token: CancelToken) {
      dispatch(nextSong(token));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
