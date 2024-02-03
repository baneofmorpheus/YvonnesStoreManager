import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { ReactNode } from 'react';

interface SafeAreaProps {

    style?: Record<string, string|number>
    children: ReactNode

}

const SafeArea: React.FC<SafeAreaProps> = ({ style, children }) => {

    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                ...style, ...{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom
                }
            }}
        >
            {children}

        </View>)


}

export default SafeArea
