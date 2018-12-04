# Weather2BBQ
Weather2BBQ-ReactNative

<b>To run on Android/Apple emulator device:</b>

Apple: Download XCode

Android: Download Android Studio, configure SDK tools and copy file path to clipboard.

Download Genymotion (trial) and Virtual Box. Paste SDK tools link (from clipboard) into the SDK settings in Genymotion. Open the Genymotion shell and start up a mobile phone emulator.


<b>Start expo app: </b>

expo start


<b>Start react native:</b>

react-native start

<b>Google app functionality in emulation</b>


1-download the ARM installation zip from: https://androidfilehost.com/?fid=23252070760974384
Run the emulated device - I used android version 7.0.

Drag the zip file over the emulator window , follow the prompts.
open a new terminal and go to the directory ''/Users/{yourUserName}/Library/Android/sdk/platform-tools'
from here, enter 'adb reboot' to reboot the virtual device - this needs to be done after each installation


2 - install Open Gapps package

go to 'opengapps.org'
Select platform x86.
Select the Android version corresponding to your virtual device. (7.0 for my instance)
Select <b>pico</b>.
Download the selected Open GApps package.
Drag and drop the installer in the new Genymotion virtual device.
Follow the installation instructions.
run adb reboot again (from /Users/{yourUserName}/Library/Android/sdk/platform-tools)

3 - update Google app services
according to the answer here: https://stackoverflow.com/questions/20121883/how-to-install-google-play-services-in-a-genymotion-vm-with-no-drag-and-drop-su
google apps may crash so you need to update it within the device to newest version.
in the virtual device - search for 'Google Play Services' and the top link (or near) should take you tot he google apps update page with a link to download. I found this link unresponsive on click. I'm not sure if it downloaded anything for me.
Running the app after all this the map displays!

<b>Miscellaneous:</b>

npm i react-native-modalbox

npm i react-native-circle-slider


<b>For logging (see in Terminal):</b>

brew cask install android-platform-tools

adb logcat | grep ReactNativeJS
