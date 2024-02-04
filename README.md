# Test to show reproduceable example

## For purposes of submitting bug to React-Native-Vision-Camera lib
- link to package: https://github.com/mrousavy/react-native-vision-camera

# PreRequisites:

## Expo environment
- Install necessary packages: `yarn`

- Run the `expo-dev-client`: `yarn start`

- Open your device based on this build: https://expo.dev/accounts/lucksp/projects/rnvc-test/builds/ed8e64d9-7de2-4f14-8aa1-322de7bffa95 or scan QR code:

![QR Code for dev](image.png)

  - You should not need to make new builds unless modifying native modules or installing new packages (or package versions).  JS changes will hot reload.

## To make new DEV builds: 
- Make sure you have [properly configured to EAS](https://docs.expo.dev/build/setup/)
- run: `eas build --profile development --platform ios`

