/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers:{
        homeIcon: '//a[@data-id="home"]',
        bagIcon:'//a[@data-id="bag"]',
        iconList: 'mm-c-nav__list',
        iconListTitle:'h2',
        plannerIcon:'//div[@data-id="planner"]',
        blackbookIcon:'//div[@data-id="blackbook"]',
        searchIcon: '//div[@data-id="search"]',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        menu: '//a[contains(@href, "/")]',
        email: '//div[@data-id="email"]',
        fulfillment:'//div[@data-id="fulfillment"]',
        sales:'//div[@data-id="lookbuilder"]',
        leftDrawerOverlay:'//div[@data-id="closeLeftDrawerOverlay"]',
        headerImage:'//img[@data-id="headerImage"]',
        //expertIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        broke:'null',

        catalog:
          {
            catalogMenuIcon: '//div[@data-id="catalog"]',
            catalogMenuIconActive:  'color: inherit'
          }
    }
}
