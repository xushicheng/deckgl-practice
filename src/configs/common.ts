/**
 * mapbox 的默认配置
 * */

//
export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaGFucWl1IiwiYSI6ImNrZ2pjdmNsZTBveXkycW8zYjA4N3U0Ym8ifQ.SjP7d69NztifBh1z23BesQ';
export const MAPBOX_STYLE = 'mapbox://styles/hanqiu/cl00rltjt001g15n2a1ofmyid';

/**
 * 定制化需求, 是否只显示茶山刘???
 * */
export const ONLY_CHASHANLIU = false; // TODO 可能后面改为开启范围过滤器
export const MASK_UNSCOPED = false; // TODO 开启蒙板层（比如非茶山刘的地方全部蒙上毛玻璃）
