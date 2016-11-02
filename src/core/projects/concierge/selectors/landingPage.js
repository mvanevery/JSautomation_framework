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
       // plannerIcon: '//a[@href="/planner"]',
        plannerIcon: 'mm-o-icon mm-c-nav__icon icon-year-to-date',
        blackbookIcon: '//a[contains(@href, "/blackbook")]',
        expertIcon: '//a[contains(@href, "/catalog/expert")]',
        searchIcon: 'mm-o-icon mm-c-nav__icon icon-search',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        productSearchField: '//input[@name="Product Search"]',
        menuIcon: 'mm-o-icon mm-c-nav__icon icon-top-products',
        menuNewArrivals:'li[contains(@span="New Arrivals")]',
      //  menu: '//a[contains(@href, "#")]',
        email: 'mm-o-icon mm-c-nav__icon icon-email-fill',
        //logout: 'mm-c-nav__list-item last',
        logout: '//div[@data-id="module-logout"]',
        //logoutModal: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        logoutCancel: '//button[@data-id="logoutCancelBtn"]',
        logoutConfirm: '//button[@data-id="logoutConfirmBtn"]',
    }
}


//li[contains(@span="New Arrivals")]
