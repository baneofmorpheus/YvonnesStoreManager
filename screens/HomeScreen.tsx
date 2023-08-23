import { useNavigation } from '@react-navigation/native';
import type {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';


import { Button } from 'react-native';




const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Home'>>();
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Products', { name: 'Janeo' })
            }
        />
    );
};

export default HomeScreen