/**
 * Created by mvanevery on 7/8/2016.
 */
module.exports = {
  routes: {
    baseUrl: 'https://madmobile-staging.payless.com/',
    legBaseUrl: 'http://whatsmyuseragent.com',
    prodBaseUrl: 'm.payless.com'
  },

  helpers: {
    heroBanner: 'div.slider-container > a > img',
    menu: 'a.menu-trigger > i.icon',
    menuClose: 'a.close > i.icon',
    searchField: 'div.app-sub-header > form#search-form div.input > input',
    searchBox: '//form[@id="search-form"]/div/input',
    searchButton: 'button[type="submit"]',
    searchInfo: '142898',
    men: '//a[@href="/mens-shoes/"]',
    womenAcc: '//a[@href="/mens/boots/"]',
    stylesTitle: 'li.active.active-leaf > a.title',
    locationIcon: 'a.location > i.icon'
  }
}

