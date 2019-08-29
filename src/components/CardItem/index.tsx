/*
 * 卡片列表Item组件：包括排行Item和歌单Item
 */
import morePng from '@/assets/imgs/arrow_icon.png'
import musicPng from '@/assets/imgs/icon_music.png'
import * as React from 'react'
import './cardItem.scss'


interface IProps{
  name: string
  imgUrl: string
  playcount?: number
}

class CardItem extends React.Component<IProps> {
  public render() {
    const { name, imgUrl, playcount } = this.props

    return (
      <div className="card-item">
        <img src={imgUrl} className="card-item__img"/>
        <img src={morePng} className="card-item__more-icon"/>
        <div className="card-item__content">
          <div className="one-line-ellipsis card-item__title">{name}</div>
          {
            playcount ? (
              <div className="card-item__play_count">
                <img className="card-item__play_count_img" src={musicPng}/>{playcount}
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default CardItem
