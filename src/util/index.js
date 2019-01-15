export default {
  coinNameList: ['', 'USDT', 'BTC', 'ETH', 'TTF', 'SEXC', 'XMX', 'PARK', 'AOK'],

  DOMAIN: (() => {
    const DEV_DOMAIN = '//apimanage.58corp.com/';
    const ONLINE_DOMAIN = '/';
    console.log(process.env.NODE_ENV);
    const Domain =
      process.env.NODE_ENV == 'production' ? ONLINE_DOMAIN : DEV_DOMAIN;
    return Domain;
  })(),

  // 判断是否未到指定日期
  compareDate: dateString => {
    let currTime = new Date().getTime(); // 当前时间戳
    let dateTime = new Date(dateString.replace(/-/g, '/')).setHours(0, 0, 0, 0); // 指定日期0点时间戳
    // 当前时间戳小于指定时间0点，说明未到指定日期
    if (currTime < dateTime) {
      return true;
    }
    return false;
  }
};
