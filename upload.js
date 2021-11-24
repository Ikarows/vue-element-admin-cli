'use strict'

// 引入scp2
var client = require('scp2')
// 下面三个插件是部署的时候控制台美化所用 可有可无
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora(chalk.green('正在发布到服务器...'))
spinner.start()

const ENV = process.argv.splice(2)[0] // 获取对应环境参数

const serve = {
  dev: { // 本地打包文件的位置
    host: '192.168.2.189', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: 'root', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '/www/wwwroot/gf_intelligence_power/src/auth/public' // 项目部署的服务器目标位置
  },
  pro: { // 本地打包文件的位置
    host: '123.56.97.11', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: 'www', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '/www/wwwroot/online/gongfuke_hr/public' // 项目部署的服务器目标位置
  }
}

client.scp('./dist/', serve[ENV], err => {
  spinner.stop()
  if (!err) {
    console.log(chalk.green(`项目发布${ENV}环境完毕!`))
  } else {
    console.log('err', err)
    console.log(chalk.green('发布失败!'))
  }
})
