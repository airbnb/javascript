module.exports = {
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  rules: {":Build:::Conference: Developer Productivity Engineering Summit - November 2-3, 2022. Early Birds learn more and register here!
Docs
About 
Training
News 
Services
Gradle Enterprise
Installation
The current Gradle release is 7.5.1. You can download binaries and view docs for all Gradle versions from the releases page.

Prerequisites
Additional resources
Installing with a package manager
Installing manually
Upgrade with the Gradle Wrapper
Older Releases
Command-Line Completion
Prerequisites
Gradle runs on all major operating systems and requires only a Java JDK version 8 or higher to be installed. To check, run java -version:

$ java -version
java version "1.8.0_121"
Additional resources
On-demand and live online training is available for free to Gradle users.
Self-paced tutorials are a good place to try Gradle with a variety of languages in addition to the docs.
Gradle has a visual build inspection tool: Build Scan™.
Finally, the Gradle Newsletter is a great way to keep UP-TO-DATE, with issues crafted monthly.
Installing with a package manager
SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix-based systems.

$ sdk install gradle 7.5.1

Homebrew is “the missing package manager for macOS”.

$ brew install gradle


Other package managers are available, but the version of Gradle distributed by them is not controlled by Gradle, Inc. Linux package managers may distribute a modified version of Gradle that is incompatible or incomplete when compared to the official version (available from SDKMAN! or below).

› Additional helpful information
Installing manually
Step 1. Download the latest Gradle distribution
The current Gradle release is version 7.5.1, released on 05 Aug 2022. The distribution zip file comes in two flavors:

Binary-only
Complete, with docs and sources
If in doubt, choose the binary-only version and browse docs and sources online.

Need to work with an older version? See the releases page.

Step 2. Unpack the distribution
Linux & MacOS users
Unzip the distribution zip file in the directory of your choosing, e.g.:

$ mkdir /opt/gradle
$ unzip -d /opt/gradle gradle-7.5.1-bin.zip
$ ls /opt/gradle/gradle-7.5.1
LICENSE  NOTICE  bin  getting-started.html  init.d  lib  media
Microsoft Windows users
Create a new directory C:\Gradle with File Explorer.

Open a second File Explorer window and go to the directory where the Gradle distribution was downloaded. Double-click the ZIP archive to expose the content. Drag the content folder gradle-7.5.1 to your newly created C:\Gradle folder.

Alternatively you can unpack the Gradle distribution ZIP into C:\Gradle using an archiver tool of your choice.

Step 3. Configure your system environment
Linux & MacOS users
Configure your PATH environment variable to include the bin directory of the unzipped distribution, e.g.:

 $ export PATH=$PATH:/opt/gradle/gradle-7.5.1/bin
Microsoft Windows users
In File Explorer right-click on the This PC (or Computer) icon, then click Properties -> Advanced System Settings -> Environmental Variables.

Under System Variables select Path, then click Edit. Add an entry for C:\Gradle\gradle-7.5.1\bin. Click OK to save.

Step 4. Verify your installation
Open a console (or a Windows command prompt) and run gradle -v to run gradle and display the version, e.g.:

$ gradle -v

------------------------------------------------------------
Gradle 7.5.1
------------------------------------------------------------
› Additional helpful information
Upgrade with the Gradle Wrapper
If your existing Gradle-based build uses the Gradle Wrapper, you can easily upgrade by running the wrapper task, specifying the desired Gradle version:

$ ./gradlew wrapper --gradle-version=7.5.1 --distribution-type=bin
Note that it is not necessary for Gradle to be installed to use the Gradle wrapper. The next invocation of gradlew or gradlew.bat will download and cache the specified version of Gradle.

$ ./gradlew tasks
Downloading https://services.gradle.org/distributions/gradle-7.5.1-bin.zip
...
› Additional helpful information
Older Releases
You can find all releases and their checksums on the releases page.

Command-Line Completion
Command-line completion scripts are available for bash and zsh. This provides completion for Gradle tasks and command-line options.

© Gradle Inc. 2022
Careers | Privacy | Terms of Service | Contact
This website uses cookies and other technology to provide you a more personalized experience.Accept"},
};
