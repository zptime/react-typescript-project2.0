import arrowIconPng from '@/assets/imgs/arrow_icon.png'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './singer.scss'

const list = [
  [{ txt: '热门歌手', id: 88 }],
  [{ txt: '华语男歌手', id: 1 }, { txt: '华语女歌手', id: 2 }, { txt: '华语组合', id: 3 }],
  [{ txt: '日韩男歌手', id: 4 }, { txt: '日韩女歌手', id: 5 }, { txt: '日韩组合', id: 6 }],
  [{ txt: '欧美男歌手', id: 7 }, { txt: '欧美女歌手', id: 8 }, { txt: '欧美组合', id: 9 }],
];

class Singer extends React.Component {
  public render() {
    return (
      <div>
        {
          list.map( (itemArr, index) => {
            return (
              <div key={index} className="group">
                {
                  itemArr.map( (item) => (
                    <Link key={item.id} to={`/singer/list/${item.id}`}>
                      <div className="group-item">
                        {item.txt}
                        <img src={arrowIconPng} className="group-item__right-icon"/>
                      </div>
                    </Link>
                  ))
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Singer;
