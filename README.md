# nativeup

React Native project setup script, using:

- Initialized with either `react-native` CLI or Expo
- ESLint
- Mocha unit testing
- Enzyme component testing
- Detox end-to-end testing
- Git repo initialized

To learn more about using Mocha, Enzyme, and Detox for testing, visit [reactnativetesting.io](https://reactnativetesting.io)

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

```diff
"test": "node_modules/.bin/jest test/**/*.spec.js",
```

- Add lint NPM script:

```diff
+    `"lint": "eslint *.js e2e/*.js test/**/*.js"`
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
