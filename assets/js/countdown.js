// countdown.js

// 设置目标日期（11月20日）
const targetDate = new Date('2023-11-20T00:00:00').getTime();

// 更新倒计时
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  // 计算剩余的天、小时、分钟和秒
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // 更新页面上的倒计时
  document.getElementById('countdown').innerHTML = `距离中容二大召开还有${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

  // 每秒更新一次
  setTimeout(updateCountdown, 1000);
}

// 初始调用
updateCountdown();
