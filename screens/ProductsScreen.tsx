import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Button } from 'react-native';


const ProductsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Products'>>();
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Home', { name: 'Jane' })
            }
        />
    );
};

export default ProductsScreen;