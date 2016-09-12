

# Tutorial  

## Writing Test Steps
#### Test Case Steps
    Writing the Test Case steps are all follow the same format. 1. Test Step description 2. Test Step function and then
    3. Test Step function to be executed.
    Example:
    1. describe('Enter Provision Key', () => {
    2. it('Should populate the provision key', (done) => {
    3. common.enterProvisionTalbots(done);

     Example:

     describe('Pausing', () => { 
            -- This line is to describe what action is being taken in this step 
        it('Should pause the test for 5 seconds', (done) => { 
            -- This line describes what the step is actually doing or rather supposed to be doing 
        common.pause(done, 2500); 
             -- This line is what function is being called in this step. For instance 'common.pause()', 'common' is the js file and 'pause' is 
         the function within that file that is being executed.   

#### Functional Steps  
    When it comes to the functions that the test case calls in order to execute a step in the test case, it is pretty straight forward. 
    This is strictly a JavaScript function, however, it needs to be written using Webdriverio binding. These are the selenium bindings 
    that allow the mobile testing to take place. Without those bindings, the browser or app would not know what each line in the function 
    is supposed to do.   



