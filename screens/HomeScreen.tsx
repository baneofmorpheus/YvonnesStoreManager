import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, View, StyleSheet, SafeAreaView,  ScrollView } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import TileCard from '../components/cards/TileCard';


const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Home'>>();
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollView} >
                <View style={styles.greetingContainer}>
                    <View style={styles.greetingIconContainer}>

                        <Text>Good Evening </Text>
                        <Entypo name="moon" size={24} color="black" />
                    </View>
                    <Text style={styles.userName}>Yvonne</Text>
                </View>
                <View style={styles.tileParent}>

                    <TileCard title='Sales'
                        dataCount={20}
                        countLabel="Sales Today!."
                        icon={{
                            name: "attach-money",
                            style: { marginLeft: -10 },
                            component: 'MaterialIcons'
                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('Sales', { name: 'Janeo' })
                        }

                        style={styles.tileChild}


                    />
                    <TileCard title='Products'
                        dataCount={30}
                        countLabel="Products Currently!."
                        icon={{
                            name: "box",
                            component: 'Feather',
                            style: { marginLeft: -5 },

                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('Sales', { name: 'Janeo' })
                        }


                    />
                    <TileCard title='Expenses'
                        dataCount={30}
                        countLabel="Expenses Today!."
                        icon={{
                            name: "receipt-outline",
                            component: 'Ionicons',
                            style: { marginLeft: -5 },

                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('Sales', { name: 'Janeo' })
                        }


                    />
                    <TileCard title='Customers'
                        dataCount={30}
                        countLabel="Customers Total!."
                        icon={{
                            name: "users",
                            component: 'Feather',
                            style: { marginLeft: -5 },

                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('Sales', { name: 'Janeo' })
                        }


                    />

                </View>
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

export default HomeScreen