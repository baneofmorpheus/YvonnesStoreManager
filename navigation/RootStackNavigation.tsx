import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, Entypo, MaterialIcons,FontAwesome,AntDesign,Feather } from "@expo/vector-icons"
export type RootStackNavigationType = {
    Products: { name: string };
    Home: { name: string };
    Settings: { name: string };
    Sales: { name: string };
};
const Stack = createBottomTabNavigator<RootStackNavigationType>();

const RootStackNavigation = () => {
    const iconSize = 24;
    const iconColor = 'black';
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { marginBottom: 3,padding:10 },
                tabBarLabelStyle: { fontSize: 12 },
                headerShown: false
            }}


        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Welcome', tabBarLabel: 'Home',
                    tabBarIcon: () => <AntDesign name='home' size={iconSize} color={iconColor} />,
                }
                }
            />
            < Stack.Screen name="Sales"

                options={{
                    title: 'Sales', tabBarLabel: 'Sales',

                    tabBarIcon: () => <MaterialIcons name="attach-money" size={iconSize} color={iconColor} />,
                }
                }

                component={ProductsScreen} />
            < Stack.Screen name="Products"

                options={{
                    title: 'Products', tabBarLabel: 'Products',

                    tabBarIcon: () => <Feather name="box" size={iconSize} color={iconColor} />,
                }
                }

                component={ProductsScreen} />
            < Stack.Screen name="Settings"

                options={{
                    title: 'Settings', tabBarLabel: 'Settings',

                    tabBarIcon: () => <Feather name='settings' size={iconSize} color={iconColor} />,
                }
                }

                component={ProductsScreen} />
        </Stack.Navigator>
    );
};

export default RootStackNavigation;