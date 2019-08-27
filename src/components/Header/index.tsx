import * as React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends React.Component {
  public render() {
    return (
      <div className="header">
        <Link to="/">
          <img className="header_logo" src="http://m.kugou.com/v3/static/images/index/logo.png"/>
        </Link>
        <Link to="/tab/search">
          <img className="header_search" src="http://m.kugou.com/v3/static/images/index/search.png"/>
        </Link>
      </div>
    );
  }
}

export default Header
