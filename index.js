
const {Builder, By, Key, until} = require('selenium-webdriver');

let username = "username";
let password = "password";
let driver = new Builder().forBrowser('chrome').build();

const startBrower = async () => {
  await driver.get('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await driver.sleep(1000);
  // let inputForUsername = await driver.findElement(By.name('username'))
  // let inputForPassword = await driver.findElement(By.name('password'))
  // let result = await loginToAccount(inputForUsername, inputForPassword);
  console.log();

};
startBrower();

const loginToAccount = (username, password) => {
  username.sendKeys(username);
  password.sendKeys(password, Key.RETURN)
}
