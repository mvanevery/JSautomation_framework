# placeholder for qajenkins job config files. not really a Jenkinsfile. MM JCH 11-2-2016

# CI Sysco on jenkins.madmobile.com
#CRUMB=$(curl -s 'http://uomautomation:675361f9ca87306b1fd62260318f1418@qajenkins.madmobile.com/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')
#curl -H $CRUMB -X POST http://uomautomation:675361f9ca87306b1fd62260318f1418@qajenkins.madmobile.com/job/uom-automation-ios/build

# CI Concierge on jenkins.madmobile.com
CRUMB=$(curl -s 'http://conciergeautomation:94ba2b7d36d3d251e09edeec48d598e4@qajenkins.madmobile.com/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')
curl -H $CRUMB -X POST http://conciergeautomation:94ba2b7d36d3d251e09edeec48d598e4@qajenkins.madmobile.com/job/Concierge/build

#Concierge
<?xml version='1.0' encoding='UTF-8'?>
<project>
  <actions/>
  <description></description>
  <keepDependencies>false</keepDependencies>
  <properties/>
  <scm class="hudson.plugins.git.GitSCM" plugin="git@3.0.0">
    <configVersion>2</configVersion>
    <userRemoteConfigs>
      <hudson.plugins.git.UserRemoteConfig>
        <url>https://archon-jenkins@bitbucket.org/madmobile/archon-framework.git</url>
        <credentialsId>1cf3be35-1da0-42db-abae-d4d1d325d24e</credentialsId>
      </hudson.plugins.git.UserRemoteConfig>
    </userRemoteConfigs>
    <branches>
      <hudson.plugins.git.BranchSpec>
        <name>*/develop</name>
      </hudson.plugins.git.BranchSpec>
    </branches>
    <doGenerateSubmoduleConfigurations>false</doGenerateSubmoduleConfigurations>
    <submoduleCfg class="list"/>
    <extensions/>
  </scm>
  <assignedNode>macmini</assignedNode>
  <canRoam>false</canRoam>
  <disabled>false</disabled>
  <blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>
  <blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>
  <triggers>
    <hudson.triggers.TimerTrigger>
      <spec># Run once a day at 1am EST
H 1 * * *</spec>
    </hudson.triggers.TimerTrigger>
  </triggers>
  <concurrentBuild>false</concurrentBuild>
  <builders>
    <hudson.tasks.Shell>
      <command># delete previous iOS app build from device
ideviceinstaller -U com.madmobiledev.ConciergeDev -u 6bbbd889caeed808c71677e5bd5f1c7f764eaddd</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># npm install for archon-framework
npm install</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># download ipa from hockeyapp
curl -L -o Concierge.ipa https://rink.hockeyapp.net/api/2/apps/c8241ed859d343c9a59734cbd6f906c3/app_versions/4?format=ipa</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># install ipa onto device using phonegap ios-deploy
ios-deploy -i 6bbbd889caeed808c71677e5bd5f1c7f764eaddd -b Concierge.ipa</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># start appium
BUILD_ID=dontKillMe nohup /usr/local/bin/appium &gt; $PWD/appium.log 2&gt;&amp;1 &amp;</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command>sleep 10</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># start ios webkit debug proxy
BUILD_ID=dontKillMe nohup ios_webkit_debug_proxy -c 6bbbd889caeed808c71677e5bd5f1c7f764eaddd:27753 -d &gt; $HOME/ios_webkit_debug_proxy.log 2&gt;&amp;1 &amp;</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command>sleep 10</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># --client:chrome will not work w/o http://localhost:3000
gulp initiate-allTests --archon:concierge --test:allTests</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># stop ios_webkit_debug_proxy
pkill ios_webkit_debug_proxy</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># stop appium
pkill node /usr/local/bin/appium</command>
    </hudson.tasks.Shell>
  </builders>
  <publishers>
    <hudson.plugins.emailext.ExtendedEmailPublisher plugin="email-ext@2.52">
      <recipientList>jharre@madmobile.com,mvanevery@madmobile.com,afeldmeyer@madmobile.com</recipientList>
      <configuredTriggers>
        <hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
          <email>
            <subject>$PROJECT_DEFAULT_SUBJECT</subject>
            <body>$PROJECT_DEFAULT_CONTENT</body>
            <recipientProviders>
              <hudson.plugins.emailext.plugins.recipients.ListRecipientProvider/>
            </recipientProviders>
            <attachmentsPattern></attachmentsPattern>
            <attachBuildLog>false</attachBuildLog>
            <compressBuildLog>false</compressBuildLog>
            <replyTo>$PROJECT_DEFAULT_REPLYTO</replyTo>
            <contentType>project</contentType>
          </email>
        </hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
      </configuredTriggers>
      <contentType>default</contentType>
      <defaultSubject>$DEFAULT_SUBJECT</defaultSubject>
      <defaultContent>$BUILD_LOG</defaultContent>
      <attachmentsPattern>src/test/concierge/reports/report.html</attachmentsPattern>
      <presendScript>$DEFAULT_PRESEND_SCRIPT</presendScript>
      <postsendScript>$DEFAULT_POSTSEND_SCRIPT</postsendScript>
      <attachBuildLog>true</attachBuildLog>
      <compressBuildLog>false</compressBuildLog>
      <replyTo>$DEFAULT_REPLYTO</replyTo>
      <saveOutput>false</saveOutput>
      <disabled>false</disabled>
    </hudson.plugins.emailext.ExtendedEmailPublisher>
  </publishers>
  <buildWrappers>
    <hudson.plugins.ws__cleanup.PreBuildCleanup plugin="ws-cleanup@0.32">
      <deleteDirs>false</deleteDirs>
      <cleanupParameter></cleanupParameter>
      <externalDelete></externalDelete>
    </hudson.plugins.ws__cleanup.PreBuildCleanup>
    <hudson.plugins.build__timeout.BuildTimeoutWrapper plugin="build-timeout@1.17.1">
      <strategy class="hudson.plugins.build_timeout.impl.NoActivityTimeOutStrategy">
        <timeoutSecondsString>300</timeoutSecondsString>
      </strategy>
      <operationList/>
    </hudson.plugins.build__timeout.BuildTimeoutWrapper>
  </buildWrappers>
</project>

# uom-automation-ios
<?xml version='1.0' encoding='UTF-8'?>
<project>
  <actions/>
  <description></description>
  <keepDependencies>false</keepDependencies>
  <properties/>
  <scm class="hudson.plugins.git.GitSCM" plugin="git@3.0.0">
    <configVersion>2</configVersion>
    <userRemoteConfigs>
      <hudson.plugins.git.UserRemoteConfig>
        <url>https://github.com/menufocus/uom-inv-automation.git</url>
        <credentialsId>721de23b-4e38-4ccd-a04e-08c9378ac500</credentialsId>
      </hudson.plugins.git.UserRemoteConfig>
    </userRemoteConfigs>
    <branches>
      <hudson.plugins.git.BranchSpec>
        <name>*/master</name>
      </hudson.plugins.git.BranchSpec>
    </branches>
    <doGenerateSubmoduleConfigurations>false</doGenerateSubmoduleConfigurations>
    <submoduleCfg class="list"/>
    <extensions/>
  </scm>
  <assignedNode>macmini</assignedNode>
  <canRoam>false</canRoam>
  <disabled>false</disabled>
  <blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>
  <blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>
  <triggers>
    <hudson.triggers.TimerTrigger>
      <spec>H 18 * * *</spec>
    </hudson.triggers.TimerTrigger>
  </triggers>
  <concurrentBuild>false</concurrentBuild>
  <builders>
    <hudson.tasks.Shell>
      <command># delete previous iOS app build https://build.phonegap.com/apps/1930686 from device
ideviceinstaller -U com.mmsyscouom.app -u 6bbbd889caeed808c71677e5bd5f1c7f764eaddd</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># after 5 minutes get phonegap build. qajenkins controls the 5 minutes via Quiet Period.
cd $HOME/Home/workspace/uom-automation-ios
curl -L -o uom.ipa https://build.phonegap.com/apps/1930686/download/ios?auth_token=3CLrukS_ACNN3Xo-Cs9</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># delete old appium zip log
# TODO - need appium.zip.log for email but now add to test scripts. may need config.properties appiumExec property so we can stick with kicking off
# appium via jenkins.
rm -rf appium.zip.log</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># start ios webkit debug proxy
# TODO - to be removed b/c now in test scripts JCH 10-27-2016
BUILD_ID=dontKillMe nohup ios_webkit_debug_proxy -c 6bbbd889caeed808c71677e5bd5f1c7f764eaddd:27753 -d &gt; $HOME/ios_webkit_debug_proxy.log 2&gt;&amp;1 &amp;
</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># start appium
# TODO - to be removed b/c now in test scripts JCH 10-27-2016
BUILD_ID=dontKillMe nohup /usr/local/bin/appium &gt; $PWD/appium.log 2&gt;&amp;1 &amp;</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># run tests
sleep 30
java -cp $HOME/home/workspace/uom-automation-ios/bin:$HOME/home/workspace/uom-automation-ios/lib/* org.testng.TestNG $TESTNG</command>
    </hudson.tasks.Shell>
  </builders>
  <publishers>
    <hudson.plugins.emailext.ExtendedEmailPublisher plugin="email-ext@2.52">
      <recipientList>$DEFAULT_RECIPIENTS</recipientList>
      <configuredTriggers>
        <hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
          <email>
            <subject>$PROJECT_DEFAULT_SUBJECT</subject>
            <body>$PROJECT_DEFAULT_CONTENT</body>
            <recipientProviders>
              <hudson.plugins.emailext.plugins.recipients.ListRecipientProvider/>
            </recipientProviders>
            <attachmentsPattern></attachmentsPattern>
            <attachBuildLog>false</attachBuildLog>
            <compressBuildLog>false</compressBuildLog>
            <replyTo>$PROJECT_DEFAULT_REPLYTO</replyTo>
            <contentType>project</contentType>
          </email>
        </hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
      </configuredTriggers>
      <contentType>default</contentType>
      <defaultSubject>$DEFAULT_SUBJECT</defaultSubject>
      <defaultContent>$DEFAULT_CONTENT</defaultContent>
      <attachmentsPattern></attachmentsPattern>
      <presendScript>$DEFAULT_PRESEND_SCRIPT</presendScript>
      <postsendScript>$DEFAULT_POSTSEND_SCRIPT</postsendScript>
      <attachBuildLog>true</attachBuildLog>
      <compressBuildLog>false</compressBuildLog>
      <replyTo>$DEFAULT_REPLYTO</replyTo>
      <saveOutput>false</saveOutput>
      <disabled>false</disabled>
    </hudson.plugins.emailext.ExtendedEmailPublisher>
    <hudson.tasks.BuildTrigger>
      <childProjects>uom-automation-ios-reboot</childProjects>
      <threshold>
        <name>FAILURE</name>
        <ordinal>2</ordinal>
        <color>RED</color>
        <completeBuild>true</completeBuild>
      </threshold>
    </hudson.tasks.BuildTrigger>
  </publishers>
  <buildWrappers>
    <org.jenkinsci.plugins.configfiles.buildwrapper.ConfigFileBuildWrapper plugin="config-file-provider@2.13">
      <managedFiles>
        <org.jenkinsci.plugins.configfiles.buildwrapper.ManagedFile>
          <fileId>a51f69e6-0510-4368-a1ed-2b707227dfd0</fileId>
          <targetLocation>/Users/qa/home/workspace/uom-automation-ios/configurationFiles</targetLocation>
          <variable>CONFIGPROPS</variable>
          <replaceTokens>false</replaceTokens>
        </org.jenkinsci.plugins.configfiles.buildwrapper.ManagedFile>
        <org.jenkinsci.plugins.configfiles.buildwrapper.ManagedFile>
          <fileId>c34027cf-25fb-4447-8de6-89be7ce3e190</fileId>
          <targetLocation>/Users/qa/home/workspace/uom-automation-ios/configurationFiles</targetLocation>
          <variable>TESTNG</variable>
          <replaceTokens>false</replaceTokens>
        </org.jenkinsci.plugins.configfiles.buildwrapper.ManagedFile>
      </managedFiles>
    </org.jenkinsci.plugins.configfiles.buildwrapper.ConfigFileBuildWrapper>
    <hudson.plugins.build__timeout.BuildTimeoutWrapper plugin="build-timeout@1.17.1">
      <strategy class="hudson.plugins.build_timeout.impl.NoActivityTimeOutStrategy">
        <timeoutSecondsString>300</timeoutSecondsString>
      </strategy>
      <operationList>
        <hudson.plugins.build__timeout.operations.FailOperation/>
      </operationList>
    </hudson.plugins.build__timeout.BuildTimeoutWrapper>
    <hudson.plugins.timestamper.TimestamperBuildWrapper plugin="timestamper@1.8.7"/>
  </buildWrappers>
</project>

#uom-automation-ios-reboot
<?xml version='1.0' encoding='UTF-8'?>
<project>
  <actions/>
  <description></description>
  <keepDependencies>false</keepDependencies>
  <properties/>
  <scm class="hudson.scm.NullSCM"/>
  <quietPeriod>180</quietPeriod>
  <assignedNode>macmini</assignedNode>
  <canRoam>false</canRoam>
  <disabled>false</disabled>
  <blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>
  <blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>
  <triggers/>
  <concurrentBuild>false</concurrentBuild>
  <builders>
    <hudson.tasks.Shell>
      <command># zip up a copy of the appium log and attach to email
cd $HOME/Home/workspace/uom-automation-ios
zip appium.zip.log appium.log
cp -R appium.zip.log ../uom-automation-ios-reboot</command>
    </hudson.tasks.Shell>
    <hudson.tasks.Shell>
      <command># reboot mac mini
sudo shutdown -r +1</command>
    </hudson.tasks.Shell>
  </builders>
  <publishers>
    <hudson.plugins.emailext.ExtendedEmailPublisher plugin="email-ext@2.52">
      <recipientList>$DEFAULT_RECIPIENTS</recipientList>
      <configuredTriggers>
        <hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
          <email>
            <subject>$PROJECT_DEFAULT_SUBJECT</subject>
            <body>$PROJECT_DEFAULT_CONTENT</body>
            <recipientProviders>
              <hudson.plugins.emailext.plugins.recipients.ListRecipientProvider/>
            </recipientProviders>
            <attachmentsPattern></attachmentsPattern>
            <attachBuildLog>false</attachBuildLog>
            <compressBuildLog>false</compressBuildLog>
            <replyTo>$PROJECT_DEFAULT_REPLYTO</replyTo>
            <contentType>project</contentType>
          </email>
        </hudson.plugins.emailext.plugins.trigger.AlwaysTrigger>
      </configuredTriggers>
      <contentType>default</contentType>
      <defaultSubject>$DEFAULT_SUBJECT</defaultSubject>
      <defaultContent>$DEFAULT_CONTENT</defaultContent>
      <attachmentsPattern>**/*zip.log</attachmentsPattern>
      <presendScript>$DEFAULT_PRESEND_SCRIPT</presendScript>
      <postsendScript>$DEFAULT_POSTSEND_SCRIPT</postsendScript>
      <attachBuildLog>false</attachBuildLog>
      <compressBuildLog>false</compressBuildLog>
      <replyTo>$DEFAULT_REPLYTO</replyTo>
      <saveOutput>false</saveOutput>
      <disabled>false</disabled>
    </hudson.plugins.emailext.ExtendedEmailPublisher>
  </publishers>
  <buildWrappers>
    <hudson.plugins.build__timeout.BuildTimeoutWrapper plugin="build-timeout@1.17.1">
      <strategy class="hudson.plugins.build_timeout.impl.NoActivityTimeOutStrategy">
        <timeoutSecondsString>180</timeoutSecondsString>
      </strategy>
      <operationList>
        <hudson.plugins.build__timeout.operations.FailOperation/>
      </operationList>
    </hudson.plugins.build__timeout.BuildTimeoutWrapper>
    <hudson.plugins.timestamper.TimestamperBuildWrapper plugin="timestamper@1.8.7"/>
  </buildWrappers>
</project>
