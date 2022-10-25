// 引入 express 框架
const express = require('express')
const app = express()
const port = 3000

// 引路路由 ***
const routes = require('./routes')
// 引入樣板
const exphbs = require('express-handlebars')


// 引入 mongoose
require('./config/mongoose')

// 任何請求 都優先使用這個路由 ***
app.use(routes)

// 指定handlebars樣板引擎,  exphbs 裡面的預設樣板 為 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// view 引擎啟用 為 handlebars
app.set('view engine', 'handlebars')


// 路由監聽
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})