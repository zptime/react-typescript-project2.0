/*
 * type常量
 * 创建这个应用将要响应的消息类型
 * const/type模式允许我们以容易访问和重构的方式使用TypeScript的字符串字面量类型。
 */
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

/*************** header相关操作 ***************/
export const SET_HEADER = 'SET_HEADER';
export type SET_HEADER = typeof SET_HEADER;

/*************** audio 相关操作 ***************/
export const SET_AUDIO = 'SET_AUDIO';
export type SET_AUDIO = typeof SET_AUDIO;

/*************** player 相关操作 ***************/
export const SET_PLAYER = 'SET_PLAYER';
export type SET_PLAYER = typeof SET_PLAYER;

/*************** playlist 相关操作 ***************/
// 设置播放列表
export const SET_PLAY_LIST = 'SET_PLAY_LIST';
export type SET_PLAY_LIST = typeof SET_PLAY_LIST;
// 设置播放歌曲
export const SET_PLAY_INDEX = 'SET_PLAY_INDEX';
export type SET_PLAY_INDEX = typeof SET_PLAY_INDEX;
