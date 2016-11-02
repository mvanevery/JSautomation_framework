/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers:{
        homeIcon: 'span.mm-c-nav__logo-img',
        bagIcon:'div.mm-o-icon.icon-bag-outline',
        iconList: 'mm-c-nav__list',
        iconListTitle:'h2',
        plannerIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        blackbookIcon: '//div[@class="mm-o-icon icon-black-book"]',
        expertIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        searchIcon: '//div[@class="mm-o-icon icon-search"]',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        productSearchField: '//input[@name="Product Search"]',
        menuIcon: '//div[@class="mm-o-icon icon-top-products"]',
        menuNewArrivals:'li[contains(@span="New Arrivals")]',
        menu: '//a[contains(@href, "/")]',
        email: '//div[@class="mm-o-icon icon-email-fill"]',
        logout: '//div[@class="mm-o-icon icon-year-to-date"]',
        logoutModal: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        logoutCancel: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)',
        logoutConfirm: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)'
    }
}


//li[contains(@span="New Arrivals")]
