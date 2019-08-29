// 新歌--轮播组件
import * as React from 'react'

import { IBanner } from '@/api/api'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

interface IProps{
  banners: IBanner[]
}

class Swiper extends React.Component<IProps> {
  public render() {
    const { banners } = this.props

    return (
      <AutoPlaySwipeableViews interval={3000}>
        {
          banners.map((banner) => (
            <div key={banner.id}>
              <a href={banner.extra.tourl}>
                <img src={banner.imgurl} alt={banner.title}/>
              </a>
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
    )
  }
}

export default Swiper
