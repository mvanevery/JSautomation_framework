/**
 * Created by mvanevery on 5/2/2016.
 */

var client = require('../../core/client').client;
var project = require('../projects/config').project;
var config = require('../projects/' + project + '/config');
var page = require('../projects/' + project + '/config.homepage');
var expect = require('chai').expect;
var assert = require('chai').assert;
var $ = require('jQuery');
var mobileTitle = page.mobileTitle;
var shipinfo = config.helpers.shipInfo;
var comparisonTestPass = function (array1, array2) {
    // Test lengths first
    if (array1.length !== array2.length) {
        return false;
    }

    // Test that entries match
    for (var i=0; i<array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
};


module.exports = {

    mobileView: function (done) {
        client.setViewportSize({
            height: 559,
            width: 375
        }, true).then(done);
    },

    goTo: function (done) {
        client.init().url(config.routes.legBaseUrl).then(function () {
            client.setViewportSize({
                height: 559,
                width: 375
            }, true).then(done);
        });
    },
    pause: function (done) {
        client.pause(15000, done);
    },

    refresh: function(done) {
        client.refresh(done);
    },

    openMenu: function (done) {
        if (client.isVisible('a#btnShop.btn.header-menu', done)) {
            client.click('a#btnShop.btn.header-menu > i.icon-menu-list');
        } else {
            console.log('Menu not available');
        }
    },


}