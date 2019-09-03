import * as React from 'react'

import Api from '@/api'
import { ISongListItem } from '@/api/api'
import CardItem from '@/components/CardItem'
import { Link } from 'react-router-dom'

interface IProps{
  songLists: ISongListItem[]
}

interface IState{
  songLists: ISongListItem[]
}

class SongList extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      songLists: []
    }
  }

  public async componentDidMount() {
    const { data: { plist: { list: { info }} } }  = await Api.getSongs(true)
    this.setState({songLists: info})
  }

  public render() {
    return (
      <div>
        {
          this.state.songLists.map( (item) => (
            <Link key={item.specialid} to={
              {
                pathname: `/plist/info/${item.specialid}`,
                state: { title: item.specialname }
              }
            }>
              <CardItem name={item.specialname} imgUrl={item.imgurl.replace('{size}', '400')} playcount={item.playcount}/>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default SongList
