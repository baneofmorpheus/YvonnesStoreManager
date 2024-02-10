import firestore from '@react-native-firebase/firestore';
import { StoreInterface } from '../types/store';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const storesCollectionRef = firestore().collection('stores');


export const getCurrentStoreData = async (userId: string) => {

    let selectorData = useSelector((state: RootState) => state.store.currentStore)

    console.log('running ' + userId);
    console.log('runningX ' + selectorData);
    
    let storeData: undefined | StoreInterface;

    const storeSnapshot = await storesCollectionRef.where('userId', '==', userId).limit(1).get()
    storeSnapshot.forEach(documentSnapshot => {
        storeData = documentSnapshot.data() as StoreInterface
    });



    return storeData;
}