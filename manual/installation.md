# Setup and Installation

## Setup

Getting setup is a matter of having all the necessary programs and permissions.
You need an IDE to write your code and tests and you need the ability to work on physical
devices. Below is listed what you need for Windows and Mac machines.


### Windows

- Webstorm or an equivalent JavaScript development IDE
- A BitBucket account, in order to pull the needed project or projects down.
- Node.js and NPM(this is usually included with the Node install)
- Appium
- Java
- Android SDK (this will install universal drivers for android devices)
- Selenium IDE
- Chromedriver
- Mozilla Firefox
- Google Chrome
- Gulp

### Mac

- Homebrew or Brew
- Webstorm or an equivalent JavaScript development IDE
- A BitBucket account, in order to pull the needed project or projects down.
- Node.js and NPM(this is usually included with the Node install)
- Appium
- Java
- Android SDK (this will install universal drivers for android devices)
- Xcode and Xcode command line tools
- Command Line Tools for Android SDK
- Chromedriver
- Selenium IDE
- Firefox
- Gulp
- iDeviceInstaller
- iOS-Webkit-Proxy



## Installation of Programs


- (Mac Only) Before installing any other program install Xcode. This can be done through the App Store
simply by search for Xcode.
- (Mac Only) Once Xcode is installed, install the Xcode command line tools this can be done
from the terminal using:

      xcode-select --install
- (Mac Only) To install Brew, ensure Xcode and Xcode command line tools are installed. Once that is done
in the terminal use this command

      ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
- Install WebStorm or an equivalent JavaScript development IDE
     * [Webstorm](https://www.jetbrains.com/webstorm/download/) (preferred)
     * [NetBeans IDE](https://netbeans.org/downloads/index.html)
     * [Visual Studio](https://www.visualstudio.com/vs/community/)
- Install JAVA. This can be downloaded from Oracle.com. You need the
[Java Runtime Environment](http://java.com/en/download/)(JRE) and the
[Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)(JDK)
   * Once JAVA is downloaded and installed. You must set JAVA paths on your machine.
      * For Windows - To add the JAVA paths you must edit the system environment variables
         1. Go into the System Properties
         2. Select the Advanced tab and click the button marked Environment Variables
         3. Under System Variables, click New
         4. In the Variable Name, set that to JAVA_HOME
         5. In the Variable Value field, set that to where the JDK lives. Ex:
         C:\Program Files\Java\jdk1.8.0_101
         6. Select the Path variable and click Edit
         7. (if on Windows 10) Click New and add a route to the javapath. Ex: C:\ProgramData\Oracle\Java\javapath

      * For Mac - To add the JAVA paths you must edit the .bash_profile file
        1. Open terminal
        2. Ensure you are in root. Use command

               cd ~
        3. Once in root, you need to open the .bash_profile so that you can add the paths. Use this command:

               nano .bash_profile
        4. In the .bash_profile, you need to add the JAVA_HOME. Add this to the file:

                export JAVA_HOME=$(/usr/libexec/java_home)
        5. To save the file, press Command+X, when asked to save press Y and hit Enter to confirm the file name
        6. To confirm that Java is installed, quit the terminal and reopen it
        7. When the terminal opens back up, use the commands to verify the Java installation

                java -version

- Download and Install [Node.js](https://nodejs.org/en/download/) and [NVM(Node Version Manager)](https://github.com/creationix/nvm)
    * The Node.js should be a wizard type install so just follow the prompts
    * The NVM install is easiest done through the command line. Follow the instructions on the page for
    curl or Wget installation instructions
- Download and Install [Appium](Http://appium.io)
    * Follow the install wizard and Appium will install everything necessary to run the standalone program
- Download and Install the [Android SDK and Tools](https://developer.android.com/studio/index.html)
    * Scroll to the bottom of the page and select the corresponding Android Studio installation for
    your operating system.
    * After selecting your Android Studio installer, you should also install the Android Command Line Tools. These are
    located directly below the Android Studio intallers.
    * Once the Android Studio and the command line tools have been intalled. You need to update you create
    Android paths on your machine
        * For Windows - To add Android Paths you need to add environment variables
             1. Go into the System Properties
             2. Select the Advanced tab and click the button marked Environment Variables
             3. Under System Variables, click New
             4. In the Variable Name, set that to ANDROID_HOME
             5. In the Variable Value field, set that to where the JDK lives. Ex:
             C:\Program Files\Java\jdk1.8.0_101
             6. Select the Path variable and click Edit
             7. (if on Windows 10) Click New and add a route to the javapath. Ex: C:\ProgramData\Oracle\Java\javapath

        * For Mac - To add the ANDROID paths you must edit the .bash_profile file
             1. Open terminal
             2. Ensure you are in root. Use command

                    cd ~
             3. Once in root, you need to open the .bash_profile so that you can add the paths. Use this command:

                    nano .bash_profile
             4. In the .bash_profile, you need to add the ANDROID_HOME and ANDROID_SDK. Add this to the file:

                    export ANDROID_HOME=$HOME/Library/android/sdk/
                    export ANDROID_SDK=$ANDROID_HOME
             4. Also while in the .bash_profile, you need to secondary ANDROID paths. Add these to the file.

                    PATH=$PATH:$ANDROID_HOME/build-tools
                    PATH=$PATH:$ANDROID_HOME/platform-tools
                    PATH=$PATH:$ANDROID_HOME/tools
             5. To save the file, press Command+X, when asked to save press Y and hit Enter to confirm the file name


- Download and install FireFox from [here](https://www.mozilla.org/en-US/firefox/new/?scene=2)
  This is used to run the Selenium IDE, which is a useful tool for getting element information when scripting.

- Download and install Selenium IDE from [here](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/). This
  will install the Selenium IDE plugin, to be used only in Firefox

- Download and Install the [Selenium Standalone Server](http://goo.gl/EUxR76) and [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)

- Install Gulp globally on your machine. This is needed to run the test. Open the terminal and enter the code below

        npm install -g gulp

- (Mac Only) Install the iOS-Webkit-Proxy via command line. This allows Appium to speak directly to an iOS device. It needs to be running in order
to test against devices. Open the terminal and enter the code below

        brew install ios-webkit-debug-proxy

- (Mac Only) Install iDeviceInstaller on your machine. Open the terminal and enter the code below

        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null
     when that is finished enter this

        brew install ideviceinstaller

## Installing Archon

From within WebStorm or equivalent Javascript IDE, you need to pull the project down from its Git repository. You must have access
 to the project for this to work, so make sure you have access to the Archon-Framework before attempting to pull the project down.

Since I work in WebStorm I will use that as a base of reference for steps but the concepts should apply everywhere

- Open your Javascript IDE, depending on what you use you may be prompted with the choice of how to create a new project. You want to
checkout the project from Git. In WebStorm, you choose "Check out from Version Control" and choose Git
- When prompted to input the Git repository info, you need to set the Git Repository URL and the directories you wish to use.
    - if you have access to the Git repository in BitBucket, then you can get the repository URL from there it will look something like
    this

          git@bitbucket.org:madmobile/archon-framework.git

    - Set you directories to what ever you would like them to be and hit the clone button
    - If prompted for a username and password use you BitBucket username and password
- Once the project has been pulled down and it is on your machine, it needs a few minutes to complete indexing. After that,
you want to open the terminal within the IDE and run the command below

        npm install

#### You have installed the Archon Framework on your machine. Head over to Configuration to get your IDE setup to run the project with no issue!

