import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Text, TextInput, Button } from 'react-native';

const WidgetSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

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
      <Formik
        initialValues={widget.attributes}
        validationSchema={WidgetSchema}
        onSubmit={this.handleSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <View>
            <Text>Name</Text>
            <TextInput
              style={styles.textInput}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {errors.name ? (
              <Text style={styles.error}>{errors.name}</Text>
            ) : null}

            <Text>Description</Text>
            <TextInput
              style={styles.textInput}
              value={values.description}
              onChangeText={handleChange('description')}
            />
            {errors.description ? (
              <Text style={styles.error}>{errors.description}</Text>
            ) : null}

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
  error: {
    color: 'red',
  },
};
