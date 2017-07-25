import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                    <Text>GO BACK</Text>
                </TouchableOpacity>
            </View>
             );
    }
}