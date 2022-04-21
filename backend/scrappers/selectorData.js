module.exports.selectorData = {
  amazon: {
    selectors: {
      jobTitle:
        (index) => {return `#search-results-box > div.search-page > div > div > div.container > content > div > div > div.col-md-8.search-page-job-list > div:nth-child(2) > div > div:nth-child(${index}) > a > div > div:nth-child(1) > div.info.first.col-12.col-md-8 > h3`},
      jobPosted:
        (index) => {return `#search-results-box > div.search-page > div > div > div.container > content > div > div > div.col-md-8.search-page-job-list > div:nth-child(2) > div > div:nth-child(${index}) > a > div > div:nth-child(1) > div.info.col-12.col-md-4 > h2`},
      location:
        (index) => {return `#search-results-box > div.search-page > div > div > div.container > content > div > div > div.col-md-8.search-page-job-list > div:nth-child(2) > div > div:nth-child(${index}) > a > div > div:nth-child(1) > div.info.first.col-12.col-md-8 > p`},
      jobID:
        (index) => {return `#search-results-box > div.search-page > div > div > div.container > content > div > div > div.col-md-8.search-page-job-list > div:nth-child(2) > div > div:nth-child(${index}) > a > div > div:nth-child(1) > div.info.first.col-12.col-md-8 > p`}
    },
    url: 'https://www.amazon.jobs/en/job_categories/software-development'
  }
}
