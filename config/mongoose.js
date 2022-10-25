
const mongoose = require('mongoose')

// 環境變數設定 判斷是不是本機  *** 優先
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// 伺服器連線設定 *** 後連線
mongoose.connect(process.env.MONGODB_URI_L, { useNewUrlParser: true, useUnifiedTopology: true })

//伺服器連線狀況
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db


