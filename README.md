# nativeup

React Native project setup script, using:

- Initialized with either `react-native` CLI or Expo
- [React Navigation][react-navigation]
- [Formik][formik] for forms
- Lodash-ES for utility functions
- [Reactotron][reactotron] for debugging, including network requests
- [Storybook][storybook] for viewing and designing components
- [ESLint][eslint] and [Prettier][prettier]
- Git repo initialized
- JSON:API based data layer
  - [Axios][axios] for the client
  - [`@reststate/mobx`][reststate-mobx] for the data layer
- Testing
  - [Jest][jest] unit testing
  - [React Native Testing Library][rntl] component testing
  - [Detox][detox] end-to-end testing, with [React Native Config][rn-config] for test-specific configuration

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

- If there isn't a `yarn test` script, add the following:

```sh
"test": "jest",
```

- Add lint and format NPM script:

```diff
+    "lint": "eslint \"**/*.js\"",
+    "format": "prettier --write \"**/*.js\"",
```

- If using `cli`, configure Detox, replacing `YourAppName` with the name of the app you entered:

```diff
 {
   ...
   "detox": {
-    "test-runner": "jest"
+    "test-runner": "jest",
+    "configurations": {
+      "ios.sim.debug": {
+        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/YourAppName.app",
+        "build": "ENVFILE=.env.detox xcodebuild -project ios/YourAppName.xcodeproj -scheme YourAppName -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=NO",
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
[eslint]: https://eslint.org/
[formik]: https://jaredpalmer.com/formik/
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[react-navigation]: https://reactnavigation.org/
[reactotron]: https://github.com/infinitered/reactotron
[reststate-mobx]: https://mobx.reststate.org/
[rntl]: https://callstack.github.io/react-native-testing-library/
[rn-config]: https://github.com/luggit/react-native-config
[storybook]: https://storybook.js.org/
[yarn]: https://yarnpkg.com/en/docs/install
