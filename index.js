/*

REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!
REMEMBER TO DELETE YOUR LOGIN CREDENTIALS BEFORE GIT PUSHING!!!!!!

*/
const {Builder, By, Key, until} = require('selenium-webdriver');

let username = "";
let password = "";

let driver = new Builder().forBrowser('chrome').build();

const startBrower = async () => {
  await driver.get('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await driver.sleep(3000);
  let inputForUsername = await driver.findElement(By.name('username'))
  let inputForPassword = await driver.findElement(By.name('password'))
  let result = await loginToAccount(inputForUsername, inputForPassword);
  console.log(result);

};
startBrower();

const loginToAccount = (inputForUsername, inputForPassword) => {
  inputForUsername.sendKeys(username);
  inputForPassword.sendKeys(password, Key.RETURN)
}
