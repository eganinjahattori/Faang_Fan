const { selectorData } = require('../selectorData')
const { scrap } = require('../utils')
const { ResponseHandler } = require('../../utils/RequestResponseHandler')

module.exports.handler = async event => {
  var list = []
  let temp

  //create a list of all selectors with a loop from 1 to 10 !!! MIGHT VARY FROM WEBSITE TO WEBSITE !!!
  for (let i = 1; i <= 10; ++i) {
    temp = [{ selector: selectorData.amazon.selectors.jobTitle(i), type: 'jobTitle' },
    { selector: selectorData.amazon.selectors.jobPosted(i), type: 'jobPosted' },
    { selector: selectorData.amazon.selectors.location(i), type: 'location' },
    { selector: selectorData.amazon.selectors.jobID(i), type: 'jobID' }]
    list.push(temp);
  }

  const data = await scrap(selectorData.amazon.url, list);
  return ResponseHandler.returnResponse(200, 'Amazon Job Data', data)
}
