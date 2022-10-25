// 引入 express 框架
const express = require('express')
const app = express()
const port = 3000

// 引路路由 ***
const routes = require('./routes')


// 引入 mongoose
require('./config/mongoose')

// 任何請求 都優先使用這個路由 ***
app.use(routes)




app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})