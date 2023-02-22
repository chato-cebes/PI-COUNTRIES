//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { saveApiData } = require('./src/controllers/apiData/apiData.js')
const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {
  //await saveApiData();
  console.log("Connection has been established successfully.");
  server.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`); // eslint-disable-line no-console
  });
}) .catch((error) => {
  return ({error : error.message})
})
