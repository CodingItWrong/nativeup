import React from 'react';
import { observer } from 'mobx-react';
import { FlatList, View, Text, Button } from 'react-native';
import { widgetStore } from '../stores';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    widgetStore.loadAll();
  }

  render() {
    if (widgetStore.loading) {
      return <Text>Loading…</Text>;
    } else if (widgetStore.error) {
      return <Text>An error occurred loading widgets.</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={widgetStore.all().slice()}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Button
                title={item.attributes.name}
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    widget: item,
                  });
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

export default observer(HomeScreen);
