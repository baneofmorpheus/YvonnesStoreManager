import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, View, StyleSheet, SafeAreaView,  ScrollView } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import TileCard from '../components/cards/TileCard';


const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Home'>>();
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollView} >
                <Text>Login</Text>
            </ScrollView>
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    greetingContainer: {
        marginBottom: 20,
    },
    greetingIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 20
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

    scrollView: {
        padding: 10,
        flex: 1

    },
});

export default LoginScreen