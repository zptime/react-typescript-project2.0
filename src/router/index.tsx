import React from "react";
import { Route, RouteProps } from "react-router-dom";

// import asyncComponent from '@/utils/asyncComponent';

export interface IRoute extends RouteProps {
  name?: string;
  routes?: IRoute[];
  redirect?: string;
}

import RankInfo from '@/page/RankInfo'
import SingerInfo from '@/page/SingerInfo'
import SingerList from '@/page/SingerList'
import SongListInfo from '@/page/SongListInfo'
import NewSong from '@/page/Tab/NewSong'
import Rank from '@/page/Tab/Rank'
import Singer from '@/page/Tab/Singer'
import SongList from '@/page/Tab/SongList'


export const newSongRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/Tab/NewSong'), 'NewSongPage'),
  component: NewSong,
  exact: true,
  name: 'NewSong',
  path: '/tab/newsong',
};

export const rankRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/Tab/Rank'), 'RankPage'),
  component: Rank,
  exact: true,
  name: 'Rank',
  path: '/tab/rank',
};

export const songListRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/Tab/SongList'), 'SongListPage'),
  component: SongList,
  exact: true,
  name: 'SongList',
  path: '/tab/songlist',
};

export const singerRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/Tab/Singer'), 'Singer'),
  component: Singer,
  exact: true,
  name: 'Singer',
  path: '/tab/singer',
};

// export const searchRoute: IRoute = {
//   name: 'Search',
//   exact: true,
//   path: '/tab/search',
//   component: asyncComponent(() => import('@/page/Tab/Search/Search'), 'SearchPage')
// };

export const rankInfoRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/RankInfo/RankInfo'), 'RankInfoPage'),
  component: RankInfo,
  exact: true,
  name: 'RankInfo',
  path: '/rank/info/:id',
};

export const songListInfoRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/SongListInfo/SongListInfo'), 'SongListInfoPage'),
  component: SongListInfo,
  exact: true,
  name: 'SongListInfo',
  // NOTE: 如何将path内的参数定义与组件内的RouteParams接口定义结合起来
  path: '/plist/info/:id',
};

export const singerListRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/SingerList'), 'SingerListPage'),
  component: SingerList,
  exact: true, // exact 为true表示精确匹配路由，否则模糊匹配
  name: 'SingerList',
  path: '/singer/list/:typeId',
};

export const singerInfoRoute: IRoute = {
  // component: asyncComponent(() => import('@/page/SingerInfo'), 'SingerInfoPage'),
  component: SingerInfo,
  exact: true,
  name: 'SingerInfo',
  path: '/singer/info/:singerId',
};

export const routes: IRoute[] = [
  // {
  //   // component: asyncComponent(() => import('@/page/Tab/Tab'), 'RouteTab'),
  //   path: "/tab",
  //   routes: [
  //     newSongRoute,
  //     rankRoute,
  //     songListRoute,
  //     singerRoute,
  //     // searchRoute
  //   ]
  // },
  newSongRoute,
  rankRoute,
  songListRoute,
  singerRoute,
  rankInfoRoute,
  songListInfoRoute,
  singerListRoute,
  singerInfoRoute,
  // 定义重定向默认路由
  // {
  //   path: "/*",
  //   redirect: '/tab/newsong'
  // }
];

export function routeWithSubRoutes(route: IRoute, key: number | null = null, props: any = null) {
  // const { path, exact, routes: subRoutes, redirect, component: Component } = route;
  const { path, exact, component } = route;
  return (
    // <Route exact path="/products" render={MyProductPage} />
    // <Route path="/tab/newsong" component={NewSong} />
    <Route
      key={key !== null ? key : ''}
      path={path}
      exact={!!exact}
      // render={(routeProps) => (
      //   Component ? (
      //   <Component {...routeProps} {...props} routes={subRoutes}/>
      //   ) : (redirect ? (
      //   <Redirect from={path as string} to={redirect}/>
      //   ) : null)
      // )}
      component={component}
    />
  );
};
