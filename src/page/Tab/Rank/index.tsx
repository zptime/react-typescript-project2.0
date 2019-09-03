import * as React from 'react'

import Api from '@/api'
import { IRank } from '@/api/api'
import CardItem from '@/components/CardItem'
import { Link } from 'react-router-dom'

interface IProps {
  ranks: IRank[]
}

class Rank extends React.Component<IProps, IProps> {
  constructor(props: IProps){
    super(props)
    this.state = {
      ranks: []
    }
  }

  public async componentDidMount(){
    const { data: { rank: { list }} } = await Api.getRanks(true)
    this.setState({ranks: list})
  }
  public render() {
    return (
      <div>
        {
          this.state.ranks.map( (rank) => (
            <Link key={rank.id} to={
              {
                pathname: `/rank/info/${rank.rankid}`,
                state: { title: rank.rankname }
              }
            }>
              <CardItem name={rank.rankname} imgUrl={rank.imgurl.replace('{size}', '400')} />
            </Link>
          ))
        }
      </div>
    );
  }
}

export default Rank
