import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>Shop Component</Text>
                <TouchableOpacity style={{ backgroundColor: 'red' }}
                     onPress={() => {this.props.navigation.navigate('DrawerOpen');  }}
                >
                         <Text>GO TO MENU</Text>
                </TouchableOpacity>
            </View>

        );
    }
}