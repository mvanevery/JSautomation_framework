# Usage

## Using the Archon Framework

- On the [Tutorial Page](./manual/tutorial.html) you will find the instructions for building a Test Case Step and how to build the
Functional Test Steps

### Running A Test

In order to run test through the **Archon Framework**, you need to have a few items in place. You must have a **Gulp task**,
and a **Test Case** and you must have Gulp installed. If you followed the Installation and Setup document, you should have
that already installed.

- The command to run a full test in Archon looks like:

           gulp initiate-findInStore --archon:payless --test:findInStore

  Let's break down this command so that we can understand what is going on

  - ***Gulp initiate-*** This is used to cue up the Archon for the initiation of a gulp task
  - ***findInStore***    This is the gulp task that is needed in order to run a specific test
  - ***--archon:***      This is used to set which project you will be running your test out of
  - ***payless***        This is the project name you are running your tests out of
  - ***--test***         The is used to set up the test that is about to be run
  - ***findInStore***    This is the test that is being run through the command listed above

