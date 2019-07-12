import React from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const widget = navigation.getParam('widget');
    return {
      title: widget.attributes.name,
    };
  };

  handleSubmit = () => {
    // not actually submitting yet
    this.props.navigation.goBack();
  };

  render() {
    const widget = this.props.navigation.getParam('widget');
    return (
      <Formik initialValues={widget.attributes} onSubmit={this.handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <View>
            <Text>Name</Text>
            <TextInput
              style={styles.textInput}
              value={values.name}
              onChangeText={handleChange('name')}
            />

            <Text>Description</Text>
            <TextInput
              style={styles.textInput}
              value={values.description}
              onChangeText={handleChange('description')}
            />

            <Button title="Save" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = {
  textInput: {
    padding: 4,
    borderColor: '#999',
    borderWidth: 1,
  },
};
