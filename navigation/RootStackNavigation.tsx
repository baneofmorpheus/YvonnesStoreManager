import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackNavigationType = {
    Products: { name: string };
    Home: { name: string };
};
const Stack = createBottomTabNavigator<RootStackNavigationType>();

const RootStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { paddingBottom: 10 },
                tabBarLabelStyle: { fontSize: 12 },
                headerShown:false
            }}


        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Welcome', tabBarLabel: 'Home',
                    tabBarIcon: () => null,
                }
                }
            />
            < Stack.Screen name="Products"

                options={{
                    title: 'Products', tabBarLabel: 'Products',

                    tabBarIcon: () => null,
                }
                }

                component={ProductsScreen} />
        </Stack.Navigator>
    );
};

export default RootStackNavigation;