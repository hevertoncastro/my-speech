# Introduction
Introducing Minha Fala – the app that gives your voice new life. Designed for individuals who've experienced a CVA and face speech challenges, Minha Fala's special keyboard with useful actions lets you communicate effortlessly with your family. Download now and rediscover the joy of speaking your heart out. Your voice matters, and Minha Fala ensures it's heard.

# Getting Started

This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/0.71/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Create the environment file

Create a `.env` file in the root of the project with the content of `.env.example` file. Replace the example values with your own.

```bash

Use [Yarn](https://yarnpkg.com/) to run the following commands:
## Step 1: Start the Metro Server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:
```bash
yarn start
```
## Step 2: Start your Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:
### For Android
```bash
yarn android
```
### For iOS
```bash
yarn ios
```
If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

# Build

## Android

You will need the keystore file to sign your app in release mode. Make sure you have it before going any further.

Add the `my-release-key.keystore` file under the `android/app` directory.

Create a `gradle.properties` file inside `./android/.gradle` with the following content:

```bash
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=***** # Password of the keystore file (given while creating the keystore file)
MYAPP_RELEASE_KEY_PASSWORD=***** # Same as store password
```

Generate a release build for Android by running the following command:

```bash
cd android && ./gradlew assembleRelease
```

The generated APK can be found under `android/app/build/outputs/apk/release/app-release.apk`, and is ready to be distributed.

## iOS

Coming soon...

# Contribute

Contributions to the Minha Fala project are welcome. If you have any ideas, bug fixes, or feature requests, please submit a pull request.

## Step 1: Clone

Clone the project on Azure DevOps:

```bash
git clone https://github.com/hevertoncastro/my-speech.git
```
## Step 2: Branch

Checkout to `develop` branch:

```bash
git checkout develop
```

Create a new branch for each feature or improvement:

```bash
git checkout -b feature/new-feature-name
```

## Step 3: Pull Request

After you have completed your work, create a pull request to `develop` branch.
