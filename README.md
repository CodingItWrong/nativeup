# nativeup

Script to set up a new React Native CLI or Expo project with some basic libraries, including:

- **Testing**
  - Unit Tests: [Jest][jest]
  - Component Tests: [React Native Testing Library][rntl]
- **Code Standardization:** React Native Community [ESLint][eslint] and [Prettier][prettier] setup

## Requirements

- Node
- [Yarn][yarn]
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
+    "format": "prettier --write \"**/*.js\"",
```

## License

Apache-2.0

[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[formik]: https://jaredpalmer.com/formik/
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[react-navigation]: https://reactnavigation.org/
[reststate-mobx]: https://mobx.reststate.org/
[rntl]: https://callstack.github.io/react-native-testing-library/
[rn-config]: https://github.com/luggit/react-native-config
[storybook]: https://storybook.js.org/
[yarn]: https://yarnpkg.com/en/docs/install
[yup]: https://github.com/jquense/yup
