import { StyleProp, ViewStyle, } from 'react-native';
import { Ionicons, MaterialIcons, Entypo ,Feather} from "@expo/vector-icons"


const allowedIcons = {
    Ionicons,
    MaterialIcons,
    Entypo,
    Feather
    
}

export interface IconProps {
    name: any,
    // name: IconNames<typeof allowedIcons[keyof typeof allowedIcons]['glyphMap']>
    component: keyof typeof allowedIcons,
    style?: StyleProp<ViewStyle>,
    size?: number
}

const DynamicIcon: React.FC<IconProps> = ({ component, name, size, style }) => {

    const IconComponent = allowedIcons[component]
    return (

        <IconComponent name={name} size={size} style={style} />

    );
};



export default DynamicIcon