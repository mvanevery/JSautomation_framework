/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers: {
        usernameField: '//input[@data-id="username"]',
        passwordField: '//input[@data-id="password"]',
        loginLogo: '//img[@data-id="logo"]',
        //loginLogo:'//div[@data-id="logo"],
        storeIdLabel: '//div[@data-id="storeIdLbl"]',
        url_login: 'localhost:3000/login',
        deprovision: '.mm-o-icon',
       //username: 'testauto',
       //password: 'asdf',
        signIn: '//button[@data-id="signin"]',
        userPlaceholder:'Username',
        logout: '//div[@data-id="module-logout"]',
        logoutCancel:'//button[@data-id="cancel"]',
        logoutConfirm: '//button[@data-id="logout"]',
        logoutQuestion:'//div[@data-id="logoutQuestion"]'
    }
}
