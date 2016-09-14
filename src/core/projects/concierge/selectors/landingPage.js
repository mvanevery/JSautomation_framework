/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers:{
        homeIcon: 'span.mm-c-nav__logo-img]',
        iconList: 'mm-c-nav__list',
        plannerIcon: '//a[@href="/planner"]',
        blackbookIcon: '//a[contains(@href, "/blackbook")]',
        expertIcon: '//a[contains(@href, "/catalog/expert")]',
        searchIcon: 'mm-o-icon mm-c-nav__icon icon-search',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        productSearchField: '//input[@name="Product Search"]',
        menu: '//a[@href="#"]',
        logout: 'mm-c-nav__list-item last',
        logoutModal: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        logoutCancel: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)',
        logoutConfirm: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)'
    }
}
