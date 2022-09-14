# nativeup

**DEPRECATED:** this library has been superceded by [jessup](https://github.com/codingitwrong/jessup#readme), a project setup script for React Native, React for the web, and vanilla JS. Please check it out.

Script to set up a new React Native CLI or Expo project with some basic libraries, including:

- **Testing**
  - Unit Tests: [Jest](https://jestjs.io/)
  - Component Tests: [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) with [jest-native](https://github.com/testing-library/jest-native)
- **Code Standardization:** React Native Community [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) setup

## Requirements

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Expo CLI](https://facebook.github.io/react-native/docs/getting-started) if you want to create an Expo project

## Usage

Add `nativeup/bin` to your `PATH`.

```
# nativeup [projecttype] my-new-app-name
```

Where `[projecttype]` is one of:

- `cli` - React Native CLI
- `expo` - Expo

## Manual Steps

The following steps must be done manually after running `nativeup`:

### Expo

In `package.json`, add:

```diff
+  "jest": {
+    "preset": "jest-expo"
+  },
   "private": "true"
 }
```

## License

MIT
