import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../../navigation/RootStackNavigation';
import { Text, View, StyleSheet, StyleProp, TouchableOpacity, ViewStyle, } from 'react-native';
import { Ionicons, MaterialIcons, } from "@expo/vector-icons"
import DynamicIcon, { IconProps } from '../../utility/DynamicIcon';


interface TitleProps {
    title: string;
    dataCount: number,
    countLabel: string,
    icon: IconProps,
    style?: StyleProp<ViewStyle>,
    buttonCallBack: () => void

}

const TileCard: React.FC<TitleProps> = ({ title, dataCount, countLabel, icon, style, buttonCallBack }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType>>();
    return (
        <View style={{ ...styles.tileItem, ...style as object }} >


            <View>
                <TouchableOpacity style={styles.button} onPress={
                    buttonCallBack

                }>
                    <Ionicons name="arrow-forward-outline" size={17} color="black" />
                </TouchableOpacity>

                <DynamicIcon size={40} name={icon.name} component={icon.component} style={{ alignSelf: 'flex-start', ...(icon.style as object) }} />
                <Text style={styles.tileTitle}>{title}</Text>
            </View>

            <View>

                <Text style={styles.tileCount}>{dataCount}</Text>
                <Text style={styles.tileCountLabel}>{countLabel}</Text>
            </View>


        </View>

    );
};


const styles = StyleSheet.create({

    tileTitle: {
        fontSize: 20
    },
    tileCount: {
        fontSize: 28


    },
    tileCountLabel: {
        fontSize: 14


    },
    tileItem: {
        width: '48%',
        borderColor: 'black',
        height: 200,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 13

    },


    button: {

        padding: 4,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },

});

export default TileCard