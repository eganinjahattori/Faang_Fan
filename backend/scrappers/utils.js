const puppeteer = require('puppeteer')
const { logToConsole } = require('../utils/Logging')

const scrap = async (url, selector) => {
  // launch the browser, open the page, visit the url, and scrap the query selector
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  var data = []
  var temp
  var obj = {}

  if (Array.isArray(selector) == true) {
    for (const select of selector) {
      obj = {}
      for (const item of select) {
        temp = await page.evaluate(item => {
          return document.querySelector(item.selector).textContent
        }, item)
        obj[item.type] = temp
      }
      data.push(obj)
    }
  } else {
    data = await page.evaluate(selector => {
      return document.querySelector(selector).textContent
    }, selector)
    data.push(temp)
  }

  logToConsole(`Scrapped data for URL =  ${url}`, data)

  await browser.close()
  return data
}

const clickButton = () => {}

const loopThrough = () => {}

module.exports = { scrap }
