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



## Installation


- (Mac only) Before installing any other program install Xcode. This can be done through the App Store
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

