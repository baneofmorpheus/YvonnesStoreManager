import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import TileCard from '../components/cards/TileCard';
import SafeArea from '../components/utility/SafeArea';

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType>>();
    return (
        <SafeArea style={styles.container}>
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
                                navigation.navigate('BottomTab', { screen: 'Sales' })
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
                                navigation.navigate('BottomTab', { screen: 'Products' })
                        }
                        style={styles.tileChild}


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
                                navigation.navigate('BottomTab', { screen: 'Sales' })
                        }
                        style={styles.tileChild}



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
                                navigation.navigate('BottomTab', { screen: 'Sales' })
                        }
                        style={styles.tileChild}



                    />
                    <TileCard title='Suppliers'
                        dataCount={30}
                        countLabel="Total Suppliers."
                        icon={{
                            name: "truck",
                            component: 'Feather',
                            style: { marginLeft: -5 },

                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('BottomTab', { screen: 'Supplier' })
                        }
                        style={styles.tileChild}



                    />
                    <TileCard title='Purchases'
                        dataCount={30}
                        countLabel="Total Suppliers."
                        icon={{
                            name: "shopping-bag",
                            component: 'Feather',
                            style: { marginLeft: -5 },

                        }
                        }
                        buttonCallBack={
                            () =>
                                navigation.navigate('BottomTab', { screen: 'Sales' })
                        }
                        style={styles.tileChild}



                    />

                </View>
            </ScrollView>
        </SafeArea>

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
        flexGrow: 1

    },
});

export default HomeScreen