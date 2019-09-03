/*
 * 歌手列表
 */
import * as React from 'react'

import Api from '@/api'
import { ISinger } from '@/api/api'
import CardItem from '@/components/CardItem'
import { Link, RouteComponentProps } from 'react-router-dom'

import { HeaderAction, setHeader } from '@/redux/actions'
import { IHeaderState } from '@/redux/reducers/header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './singerList.scss';

interface IRouteParams {
  singerType: string
}

interface IProps extends RouteComponentProps<IRouteParams>, ReturnType<typeof mapDispatchToProps>{
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
    const { setSingerHeader, location: { state: { title }}, match: { params: { singerType } }} = this.props
    setSingerHeader({
      isShow: true,
      title,
      bg: 'rgb(44, 162, 249)'
    });

    const { data: { singers: { list: { info }}}} = await Api.getSingerList({singerType})
    this.setState({ singers: info })
  }

  public render() {
    return(
      <div className="page">
        <div className="singer-list">
          {
            this.state.singers.map( (singer) => (
              <Link key={singer.singerid} to={
                {
                  pathname: `/singer/info/${singer.singerid}`,
                  state: { title: singer.singername }
                }
              }>
                <CardItem key={singer.singerid} name={singer.singername} imgUrl={singer.imgurl.replace('{size}', '400')}/>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch: Dispatch<HeaderAction>) {
  return {
    setSingerHeader(payload: IHeaderState) {
      dispatch(setHeader(payload));
    }
  }
}

// export default SingerList
export default connect(null, mapDispatchToProps)(SingerList);
