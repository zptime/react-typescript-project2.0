/*
 * 搜索页面
 */
import Api from '@/api';
import { IHotSearch, ISong } from '@/api/api';
import SongItem from '@/components/SongItem';
import SongList from '@/components/SongList';
import Button from '@material-ui/core/Button';
import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';
import './search.scss';

interface IData {
  hotSearch: IHotSearch[];
  searchList: ISong[];
}

interface IState extends IData {
  searchText: string;
  totalResult: number;
  showSearch: boolean;
}

class Search extends React.PureComponent<object, IState> {
  public state: IState = {
    searchText: '',
    totalResult: 0,
    showSearch: false,
    hotSearch: [],
    searchList: []
  };

  public componentDidMount() {
    this.setData();
  }

  public async setData() {
      const { data: { data: { info }}} = await Api.getHotSearch();
      this.setState({ hotSearch: info })
  }

  // TODO: 搜索的时候添加loading，loading涉及到传送门
  public searchSong = async () => {
    const { searchText } = this.state;
    if (searchText === '') {
      return
    };
      const { data: { data: { info, total }}} = await Api.searchSong(searchText);
      this.setState({ searchList: info })
      this.setState({
        totalResult: total,
        showSearch: true
      });
  }

  public clickHotSearch = (item: IHotSearch) => {
    this.setState({
      searchText: item.keyword
    });
  }

  public changeSearchText: ChangeEventHandler = (event) => {
    const input = event.target as HTMLInputElement;
    this.setState({
      searchText: input.value
    });
  }

  // 判断点击的键盘的keyCode是否为13，是就调用上面的搜索函数
  public handleEnterKey: KeyboardEventHandler = (e) => {
    // e.nativeEvent获取原生的事件对像   e.nativeEvent.keyCode
    if(e.nativeEvent.keyCode === 13 || e.key === 'Enter'){
      this.searchSong()
    }
  }

  public playMusic = (item: ISong) => {
    console.log(item);
  }

  public render() {
    const { showSearch, totalResult, searchText, searchList, hotSearch } = this.state;

    return (
      <div>
        <div className="search-box">
          <div className="search-box__bg">
            <Button size="small" className="search-box__btn" variant="contained" color="primary" onClick={this.searchSong}>搜索</Button>
            <div className="search-box__input-wrapper">
              <span className="search-box__icon"/>
              <input className="search-box__input" value={searchText} onChange={this.changeSearchText} onKeyPress={this.handleEnterKey} />
            </div>
          </div>
        </div>
        {
          showSearch ? <div className="search-count">{`共有${totalResult}条搜索结果`}</div> :
            <div className="search-title">最近热门</div>
        }
        {
          showSearch ?
            <SongList songs={searchList}/> :
            hotSearch.map((item, index) => (
              <SongItem title={item.keyword} key={index + item.keyword} showDownload={false} onClick={this.clickHotSearch.bind(this, item)}/>
            ))
        }
      </div>
    );
  }
}

export default Search;
