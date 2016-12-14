/**
 * Created by jharre on 11/18/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
      catalog: {
        catalogMenuTitle: '//div[contains(text(),"Catalog")]',
        catalogBackBtn: '//div[@data-id="catalogBackBtn"]',
      },
      productCategories: {
        newArrivals: '//div[contains(text(),"New Arrivals")]',
        shoes: '//div[contains(text(),"Shoes")]',
        flats: '//div[contains(text(),"Flats")]',
      },
      products: {
        francescaDrivingFlatsSuede: '//div[contains(text(),"Francesca Driving Flats-Suede")]',
        readMoreLink: '//button[@data-id="readMoreLink"]',
        readLessLink: '//div[contains(text(),"read less")]'
      },
      variants: {
        colorVariant:  '//div[@data-id="Color"]',
        saleColorVariant:  '//div[@data-id="Sale Color"]',
        defaultVariant:  '//div[@data-id="Size Type"]',
        sizeVariant:  '//div[@data-id="Size"]',
        variantSelectedValue:  'color: rgb(255, 48, 59)',
      }
  }
}


