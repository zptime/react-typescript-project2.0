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

功能：获取路由参数<br>
import { RouteComponentProps } from "react-router-dom"
interface IRouteParams {
  singerId: string; // 此处必须定义
}
interface IProps extends RouteComponentProps<IRouteParams> {
  singerInfo: ISingerInfo
}
const { match: { params: { singerId } }} = this.props
this.props.match.params.singerId
