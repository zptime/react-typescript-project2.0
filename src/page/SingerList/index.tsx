/*
 * 歌手列表
 */
import * as React from 'react'

import Api from '@/api'
import { ISinger } from '@/api/api'
import CardItem from '@/components/CardItem'
import { Link } from 'react-router-dom'

interface IProps{
  singers: ISinger[]
}

interface IState{
  singers: ISinger[]
}

class SingerList extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      singers: []
    }
  }

  public async componentDidMount(){
    const { data: { singers: { list: { info }}}} = await Api.getSingerList({singerType: '88'})
    this.setState({ singers: info })
  }

  public render() {
    return(
      <div>
        {
          this.state.singers.map( (singer) => (
            <Link key={singer.singerid} to={`/singer/info/${singer.singerid}`}>
              <CardItem name={singer.singername} imgUrl={singer.imgurl.replace('{size}', '400')}/>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default SingerList
