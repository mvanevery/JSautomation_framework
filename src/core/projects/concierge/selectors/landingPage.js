/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers:{
        homeIcon: 'span.mm-c-nav__logo-img',
        bagIcon:'//div[@class="mm-o-icon.icon-bag-outline"]',
        iconList: 'mm-c-nav__list',
        iconListTitle:'h2',
        plannerIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        blackbookIcon: '//div[@class="mm-o-icon icon-black-book"]',
        expertIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        searchIcon: '//div[@class="mm-o-icon icon-search"]',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        productSearchField: '//input[@name="Product Search"]',
        productIcon: '//div[@class="mm-o-icon icon-top-products"]',
        menuNewArrivals:'li[contains(@span="New Arrivals")]',
        menu: '//a[contains(@href, "/")]',
        email: '//div[@class="mm-o-icon icon-email-fill"]',
        logout: '//div[@data-id="module-logout"]',
        logoutModal: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        logoutCancel: '//div[contains(text(),"Cancel")]',
        logoutConfirm: '//div[contains(text(),"Log Out")]'
    }
}


//li[contains(@span="New Arrivals")]
