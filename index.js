

var webdriver = require('selenium-webdriver'),
  by = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  driver.get('https://www.instagram.com/');
