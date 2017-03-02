

# Tutorial  

## Writing Test Steps
### Test Case Steps
-  Writing the Test Case steps are all follow the same format.
    1. Test step description
    2. Test step function description
    3. Test step function to be executed
- Example: Everything within the '' is what will be displayed during the test run in the terminal
    1. describe('Enter Provision Key', () => {
    2. it('Should populate the provision key', (done) => {
    3. common.enterProvisionTalbots(done);


#### Example:

   This line is to describe what action is being taken in this step 

          describe('Pausing', () => { 

   This line describes what the step is actually doing or rather supposed to be doing 

        it('Should pause the test for 5 seconds', (done) => { 

   This line is what function is being called in this step. For instance 'common.pause()', 'common' is the js file and 'pause' is 
            the function within that file that is being executed.   

        common.pause(done, 2500); 


### Functional Steps  
- When it comes to the functions that the test case calls in order to execute a step in the test case, it is pretty straight forward. 
    This is strictly a JavaScript function, however, it needs to be written using Webdriverio binding. These are the selenium bindings 
    that allow the mobile testing to take place. Without those bindings, the browser or app would not know what each line in the function 
    is supposed to do.   

#### Example:

   This line is the function name

        loginUser(done) {

   On these 4 lines, the function is asserting that a particular element is visible

            client
            .isVisible(loginPage.helpers.signIn).then(function(isVisible) {
                assert.equal(expected, isVisible, 'The expected value was not equal to the text');
   On the next 4 lines, the function states that if the isVisible assertion was true to complete the setValue action to then 
   do another setValue action

          if (isVisible == true) {
       client
            .setValue(loginPage.helpers.usernameField, loginPage.helpers.username)
            .setValue(loginPage.helpers.passwordField, loginPage.helpers.password)
   On the next 2 lines, the function states that after completing the prior setValue actions to perfom a click action on the element listed

            .click(loginPage.helpers.signIn);
                    }
                })
   On the next 2 lines, are the pause statement sets the time to wait before starting the next test step. The .call(done) statement completes the function.

          .pause(pauseTime)
          .call(done);
          },



## Commit, Pull, Push and Pull Request

### All of these are done with WebStorm in mind
### Commit
- To Commit your code
    1. Go to VCS on the menu and select Commit Changes(**ctrl+K or cmd+K**)
    2. Add any comments regarding that commit at that moment and click the Commit button.

This will commit your code to branch locally but will not commit the code to your branch in the repository.

### Push
- To Push your code
    1. Go to VCS on the menu, select Git
    2. Under the Fetch section, select Push (**shift+ctrl+K or shift+cmd+K**)
    3. Click the Push button

Typically you push your code at the same time that you push code. That is to ensure that the code in the repo matches the code you
   have locally on your machine.

### Pull
- You pull to your branch
    1. Go to VCS on the menu and select Update Project(**ctrl+T or cmd+T**).
    2. When the modal displays make sure the settings are set to Merge under Update Type and the other option is set to Use Stash.
    3. The click OK

This is done when development has been done by you on a different
machine or a second developer has contributed to this branch and you need to get that update.

### Pull Request
- When you have code that you feel is ready to be merged into the development branch or want
 to open it up for collaboration you do this through a PR (pull request). This is
 done within BitBucket, in the repo for the project.
   1. Open BitBucket and log in using your credentials that have access to the Archon Framework
   2. Navigate to the Archon Framework
   3. Once in the project, on the left hand menu, under Actions, click 'Create Pull Request'
   4. On the Pull Requests page, you will see a drop down on the left pointing to a drop down on the right
   5. In the left drop down, select the branch you have been working on and want merged into the development branch
   6. In the right drop down, select Develop as the branch
   7. In the description section, put the status of the request. Normally, the only one you need is "Do NOT Merge". Also in the
   description, your commit messages will be present, for cleanup, you can remove the commit messages and make a more detailed
   description of the what is in the pull request. What you worked on and what you did is sufficient or just a bulleted list of
   the changes
   8. (Optional) You can check or uncheck the box marked "Close Branch". If left checked it will remove the from the repository when the
   branch is merged
