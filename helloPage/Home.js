import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import React, {Component} from 'react';
export default class Home extends Component {
    static navigationOptions = {
      title: 'Welcome',
      headerMode: 'screen'
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
        <Text>Welcome to Home</Text>
        <Button
      title="Go to Jane's Home"
      onPress={() => navigate('Profile', {name: 'Jane'})}
    />
    </View>
      );
    }
  }