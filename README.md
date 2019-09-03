## V1.2 仿酷狗音乐实例实现
参考demo：

(1) https://github.com/maoyeyang/react-kugou

(2) https://github.com/aasailan/react-kugou-demo

## 20190827 周二
(1) redux代码重构：redux相关代码移入redux文件夹

(2) sass添加(webpack.config.dev.js)：
https://juejin.im/post/5b5d5c5bf265da0f8e19f99b

(3) React项目使用vw适配移动端(webpack.config.dev.js)：
https://juejin.im/post/5ad56aad51882532ce65affa<br>
http://dmmylove.cn/articles/40

(4) components/Header组件实现

(5) @material-ui/core/Tabs和react-router-dom路由结合使用：
https://codesandbox.io/s/l4yo482pll

## 20190828 周三
(1) components/Swiper轮播组件实现

(2) components/SongList、SongItem 新歌列表组件实现

(3) 接口配置(src/api)，代理配置(scripts/start.js)

(4) 并列定义className,参考SongItem组件

## 20190829 周四
(1) page/Tab/Rank 排行列表页

(2) page/Tab/SongList 歌单列表页

(3) page/Tab/Singer 歌手分类列表页

(4) page/SingerList 歌手列表页

## 20190830 周五
(1) page/SingerInfo 歌手信息页面
参考网址：https://my.oschina.net/qiaotoubao/blog/3066608

功能：获取路由参数
import { RouteComponentProps } from "react-router-dom"

interface IRouteParams {
  singerId: string; // 此处必须定义
}

// type Props = RouteComponentProps<{id: string}>;<br>
// 我们需要获取有关当前路径的信息，所以将Props声明为RouteComponentProps的一个“特例”，类型参数{id: string}表明我们希望从路径中取得一个名叫id类型为string的参数。要指出的是，当我们像这样写定一个组件的props的类型为一种RouteComponentProps时，一般来说，这个组件就只能用在Route匹配规则里面了。
interface IProps extends RouteComponentProps<IRouteParams> {
  singerInfo: ISingerInfo
}

const { match: { params: { singerId } }} = this.props

this.props.match.params.singerId

(2) page/RankInfo 排行信息页

(3) page/SongListInfo 歌单信息页

## 20190902 周一
(1) redux相关文件改造

(2) utils/asyncComponent.tsx 异步组件
http://www.wukai.me/2017/09/25/react-router-v4-code-splitting/

(3) components/HeaderBar组件更新，mapStateToProps实现
