import firestore from '@react-native-firebase/firestore';
import { StoreInterface } from '../types/store';


const storesCollectionRef = firestore().collection('stores');


export const getCurrentStoreData = async (userId: string) => {

    console.log('running ' + userId);
    
    let storeData: undefined | StoreInterface;

    const storeSnapshot = await storesCollectionRef.where('userId', '==', userId).limit(1).get()
    storeSnapshot.forEach(documentSnapshot => {
        storeData = documentSnapshot.data() as StoreInterface
    });



    return storeData;
}