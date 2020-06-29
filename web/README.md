### 主要功能:
智能晾衣架系统自动根据衣服的湿度智能晾衣服，衣服晾干了，晾衣架会自动收起;同时会根据环境进行
智能判断收衣服或者晾衣服;当空气环境适宜且衣服没有晾干的情况下，会自动伸出晾衣架晾衣服，如果
判断到环境不适宜晾衣服，则收起晾衣架，同时会根据衣服的湿度，判断是否需要开强光烘干衣服。可以
在web端进行环境监控，显示传感器的数据，显示晾衣架的状态，同时可以通过按键点击控制晾衣架的伸
缩
### 硬件:
使用AT89C51单片机和温度传感器DS18B20、湿度传感器HS1101、气压传感器MPX41 1 5和光敏电阻
获取空气信息和衣服湿度，LE灯光等，LCD1 602显示空气的温度与湿度
软件:
### web端作为.上位机，后端使用node.js,前端使用Vue.js
后端:
+ 使用node.js,使用express框架构建http服务，使用child-process控制python文件的执行(进行串口通
讯)，使用mysq|模块操作数据库，使用body-parser接受前端通过post方式提交过来的数据(本项目的主
要作用是登录验证)
前端:
+ 主要使用Vue.js,使用Element-Ul进行页面布局，使用vue-resource与后端进行数据交互(获取数据库中各
个传感器的数据、登录验证提交、请求更新数据库，通过child-process执行python文件 ，读取传感器信
息)，使用vue-router进行前端路由设置，为每一个组件添加路 由，使用webpack进行打包，其中使用到c
ss-loader、style-loader. vue-loader、 file-loader配置 了html-webpack-plugin,指定输入文件main.j
s,输出文件bundle.js,同时在package.json文件配置了webpack-dev-server命令，指定默认的端口、文
件、--hot、--open等
