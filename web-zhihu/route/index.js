
var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    path = 'template/' + path
    fs.readFile(path, options, function(err, data){
        // console.log(`读取的html文件 ${path} 内容是`, data)
        // 替换参数
        response.send(data)
    })
}

// 主页
var index = {
  path: '/',
  method: 'get',
  func: function (request, response) {
    var path = 'index.html'
    sendHtml(path, response)
  }
}

// 问题
var question = {
    path: '/question',
    method: 'get',
    func: function (request, response) {
        var path = 'question.html'
        sendHtml(path, response)
    }
}
// 点赞


// 踩


// 评论


// 分享


// 收藏


// 感谢




var routes = [
    index,
    question,
]

module.exports.routes = routes
