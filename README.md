# 縮網址器

![Index page about Restaurant List](./public/images/login_page.png)

## 介紹

簡易登入

### 功能

- 輸入帳號密碼
- 提示登入訊息
- 跳轉歡迎頁面

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入:

   ```bash
   cd login_page
   ```
4. 接著輸入'npm run seed'載入種子資料:

   ```bash
   npm run seed
   ```

5. 若看見'mongodb connected'表示伺服器連線成功。
   若看見'done!'表示種子資料載入成功。
   
   ```bash
   mongodb connected!
   done!
   ```

6. 接著輸入'npm run start'執行渲染畫面:

   ```bash
   npm run start
   ```

7. 若看見"Express is running on http://localhost:3000"
   則代表順利運行打開瀏覽器進入到以下網址:

   ```bash
   http://localhost:3000
   ```

8. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 4.0.2
- Bootstrap 5.0.2
- Font-awesome 6.2.0
- body-parser 1.20.1
- mongoose 5.9.7


