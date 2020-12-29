#### 技术点一：
- 我想让React应用支出sass
- 需要node-sass，但是他有两个缺点：下载速度慢，本地编译慢
- 于是我想用dart-sass代替node-sass
- 但是React只支持node-sass不支持dart-sass
- 我就发现npm6.9支持一个新功能，叫做package alias
- npm install node-sass@npm:dart-sass  偷偷地换掉
- 完成