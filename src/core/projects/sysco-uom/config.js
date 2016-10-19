module.exports = {
  routes: {
    baseUrl: 'http://localhost:3001'
  },
  generic: {
    backArrow:'//a[@id="back-nav"]/i',
    addSymbol:'add-nav',
    close:'close-nav',
    edit:'edit-nav'
  },
  login: {
    userField:'//input[@id="username"]',
    passField:'//input[@id="password"]',
    username: 'squomnorm44',
    password: 'welcome1'
  },
  homepage: {
    hamburgerMenu: 'hamburger-nav',
    closeInvPrompt: '#prompt-heading > span',
    closeInvButton: 'prompt-button',
    expenseCategories: 'a#menu-link.manageExpenses'
  },
  expense: {
    expTitle:'navbar-brand > h3',
    foodCategory:'//span[contains(text(), "Food")]',
    nonFoodCategory: '//span[contains(text(), "Non-Food")]',
    expDetailTitle:'h3'

  }
};
