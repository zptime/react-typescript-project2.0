import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// import asyncComponent from '@/utils/asyncComponent';

export interface IRoute extends RouteProps {
  name?: string;
  routes?: IRoute[];
  redirect?: string;
}

// 方式一：直接import。不管匹配到了哪一个 route，我们这里都一次性地引入所有的组件
import RankInfo from '@/page/RankInfo'
import SingerInfo from '@/page/SingerInfo'
import SingerList from '@/page/SingerList'
import SongListInfo from '@/page/SongListInfo'
import NewSong from '@/page/Tab/NewSong'
import Rank from '@/page/Tab/Rank'
import Singer from '@/page/Tab/Singer'
import SongList from '@/page/Tab/SongList'
import RouteTab from '@/page/Tab/Tab'
import SearchPage from '@/page/Tab/Search'

// 方式二：异步组件asyncComponent。即只有在需要的时候才会引入
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

export const searchRoute: IRoute = {
  name: 'Search',
  exact: true,
  path: '/tab/search',
  component: SearchPage
  // component: asyncComponent(() => import('@/page/Tab/Search/Search'), 'SearchPage')
};

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
  {
    // component: asyncComponent(() => import('@/page/Tab/Tab'), 'RouteTab'),
    component: RouteTab,
    path: "/tab",
    routes: [
      newSongRoute,
      rankRoute,
      songListRoute,
      singerRoute,
      searchRoute
    ]
  },
  rankInfoRoute,
  songListInfoRoute,
  singerListRoute,
  singerInfoRoute,
  // 定义重定向默认路由
  {
    path: "/*",
    redirect: '/tab/newsong'
  }
];

export function routeWithSubRoutes(route: IRoute, key: number | null = null, props: any = null) {
  const { path, exact, routes: subRoutes, redirect, component: Component } = route;
  // <Route path={path} component={Component}></Route>
  // 此处必须要在 tsconfig.json 中设置"jsx-no-lambda": false(jsx 中是否允许使用 lambda 语法), 否则报错
  return (
    <Route
      key={key !== null ? key : ''}
      path={path}
      exact={!!exact}
      render={routeProps => (
        Component ? <Component {...routeProps} {...props} routes={subRoutes}/> : redirect ?
          <Redirect from={path as string} to={redirect}/> : null
      )}
    />
  );
};
