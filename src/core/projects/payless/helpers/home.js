/**
 * Created by mvanevery on 7/8/2016.
 */

const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const home = require(`../../../projects/${project}/helpers/home`);
const pdp = require(`../../../projects/${project}/helpers/pdp`);
const plp = require(`../../../projects/${project}/helpers/plp`);
const store = require(`../../../projects/${project}/helpers/store-locator`);
const expect = require('chai').expect;
const assert = require('chai').assert;

module.exports = {

  helpers: {
    homepage: 'a.sprite-header-logo',
    heroBanner: 'div.slider-container > a > img',
    menu: 'a.menu-trigger > i.icon',
    menuClose: 'a.close > i.icon',
    searchField: 'div.app-sub-header > form#search-form div.input > input',
    searchBox: '//form[@id="search-form"]/div/input',
    searchButton: 'button[type="submit"]',
    searchInfo: '142898',
    men: '//a[@href="/mens-shoes/"]',
    women: '//a[@href="/womens-shoes/"]',
    menAcc: '//a[@href="/womens/boots/"]',
    womenAcc: '//a[@href="/womens/boots/"]',
    stylesTitle: 'li.active.active-leaf > a.title',
    locationIcon: 'a.location > i.icon',
    cartIcon: '/html/body/div[1]/div/div/div[4]/div/div[2]/div[1]/div[1]/div[2]/div/a/i',
    promoHeader: 'div.app-header > div.header-content > div.promo',
    headerText: 'FREE SHIPPING W/ $25 PURCHASE + FREE RETURNS TO STORES'
      //'div.shop-bag > a.shopping-bag > i.icon'
  },

// HOMEPAGE/MENU FUNCTIONALITY

  openMenu: (done) => {
    if (client.isVisible(home.helpers.menu, done)) {
      client.click(home.helpers.menu);
    } else {
      console.log('Menu not available');
    }
  },
  menuVerify: (done) => {
    if (client.isVisible('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5', done)) {
      client.getText('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5').then((err, text) => {
        expect(text).to.equal('My Bag');
        done();
      });
    }

  },
  closeMenu: (done) => {
    if (client.isVisible(home.helpers.menuClose, done)) {
      client.click(home.helpers.menuClose, done);
    } else {
      console.log('Menu not open');
    }
  },
  searchItem: (done, pauseTime, search) => {
    const searchData = (search || home.helpers.searchInfo);
    if (client.isVisible(home.helpers.searchField, done)) {
      client.click(home.helpers.searchBox)
        .then(() => {
          client.setValue(home.helpers.searchBox, searchData)
            .then(() => {
              client.click(home.helpers.searchButton);
              // .then (() => {
              //  pause(pauseTime)
              // });
            });
        });
    }
  },
  pickCategory: (done) => {
    if (client.isVisible(module.exports.helpers.menuClose, done)) {
      client.click(module.exports.helpers.men);
    } else {
      console.log('Menu not open');
    }
  },

  pickStyle: (done) => {
    if (client.isVisible(module.exports.helpers.stylesTitle, done)) {
      client.click(module.exports.helpers.menAcc);
    } else {
      console.log('Menu not open');
    }
  },

  gotoCart: (done) => {
    if (client.isVisible(module.exports.helpers.cartIcon, done)) {
      client.click(module.exports.helpers.cartIcon);
    } else {
      console.log('Icon not visible');
    }
  },

  verifyPromo: (done, expected) => {
    if (client.isVisible(module.exports.helpers.promoHeader, done)) {
      client.getText(module.exports.helpers.promoHeader)
      .then((header) => {
          //console.log(header)
          try {
            assert.equal(expected || module.exports.helpers.headerText, header, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  }

};

