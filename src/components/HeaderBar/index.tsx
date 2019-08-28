import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { Link } from "react-router-dom";
import './headerBar.scss';

export default function HeaderBar() {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className="header-bar">
      <Tabs
        variant="fullWidth"
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="新歌" component={Link} to="/tab/newsong"/>
        <Tab label="排行" component={Link} to="/tab/rank"/>
        <Tab label="歌单" component={Link} to="/tab/songlist"/>
        <Tab label="歌手" component={Link} to="/tab/singer"/>
      </Tabs>
    </div>
  )
}

