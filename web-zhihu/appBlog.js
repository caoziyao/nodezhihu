// 引入 express 并且创建一个 express 实例赋值给 app
// 使用下面的命令来安装 express
// yarn add express
var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

// 配置静态文件目录
app.use(express.static('static'))


// 注册路由
const registerRoutes = function(app, routes) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        // 下面这段是重点
        app[route.method](route.path, route.func)
    }
}


// 导入 route/index.js 的所有路由数据
const routeIndex = require('./route/index')
registerRoutes(app, routeIndex.routes)


// listen 函数的第一个参数是我们要监听的端口
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
