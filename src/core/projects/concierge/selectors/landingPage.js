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
        //plannerIcon:'//div[@data-id="planner"]',
        blackbookIcon: '//div[@class="mm-o-icon icon-black-book"]',
        //blackbookIcon:'//Icon[@data-id="blackbook"]',
        expertIcon: '//div[@class="mm-o-icon icon-year-to-date"]',
        searchIcon: '//div[@class="mm-o-icon icon-search"]',
        addIcon: 'mm-o-icon mm-c-nav__icon icon-create-fill',
        productSearchField: '//input[@name="Product Search"]',
        productIcon: '//div[@class="mm-o-icon icon-hamburger-menu"]',
        menu: '//a[contains(@href, "/")]',
        email: '//div[@class="mm-o-icon icon-email-fill"]',
        logout: '//div[@data-id="module-logout"]',
        logoutCancel: '//div[contains(text(),"Cancel")]',
        //logoutCancel:'//button[@data-id="cancel"]',
        logoutConfirm: '//div[contains(text(),"Log Out")]'
        //logoutConfirm: '//div[@data-id="logout")]'
    }
}


//li[contains(@span="New Arrivals")]
