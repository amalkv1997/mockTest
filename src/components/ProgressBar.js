
import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomBar = ({
}) => {
    return (
        <View>
            <View style={{ justifyContent: 'center' }}>
            <Text style={{marginTop:10}}>Progress</Text>
                <View
                    style={{

                        width: '100%',
                        height: 15,
                        marginVertical: 10,
                        borderRadius: 5,
                        borderColor: '#5fdde8',
                        borderWidth: 1,
                    }}
                />
                <View
                    style={{
                        width: 150,
                        height: 15,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: '#5fdde8',
                        position: 'absolute',
                        bottom: 20
                    }}
                />
                <View
                    style={{
                        width: 60,
                        height: 20,
                        bottom: 10
                    }}>
                    <Text style={{ textAlign: 'right' }}></Text>
                </View>
            </View>
        </View>
    );
};
export default CustomBar;