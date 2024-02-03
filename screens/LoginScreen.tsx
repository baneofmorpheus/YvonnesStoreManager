import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import { Entypo } from "@expo/vector-icons"
import type { RootState } from '../store'
import TileCard from '../components/cards/TileCard';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { loginUser } from '../store/reducers/authentication';
import { useEffect } from 'react';


const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType>>();
    const user = useSelector((state: RootState) => state.authentication.user)
    const dispatch = useDispatch()



    useEffect(() => {

        if (!!user && !!user.idToken) {
            navigation.navigate('BottomTab', { screen: 'Home' })

        }

    }, [])



    const signInWithGoogle = async (): Promise<void> => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo', userInfo);

            dispatch(loginUser(userInfo))
            navigation.navigate('BottomTab', { screen: 'Home' })


        } catch (error: any) {
            console.log(error);

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }

    }
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollView} >

                <Text style={styles.appName}>Yvonne's Store Management</Text>

                <View style={styles.authParent}>
                    <Text style={styles.greeting}>Welcome</Text>

                    <TouchableOpacity onPress={signInWithGoogle} style={styles.loginOption}>

                        <Text>Login  With Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.supportLabel}>

                        <Text>Need Help?</Text>
                    </TouchableOpacity>

                </View>



            </ScrollView>
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 50,
    },

    loginOption: {
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        width: "100%",


    },
    tileParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 21,
        flexWrap: 'wrap',
        flex: 1

    },
    tileChild: {
        marginBottom: 20,
    },

    authParent: {
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        flex: 1,
        width: "70%",
        alignSelf: 'center',


    },
    appName: {
        fontSize: 20,
        alignSelf: 'center'
    },
    greeting: {
        fontSize: 24


    },
    supportLabel: {
        alignSelf: 'flex-end',
    },
    scrollView: {
        padding: 10,

        flex: 1,


    },
});

export default LoginScreen