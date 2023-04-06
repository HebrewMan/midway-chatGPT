import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1680750544738_5640',
  koa: {
    port: 7001,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   database: 'test',
  //   username: 'root',
  //   password: 'password',
  // };
} as MidwayConfig;
