import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { Avatar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
const SettingsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Products'>>();
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([10, 20, 40]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
    const [dateFilter, setDateFilter] = React.useState<{ startDate: Date | undefined, endDate: Date | undefined }>({ startDate: undefined, endDate: undefined });
    const dateFilterBottomSheetRef = React.useRef<BottomSheetModal>(null);
    const snapPoints = React.useMemo(() => ['25%'], []);

    // callbacks
    const handlePresentModalPress = React.useCallback(() => {
        dateFilterBottomSheetRef.current?.present();
    }, []);
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 5,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 6,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);
    const renderBackdrop = React.useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return (
        <BottomSheetModalProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView} >
                    <View style={styles.header}>
                        <Avatar.Icon style={styles.avatarIcon} size={55} icon="face-man" />
                        <View>


                            <Text style={styles.userName}>Yvonne</Text>
                            <Text style={styles.storeName}>SoulTrain Store</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.settingsOptions}>
                            <Text style={styles.settingsOptionsLabel}>Store Management</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsOptions}>
                            <Text style={styles.settingsOptionsLabel}>Contact Us</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsOptions}>
                            <Text style={styles.settingsOptionsLabel}>Privacy</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.logOutButtonContainer} >
                        <Text style={styles.logOutButton}>Log Out</Text>
                    </TouchableOpacity>

                    <View>


                        <View style={styles.appInfoItem}>
                            <Text style={styles.appInfoLabel}>Model: </Text>
                            <Text>Iphone 12 Pro</Text>
                        </View>
                        <View style={styles.appInfoItem}>
                            <Text style={styles.appInfoLabel}>OS Version: </Text>
                            <Text>10.20.1</Text>
                        </View>
                        <View style={styles.appInfoItem}>
                            <Text style={styles.appInfoLabel}>App Version: </Text>
                            <Text>10.20.1</Text>
                        </View>

                    </View>




                </ScrollView>

            </SafeAreaView>
        </BottomSheetModalProvider>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },

    avatarIcon: {
        backgroundColor: 'black'
    },
    userName: {
        fontSize: 20,
        marginBottom: 5
    },

    storeName: {
        fontStyle: 'italic'
    },
    settingsOptionsLabel: {
        fontSize: 17
    },
    settingsOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.4)',

    },
    logOutButton: {
        fontSize: 20

    },
    appInfoItem: {
        flexDirection:'row',
        marginBottom:3

    },
    appInfoLabel:{
        fontWeight: 'bold'
    },
    logOutButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        marginTop: 70,
        marginBottom:70


    },


    header: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        columnGap: 20


    },


    scrollView: {
        padding: 10,
        flex: 1
    }
})

export default SettingsScreen;