/**
 * Created by jharre on 11/18/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
      catalogMenuTitle: '//div[contains(text(),"Catalog")]',
      catalogBackBtn: '//div[@data-id="catalogBackBtn"]',
      productCategories: {
        newArrivals: '//div[contains(text(),"New Arrivals")]',
        shoes: '//div[contains(text(),"Shoes")]',
        flats: '//div[contains(text(),"Flats")]',
      },
      products: {
        edisonFlatsRoses: '//div[contains(text(),"Edison Flats-Roses")]'
      }
  }
}


