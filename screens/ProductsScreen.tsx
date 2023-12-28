import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationType } from '../navigation/RootStackNavigation';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as React from 'react';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
const ProductsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationType, 'Products'>>();
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([10, 20, 40]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
    const [dateFilter, setDateFilter] = React.useState<{ startDate: Date | undefined, endDate: Date | undefined }>({ startDate: undefined, endDate: undefined });
    const dateFilterBottomSheetRef = React.useRef<BottomSheetModal>(null);
    const snapPoints = React.useMemo(() => ['25%'], []);
    const [filterTextInput, setFilterTextInput] = React.useState<string>()

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
            name: '112',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: '112',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: '112',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: '112',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 5,
            name: '112',
            calories: 159,
            fat: 6,
        },
        {
            key: 6,
            name: '112',
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
                    <View style={styles.analytics}>

                        <View style={styles.analyticsChild}>
                            <Text style={styles.analyticsChildLabel}>Total Products</Text>
                            <Text style={styles.analyticsChildNumber}>500</Text>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.analyticsChild}>
                            <Text style={styles.analyticsChildLabel}>No. of  Low Stock</Text>
                            <Text style={styles.analyticsChildNumber}>300</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handlePresentModalPress}
                        style={styles.filterButton} >
                        <Text>Filter</Text>
                    </TouchableOpacity>
                    <DataTable>
                        <DataTable.Header >
                            <DataTable.Title textStyle={styles.salesTableHeaderText}>Code.</DataTable.Title>
                            <DataTable.Title textStyle={styles.salesTableHeaderText} numeric>Name</DataTable.Title>
                            <DataTable.Title textStyle={styles.salesTableHeaderText} numeric>Stock Available</DataTable.Title>
                        </DataTable.Header>

                        {items.slice(from, to).map((item) => (
                            <DataTable.Row key={item.key} onPress={() => {
                                console.log(item);
                            }}>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                                <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                            </DataTable.Row>
                        ))}

                        <DataTable.Pagination
                            page={page}
                            numberOfPages={Math.ceil(items.length / itemsPerPage)}
                            onPageChange={(page) => setPage(page)}
                            label={`${from + 1}-${to} of ${items.length}`}
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

            </SafeAreaView>
        </BottomSheetModalProvider>

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
        borderRadius:5,
        padding:10
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

export default ProductsScreen;