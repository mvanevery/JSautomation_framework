# Configuration

### Setting Up WebStorm
WebStorm needs to be configured to work with the way the code is written. To do this follow the instructions below
   - Select Preferences from the main menu
   - Select Languages & Frameworks
   - Click on Javascript
   - Choose ECMAScript 6 in the drop down box listed "JavaScript Language version"


### Connecting to Project Environments
In order to develop against apps such as Sysco UOM and Concierge, you must load the project via Webstorm or equivalent
JavaScript IDE

To install a Project, follow the same steps that you did to install the Archon Framework. Instructions below:

- Open your Javascript IDE, depending on what you use you may be prompted with the choice of how to create a new project. You want to
checkout the project from Git. In WebStorm, you choose "Check out from Version Control" and choose Git
- When prompted to input the Git repository info, you need to set the Git Repository URL and the directories you wish to use.
    - if you have access to the Git repository in BitBucket, then you can get the repository URL from there it will look something like
    this

          git@bitbucket.org:madmobile/archon-framework.git

    - Set your directories to what ever you would like them to be and hit the clone button
    - If prompted for a username and password use your BitBucket username and password
- Once the project has been pulled down and it is on your machine, it needs a few minutes to complete indexing. After that,
you want to open the terminal within the IDE and run the command below

        npm install

Once the npm install has completed. To run the project so that you can begin development run the following command

        For Oracle/Concierge:   npm start

        For Sysco UOM:          npm run dev
