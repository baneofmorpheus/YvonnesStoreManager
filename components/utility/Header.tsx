import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
// import type {
//     BottomHeaderProps,
// } from '@react-navigation/elements';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
const Header: React.FC<BottomTabHeaderProps> = ({ options, route }) => {


    const title = getHeaderTitle(options, route.name);

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.title}>{title}</Text>


        </View>)


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        borderBottomWidth: 2

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
        // alignSelf: 'center'
    }
})

export default Header
