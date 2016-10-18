/**
 * Created by mvanevery on 10/13/16.
 */
const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const expect = require('chai').expect;
const assert = require('chai').assert;
const date = new Date();
const current = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
const By = client.By


module.exports = {
  gotoExpense(done, expected) {
  if (client.isVisible(config.homepage.expenseCategories, done)) {
    client.click(config.homepage.expenseCategories)
      .then(() => {
        client.getText(config.expense.expTitle)
          .then((text)=> {
            try {
              assert.equal(expected, text, 'Expense Categories title matches');
            } catch (err) {
              done(err);
            }
          });

      });
    }
  },
  selectFood(done, expected) {
    if (client.isVisible(config.expense.foodCategory)) {
      client.click(config.expense.foodCategory)
      .then(() => {
          client.getText(config.expense.expDetailTitle)
          .then((text) => {
              try {
                assert.equal(expected, text, 'Expense Categories Detail title matches');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  }
}
