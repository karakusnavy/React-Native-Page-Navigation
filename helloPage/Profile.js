import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import React, {Component} from 'react';
export default class Profile extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>Welcome to Profile</Text>
            <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Home', {name: 'Jane'})}
        />
        </View>
      );
    }
  }