/**
 * Created by mvanevery on 8/31/16.
 */
module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers: {
        usernameField: '//input[@name="basic-form-input-email"]',
        passwordField: '//input[@name="basic-form-input-password"]',
        loginLogo: 'img.mm-c-login__logo',
        //loginLogo:'//div[@data-id="logo"],
        storeIdLabel: '//div[@data-id="storeIdLbl"]',
        url_login: 'localhost:3000/login',
        deprovision: '.mm-o-icon',
        username: 'testauto',
        password: 'asdf',
        signIn: '//button[@data-id="signin"]',
        userPlaceholder:'Username',
        logout: '//div[@data-id="module-logout"]',
        logoutCancel:'//button[@data-id="cancel"]',
        logoutConfirm: '//button[@data-id="logout"]'
    }
}
