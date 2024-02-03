import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SalesScreen from '../screens/SalesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo, MaterialIcons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons"
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
export type RootStackNavigationType = {
    BottomTab: { screen: keyof BottomStackNavigationType };
    Login: undefined;
};
export type BottomStackNavigationType = {
    Products: { name: string };
    Home: undefined;
    Settings: { name: string };
    Sales: { name: string };
    Login: { name: string };
};
const BottomTab = createBottomTabNavigator<BottomStackNavigationType>();

const BottomTabNavigation = () => {
    const iconSize = 24;
    const iconColor = 'black';




    return (
        <BottomTab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { marginBottom: 3, padding: 10 },
                tabBarLabelStyle: { fontSize: 12 },
                headerShown: false
            }}


        >

            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Welcome', tabBarLabel: 'Home',
                    headerStyle: { display: 'none' },

                    tabBarIcon: () => <AntDesign name='home' size={iconSize} color={iconColor} />,
                }
                }
            />
            < BottomTab.Screen name="Sales"

                options={{
                    title: 'Sales', tabBarLabel: 'Sales',

                    tabBarIcon: () => <MaterialIcons name="attach-money" size={iconSize} color={iconColor} />,
                }
                }

                component={SalesScreen} />
            < BottomTab.Screen name="Products"

                options={{
                    title: 'Products', tabBarLabel: 'Products',

                    tabBarIcon: () => <Feather name="box" size={iconSize} color={iconColor} />,
                }
                }

                component={ProductsScreen} />
            < BottomTab.Screen name="Settings"

                options={{
                    title: 'Settings', tabBarLabel: 'Settings',

                    tabBarIcon: () => <Feather name='settings' size={iconSize} color={iconColor} />,
                }
                }

                component={SettingsScreen} />
        </BottomTab.Navigator>
    );
};

const AuthStack = createStackNavigator<RootStackNavigationType>();
const RootStackNavigation = () => {
    const iconSize = 24;
    const iconColor = 'black';




    return (
        <AuthStack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false

            }}


        >
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{



                }
                }
            />
            <AuthStack.Screen
                name="BottomTab"
                component={BottomTabNavigation}
                options={{



                }
                }
            />

        </AuthStack.Navigator>
    );
};

export default RootStackNavigation;