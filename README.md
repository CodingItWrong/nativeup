# nativeup

React Native project setup script, using:

- Initialized with either `react-native` CLI or Expo
- Lodash-ES for utility functions
- [Reactotron][reactotron] for debugging, including network requests
- [Storybook][storybook] for viewing and designing components
- [ESLint][eslint] and [Prettier][prettier]
- Git repo initialized
- Authenticated Web Service
  - [Axios][axios] for the client
  - [`@codingitwrong/react-login`][react-login] for the login form
  - [`@reststate/mobx`][reststate-mobx] for the data layer
- Testing
  - [Mocha][mocha] unit testing
  - [Enzyme][enzyme] component testing
  - [Detox][detox] end-to-end testing

To learn more about these testing tools, visit [reactnativetesting.io](https://reactnativetesting.io)

## Requirements

- Node
- [Yarn][yarn]
- [React Native CLI and/or Expo CLI](https://facebook.github.io/react-native/docs/getting-started), depending on which type(s) of project you want to create
- [Detox CLI][detox-installation] and its dependencies

## Usage

Add `nativeup/bin` to your `PATH`.

```
# nativeup [projecttype] my-new-app-name
```

Where `[projecttype]` is one of:

- `cli` - React Native CLI
- `expo` - Expo

## Manual Configuration

The following changes to `package.json` need to be made manually after running the script:

- Add or update the `yarn test` script the following:

```sh
"test": "mocha test/**/*.spec.js",
```

- Add lint and format NPM script:

```diff
+    "lint": "eslint \"**/*.js\"",
+    "format": "prettier --write \"**/*.js\"",
```

- Configure Detox. If using `expo`, use the following:

```diff
 {
   ...
   "detox": {
-    "test-runner": "mocha"
+    "test-runner": "mocha",
+    "configurations": {
+      "ios.sim": {
+        "binaryPath": "bin/Exponent.app",
+        "type": "ios.simulator",
+        "name": "iPhone 7"
+      }
+    }
   }
 }
```


If using `cli`, use the following, replacing `YourAppName` with the name of the app you entered:

```diff
 {
   ...
   "detox": {
-    "test-runner": "mocha"
+    "test-runner": "mocha",
+    "configurations": {
+      "ios.sim.debug": {
+        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/YourAppName.app",
+        "build": "xcodebuild -project ios/YourAppName.xcodeproj -scheme YourAppName -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
+        "type": "ios.simulator",
+        "name": "iPhone 8"
+      }
+    }
   }
 }
```

## License

Apache-2.0

[axios]: https://github.com/axios/axios
[detox]: https://github.com/wix/Detox
[detox-installation]: https://reactnativetesting.io/e2e/setup.html#installing-detox
[enzyme]: https://airbnb.io/enzyme/
[eslint]: https://eslint.org/
[mocha]: https://mochajs.org/
[prettier]: https://prettier.io/
[react-login]: https://github.com/CodingItWrong/react-login
[reactotron]: https://github.com/infinitered/reactotron
[reststate-mobx]: https://mobx.reststate.org/
[storybook]: https://storybook.js.org/
[yarn]: https://yarnpkg.com/en/docs/install
