
// 引入 資料綱要
const Login = require('../login')

// 引入 種子資料
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// 伺服器連線
const db = require('../../config/mongoose')

// 導入伺服器
db.once('open', () => {
  console.log('mongodb connected!')
  Login.insertMany(users)
  .then(console.log('done!'))
})