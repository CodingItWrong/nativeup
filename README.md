# nativeup

React Native project setup script, using:

- Initialized with either `react-native` CLI, `create-react-native-app`, or Expo
- ESLint
- Mocha unit testing
- Enzyme component testing
- Detox end-to-end testing, if CLI was selected
- Git repo initialized

To learn more about using Jest, Enzyme, and Detox for testing, visit [reactnativetesting.io](https://reactnativetesting.io)

## Usage

Add `nativeup/bin` to your `PATH`.

```
# nativeup [projecttype] my-new-app-name
```

Where `[projecttype]` is one of:

- `cli` - React Native CLI
- `crna` - Create React Native App
- `expo` - Expo

## Manual Configuration

The following changes to `package.json` need to be made manually after running the script:

- Change the `yarn test` script to run Mocha with the following settings:

```diff
-    "test": "jest"
+    "test": "mocha --require @babel/register --require tests/setup.js tests/**/*.spec.js",
```

- Add lint NPM script:

```diff
+    `"lint": "eslint *.js e2e/*.js tests/**/*.js"`
```

- Configure Jest to run the `setup.js` file:

```diff
   "jest": {
-    "preset": "react-native"
+    "preset": "react-native",
+    "setupFiles": [
+      "./tests/setup.js"
+    ]
   },
```

- Configure Detox, replacing `YourAppName` with the name of the app you entered:

```diff
 {
   ...
   "detox": {
-    "test-runner": "jest"
+    "test-runner": "jest",
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
