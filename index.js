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
const _ = require('lodash');

let username = "";
let password = "";
let intervalArray = _.range(28000, 3600)

// Function for range without lodash
// let range = (s, e) => Array.from('x'.repeat(e - s), (_, i) => s + i);

// Sets a time limit on likes between 28-36 seconds
// This is set in milliseconds

// Instagram sets a daily like limit at 1000 for accounts older than 20 days.
const LIKE_LIMIT = 1000;
var picsLiked = 0;

let driver = new Builder().forBrowser('chrome').build();

const startBrowser = async () => {
  await driver.get('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await driver.sleep(3000);
  let inputForUsername = await driver.findElement(By.name('username'))
  let inputForPassword = await driver.findElement(By.name('password'))
  let result = await loginToAccount(inputForUsername, inputForPassword);
  console.log(result);

};
startBrowser();

const loginToAccount = (inputForUsername, inputForPassword) => {
  inputForUsername.sendKeys(username);
  inputForPassword.sendKeys(password, Key.RETURN)
}

const likeLoop = () => {
  driver.sleep(_.sample(intervalArray));
}
