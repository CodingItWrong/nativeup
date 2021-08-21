# nativeup

Script to set up a new React Native CLI or Expo project with some basic libraries, including:

- **Testing** (CLI only)
  - Unit Tests: [Jest](https://jestjs.io/)
  - Component Tests: [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) with [jest-native](https://github.com/testing-library/jest-native)
- **Code Standardization:** React Native Community [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) setup

## Requirements

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [React Native CLI and/or Expo CLI](https://facebook.github.io/react-native/docs/getting-started), depending on which type(s) of project you want to create

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
```

## License

MIT
