import React from 'react';
import { OAuth } from '@codingitwrong/react-login';
import {
  Button,
  TextInput,
  Text,
  View,
} from 'react-native';
import api, { setToken } from './api';

const Auth = ({ children }) => (
  <OAuth
    httpClient={api}
    handleAccessToken={setToken}
    renderForm={renderForm}
  >
    {children}
  </OAuth>
);

const renderForm = ({
  username,
  password,
  error,
  handleChange,
  handleLogIn,
}) => (
  <View style={{ marginTop: 50 }}>
    {error ? <Text>{error}</Text> : null}
    <TextInput
      placeholder='Email'
      value={username}
      onChangeText={handleChange('username')}
      autoCapitalize="none"
    />
    <TextInput
      secureTextEntry={true}
      placeholder='Password'
      value={password}
      onChangeText={handleChange('password')}
      autoCapitalize="none"
    />
    <Button
      title="Log In"
      onPress={handleLogIn}
    />
  </View>
);

export default Auth;
