/**
 * Created by jharre on 11/18/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
      catalog: {
        catalogBackBtn: '//div[@data-id="catalogBackBtn"]',
      },
      productCategories: {
        productCategory: '//div[contains(text(),"Apparel")]',
        productSubCategory: '//div[contains(text(),"Sweaters")]'
      },
      products: {
        product: '//div[@data-id="product-prdi40827"]',
        imgProduct: '//img[@data-id="product-prdi40827"]',
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


