# nativeup

React Native project setup script, using:

- Initialized with either `react-native` CLI, `create-react-native-app`, or Expo
- ESLint
- Enzyme component testing
- Detox end-to-end testing, if CLI was selected
- Git repo initialized

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

The following steps are not yet automated, and need to be done after running the script:

- Add lint NPM script: `"lint": "eslint *.js e2e/*.js tests/**/*.js"`
- [Detox setup](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#3-add-detox-config-to-packagejson) if using CLI

## License

MIT
