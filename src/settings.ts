import { SizeEnum } from "./enums/SizeEnum";
import { LayoutEnum } from "./enums/LayoutEnum";
<<<<<<< HEAD
import { ThemeEnum } from "./enums/ThemeEnum";
=======
import { ThemeEnum, SidebarColorEnum } from "./enums/ThemeEnum";
>>>>>>> upstream/master
import { LanguageEnum } from "./enums/LanguageEnum";

const { pkg } = __APP_INFO__;

// 检查用户的操作系统是否使用深色模式
<<<<<<< HEAD
// const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const defaultSettings: AppSettings = {
  // 系统Title
  // title: pkg.name,
  title: "Deai Admin",
=======
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const defaultSettings: AppSettings = {
  // 系统Title
  title: pkg.name,
>>>>>>> upstream/master
  // 系统版本
  version: pkg.version,
  // 是否显示设置
  showSettings: true,
  // 是否显示标签视图
  tagsView: true,
  // 是否显示侧边栏Logo
<<<<<<< HEAD
  sidebarLogo: false,
  // 布局方式，默认为左侧布局
  layout: LayoutEnum.LEFT,
  // 主题，根据操作系统的色彩方案自动选择
  // theme: mediaQueryList.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
  theme: ThemeEnum.LIGHT,
=======
  sidebarLogo: true,
  // 布局方式，默认为左侧布局
  layout: LayoutEnum.LEFT,
  // 主题，根据操作系统的色彩方案自动选择
  theme: mediaQueryList.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
>>>>>>> upstream/master
  // 组件大小 default | medium | small | large
  size: SizeEnum.DEFAULT,
  // 语言
  language: LanguageEnum.ZH_CN,
  // 主题颜色
  themeColor: "#4080FF",
  // 是否开启水印
  watermarkEnabled: false,
  // 水印内容
  watermarkContent: pkg.name,
<<<<<<< HEAD
=======
  // 侧边栏配色方案
  sidebarColorScheme: SidebarColorEnum.CLASSIC_BLUE,
>>>>>>> upstream/master
};

export default defaultSettings;
