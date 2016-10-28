/**
 * Created by afeldmeyer on 10/28/16.
 */
module.exports = {
    routes: {
      baseUrl: 'https://serviceqa.booksamillion.com/'
    },
    helpers:{
      img_headerLogo:       '//span[@class="sprite-header-logo"]',
      txt_sectionLabels:    '//div[@h3="Company News"]',
    },


  verifyBamLandingPage(done, expected) {
    if (client.isVisible(helpers.img_headerLogo)) {
          client.click(helpers.txt_sectionLabels)
            .then(() => {
              client.getText(helpers.txt_sectionLabels)
                .then((text) => {
                  try {
                    assert.equal(expected, text, 'The BAM landing page is displayed');
                  } catch (err) {
                    done(err);
                  }
                })
            })
        }
      },


}
