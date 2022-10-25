// 引入 mongoose
const mongoose = require('mongoose')

// 引入 mongoose Schema 資料綱要
const Schema = mongoose.Schema

// login 的 schema
const loginSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// 把資料綱要 導出為 mongoose.model
module.exports = mongoose.model('Login', loginSchema)