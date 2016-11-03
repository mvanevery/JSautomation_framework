# placeholder for qajenkins job config files. not really a Jenkinsfile. MM JCH 11-2-2016

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
