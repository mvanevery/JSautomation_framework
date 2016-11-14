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

  addTask(done,expected) {
    if(client.isVisible(planner.helpers.taskAddition)) {
      client.click(planner.helpers.taskAddition)
        .then(() => {
          client.getText(planner.helpers.taskTitle)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The Task modal is not displayed');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },
  addAppointment(done,expected) {
    if(client.isVisible(planner.helpers.apptAddition)) {
      client.click(planner.helpers.apptAddition)
        .then(() => {
          client.getText(planner.helpers.apptTitle)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The Task modal is not displayed');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  addSubject(done,subject) {
    if (client.isVisible(planner.helpers.modalSubject, done)) {
      client.setValue(planner.helpers.modalSubject, subject);
    }
  },

  addType(done, type) {
    if (client.isVisible(planner.helpers.modalType, done)) {
      client.selectByValue(planner.helpers.modalType, type);
    }
  },

  addStartDate(done, start) {
    if (client.isVisible(planner.helpers.modalStartDateTime, done)) {
      client.click(planner.helpers.modalStartDateTime)
        .then(() => {
          client.setValue(planner.helpers.modalStartDateTime, start);
        });
    }
  },

  addEndDate(done, end) {
    if (client.isVisible(planner.helpers.modalEndDateTime, done)) {
      client.setValue(planner.helpers.modalEndDateTime, end);
    }
  },

  addStatus(done, status) {
    if (client.isVisible(planner.helpers.modalStatus, done)) {
      client.selectByValue(planner.helpers.modalStatus, status);
    }
  },

  addPriority(done, priority) {
    if (client.isVisible(planner.helpers.modalPriority, done)) {
      client.selectByValue(planner.helpers.modalPriority, priority)
    }
  },

  save(done) {
    if (client.isVisible(planner.helpers.saveButton, done)) {
      client.click(planner.helpers.saveButton);
    }
  },

  cancelTask(done) {
    if (client.isVisible(planner.helpers.taskCancel, done)) {
      client.click(planner.helpers.taskCancel)
    }
  },

  apptToggle(done, expected) {
    if (client.isVisible(planner.helpers.plannerTitle, done)) {
      client.click(planner.helpers.taskToggleSwitch)
        .then(() => {
          client.click(planner.helpers.apptToggleSwitch)
            .then(() => {
              client.click(planner.helpers.addButton)
                .then(() => {
                  client.getText(planner.helpers.apptTitle)
                    .then((text) => {
                      try {
                        assert.equal(expected, text, 'The expected value was not equal to the text');
                      } catch (err) {
                        done(err);
                      }
                    })
                })
            })
        })

    }
  },
  taskToggle(done, expected) {
    if (client.isVisible(planner.helpers.plannerTitle, done)) {
      client.click(planner.helpers.taskToggleSwitch)
        .then(() => {
          client.click(planner.helpers.addButton)
            .then(() => {
              client.getText(planner.helpers.taskTitle)
                .then((text) => {
                  try {
                    assert.equal(expected, text, 'The expected value was not equal to the text');
                  } catch (err) {
                    done(err);
                  }
                })
            })
        })

    }
  },

  verifyAddedTask(done, expected) {
    if(client.isVisible(planner.helpers.plannerTitle, done)) {
      client.getText(planner.helpers.addedTaskTitle)
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  verifyAddedAppt(done, expected) {
    if(client.isVisible(planner.helpers.plannerTitle, done)) {
      client.getText(planner.helpers.addedTaskTitle)
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  deleteTask(done) {
    if(client.isVisible(planner.helpers.addedTaskTitle, done)) {
      client.click(planner.helpers.removeTask)
        .then(() => {
          client.click(planner.helpers.yesButton);
        })
    }
  },

}