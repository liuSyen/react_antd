### 本项目使用react+axios+antd开发的共享单车的后台管理系统

##### 一，暴露配置文件进行less和主题色的配置

```javascript
npm run eject

npm i babel-plugin-import // 按需加载antd的组件

npm i less less-loader // antd使用的是less开发，修改主题色要保证项目中使用less
```

要保证less和less-loader的版本否则是要报错的：

```json
   "less": "2.7.3",
   "less-loader": "^4.1.0",
```

然后配置 `webpack.config.js` 大概在455行左右添加

```js
 {
   test: /\.less$/,
     use: [{
       loader: "style-loader" 
     }, {
       loader: "css-loader" 
     }, {
       loader: "less-loader",
       options: {
         sourceMap: false,
         modifyVars: {
           '@primary-color': '#f9c700',　　//修改antd主题色
         },
         javascriptEnabled: true,
       }
     }]
 },
```

到此为止：按需加载antd和修改主题色的配置完成

##### 二，使用react最新的路由4.0

```js
npm i react-router-dom
```

