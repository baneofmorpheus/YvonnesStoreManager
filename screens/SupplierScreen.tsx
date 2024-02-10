import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, StyleSheet, ScrollView, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as React from 'react';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import SafeArea from '../components/utility/SafeArea';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'

import { useEffect } from 'react';
import { getCurrentStoreData } from '../services/StoreService';
import { SupplierInterface } from '../types/store';
import { updateCurrentStoreData } from '../store/reducers/store';


const SupplierScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType>>();
    const user = useSelector((state: RootState) => state.authentication.user)
    const dispatch = useDispatch()

    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([10, 20, 40]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
    const [dateFilter, setDateFilter] = React.useState<{ startDate: Date | undefined, endDate: Date | undefined }>({ startDate: undefined, endDate: undefined });
    const dateFilterBottomSheetRef = React.useRef<BottomSheetModal>(null);
    const snapPoints = React.useMemo(() => ['40%'], []);
    const [filterTextInput, setFilterTextInput] = React.useState<string>()
    const [suppliers, setSuppliers] = React.useState<SupplierInterface[]>([]);
    // callbacks
    const handlePresentModalPress = React.useCallback(() => {
        dateFilterBottomSheetRef.current?.present();
    }, []);
    const handleSheetChanges = React.useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
    }, []);
    let storeData = useSelector((state: RootState) => state.store.currentStore)






    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, suppliers.length);
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


    const handleGetAllSuppliers = async () => {
        try {
            if (!storeData) {

                storeData = await getCurrentStoreData(user!.user!.id)
            }

            if (!storeData) {
                throw new Error('No store data set')
            }
            setSuppliers(storeData.suppliers)

            dispatch(updateCurrentStoreData(storeData))

            console.log('suppliersx', storeData);

        } catch (error) {
            console.log('error handX');

            console.log(error);


        }



    }


    useEffect(() => {
        handleGetAllSuppliers()

    }, []);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return (
        <SafeArea style={styles.container}>
            <BottomSheetModalProvider>
                <ScrollView contentContainerStyle={styles.scrollView} >
                    <View style={styles.analytics}>

                        <View style={styles.analyticsChild}>
                            <Text style={styles.analyticsChildLabel}>Total Suppliers</Text>
                            <Text style={styles.analyticsChildNumber}>{suppliers.length}</Text>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.analyticsChild}>
                            <Text style={styles.analyticsChildLabel}>Store</Text>
                            <Text style={styles.analyticsChildNumber}>{storeData?.name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handlePresentModalPress}
                        style={styles.filterButton} >
                        <Text>Filter</Text>
                    </TouchableOpacity>
                    <DataTable>
                        <DataTable.Header >
                            <DataTable.Title textStyle={styles.salesTableHeaderText}>Name.</DataTable.Title>
                            <DataTable.Title textStyle={styles.salesTableHeaderText} numeric>Phone</DataTable.Title>
                        </DataTable.Header>

                        {suppliers.slice(from, to).map((supplier, index) => (
                            <DataTable.Row key={index} onPress={() => {
                                // console.log(item);
                            }}>
                                <DataTable.Cell>{supplier.name}</DataTable.Cell>
                                <DataTable.Cell numeric>{supplier.phoneNumber}</DataTable.Cell>
                            </DataTable.Row>
                        ))}

                        <DataTable.Pagination
                            page={page}
                            numberOfPages={Math.ceil(suppliers.length / itemsPerPage)}
                            onPageChange={(page) => setPage(page)}
                            label={`${from + 1}-${to} of ${suppliers.length}`}
                            numberOfItemsPerPageList={numberOfItemsPerPageList}
                            numberOfItemsPerPage={itemsPerPage}
                            onItemsPerPageChange={onItemsPerPageChange}
                            showFastPaginationControls
                            selectPageDropdownLabel={'Results per page'}
                        />
                    </DataTable>
                    <View style={styles.container}>

                        <BottomSheetModal
                            ref={dateFilterBottomSheetRef}
                            index={0}
                            snapPoints={snapPoints}
                            onChange={handleSheetChanges}
                            backdropComponent={renderBackdrop}

                        >
                            <View style={styles.bottomSheetModalContainer}>

                                <Text style={styles.flexFilterLabel}>Filter Products</Text>
                                <View style={styles.bottomSheetContent}>
                                    <TextInput
                                        editable
                                        placeholder='Type Name or Code here'
                                        onChangeText={text => setFilterTextInput(text)}
                                        value={filterTextInput}
                                        style={styles.filterTextInput}
                                    />

                                </View>
                                <TouchableOpacity style={styles.filterActionButton} >
                                    <Text> Filter </Text>
                                </TouchableOpacity>
                            </View>

                        </BottomSheetModal>
                    </View>

                </ScrollView>

            </BottomSheetModalProvider>
        </SafeArea>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    salesTableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    filterTextInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        height: 50,
        borderRadius: 5,
        padding: 10
    },
    bottomSheetContent: {
        flexDirection: 'row',
        columnGap: 10

    },
    bottomSheetModalContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        rowGap: 12

    },
    flexFilterLabel: {
        alignSelf: 'flex-start',
        fontSize: 16,
    },
    filterActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: "50%",
        alignSelf: 'center',
        borderRadius: 5,
        height: 40

    },

    filterButton: {
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        height: 24,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    analytics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        padding: 20,
        marginBottom: 30


    },
    analyticsChildNumber: {
        fontWeight: 'bold',
        fontSize: 20
    },
    analyticsChild: {
        width: '50%',
        alignItems: 'center',


    },
    analyticsChildLabel: {
        marginBottom: 5
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: 'black'
    },


    scrollView: {
        padding: 10,
        flex: 1
    }
})

export default SupplierScreen;