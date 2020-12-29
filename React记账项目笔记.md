#### 技术点一：
- 我想让React应用支出sass
- 需要node-sass，但是他有两个缺点：下载速度慢，本地编译慢
- 于是我想用dart-sass代替node-sass
- 但是React只支持node-sass不支持dart-sass
- 我就发现npm6.9支持一个新功能，叫做package alias
- npm install node-sass@npm:dart-sass  偷偷地换掉
- 完成

#### 技术点二：
- 使用@import-normalize;引入normalize.css
- 使用dart-sass编译SCSS文件至CSS
- 直接 import "xxx" 以引用src/xxx
- 将变量和函数放入src/helper.scss
- 使用styled-components 这种CSS-in-JS 方案
- 在编辑器里安装插件以流畅书写CSS
- TS方面：配置tsconfig.json 后使用import'xxx' 以引用src/xxx