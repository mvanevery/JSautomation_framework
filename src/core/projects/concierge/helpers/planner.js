const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);
const assert = require('chai').assert;
const $ = require('chai-Jquery');

module.exports = {


  //goForwardMonth(done) {
  //  if(client.isVisible(planner.helpers.plannerTitle)) {
  //    client.getText(planner.helpers.calendarMonth)
  //    .then((current) => {
  //        client.
  //
  //      })
  //  }
  //},

  enterValue(done, expected, selector, value) {
    client.isVisible(planner.helpers[selector])
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.setValue(planner.helpers[selector], value)
        }
      })
    done();
  },

  selectValue(done, expected, selector, value)  {
    client.isVisible(planner.helpers[selector])
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.setByValue(planner.helpers[selector], value)
        }
      })
    done();
  },

  addTask(done, expected, title) {
    client.isVisible(planner.helpers.taskAddition)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.taskAddition)
            .then(() => {
              client.getText(planner.helpers.taskTitle)
                .then((text) => {
                  try {
                    assert.equal(title, text, 'The Task modal is not displayed');
                  } catch (err) {
                    done(err);
                  }
                })
            });
        }
      });
    done();
  },


  addAppointment(done, expected, title) {
    client.isVisible(planner.helpers.apptAddition)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.apptAddition)
            .then(() => {
              client.getText(planner.helpers.apptTitle)
                .then((text) => {
                  try {
                    assert.equal(title, text, 'The Task modal is not displayed');
                  } catch (err) {
                    done(err);
                  }
                })
            });
        }
      });
    done();
  },

  save(done, expected) {
  client.isVisible(planner.helpers.saveButton)
    .then(function (isVisible) {
      try {
        assert.equal(expected, isVisible, 'The expected value was not equal to the text');
      } catch (err) {
        done(err);
      }
      if (isVisible == true) {
        client.click(planner.helpers.saveButton)
        }
    })
  done();
},

  cancel(done, expected) {
    client.isVisible(planner.helpers.cancel)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.cancel)
        }
      })
    done();
  },

  apptToggle(done, expected, title) {
    client.isVisible(planner.helpers.pageHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.apptToggleSwitch)
            .then(() => {
              client.click(planner.helpers.addButton)
            })
            .then(() => {
              client.getText(planner.helpers.apptTitle)
                .then((text) => {
                  console.log(text);
                  try {
                    assert.equal(title, text, 'The Task modal is not displayed');
                  } catch (err) {
                    done(err);
                  }
                })
            });
        }
      });
    done();
  },

  taskToggle(done, expected, title) {
    client.isVisible(planner.helpers.pageHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.taskToggleSwitch)
            .then(() => {
              client.click(planner.helpers.addButton)
            })
            .then(() => {
              client.getText(planner.helpers.taskTitle)
                .then((text) => {
                  try {
                    assert.equal(title, text, 'The Task modal is not displayed');
                  } catch (err) {
                    done(err);
                  }
                })
            });
        }
      });
    done();
  },

  verifyAddedTask(done, expected, value) {
    client.isVisible(planner.helpers.pageHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(planner.helpers.addedTaskTitle)
            .then((text) => {
              try {
                assert.equal(value, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },


  verifyAddedAppt(done, expected, value) {
    client.isVisible(planner.helpers.pageHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(planner.helpers.addedApptTitle)
            .then((text) => {
              try {
                assert.equal(value, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },

  deleteTask(done, expected) {
    client.isVisible(planner.helpers.addedTaskTitle)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(planner.helpers.removeTask)
            .then(() => {
              client.click(planner.helpers.yesButton);
            });
        }
      })
    done();
  },

}


