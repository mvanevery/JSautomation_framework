/**
 * Created by mvanevery on 2/19/2016.
 */

var homepage = require('../core/helpers/homepage');

describe('Testing Home Page', function () {
    before(function (done) {
        homepage.goTo(done);
    });

    describe('The Home Page Menu', function() {
        it.('should see the menu open', function(done){
            homepage.openMenu(done);
        })
    })
})

