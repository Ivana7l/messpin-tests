# Testing Android

## Commands (run in cmd.exe terminal)
### Start Appium server
```bash
C:\Users\ivana> appium
```
### Start Android device emulator (Pixel_2_API_31 can be replaced with anyithing in the result from list of available android devices)
```bash
C:\Users\ivana> C:\Android\android-sdk\emulator\emulator -avd Pixel_2_API_31
```
### List available android devices
```bash
C:\Users\ivana> C:\Android\android-sdk\emulator\emulator emulator -list-avds
```

## Tools
### Create new adroid emulator
Open Android Studio -> Tools -> Device Manager -> Create Device
### Install additional android SDKs
Open Android Studio -> Tools -> SDK Manager -> Select desired SDK checkboxes -> Click apply

## Run all specs
npx wdio run .\config\wdio.android.conf.js
## Run one spec
npx wdio run .\config\wdio.android.conf.js --spec ..\tests\specs\webview.spec.ts


## Error cannt create a session - appium android inspector
adb uninstall io.appium.uiautomator2.server 
adb uninstall io.appium.uiautomator2.server.test